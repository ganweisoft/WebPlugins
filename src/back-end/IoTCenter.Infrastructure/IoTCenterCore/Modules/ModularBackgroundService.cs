﻿using IoTCenterCore.BackgroundTasks;
using IoTCenterCore.Environment.Shell;
using IoTCenterCore.Environment.Shell.Builders;
using IoTCenterCore.Environment.Shell.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace IoTCenterCore.Modules
{
    internal class ModularBackgroundService : BackgroundService
    {
        private static readonly TimeSpan PollingTime = TimeSpan.FromSeconds(10);
        private static readonly TimeSpan MinIdleTime = TimeSpan.FromSeconds(10);

        private readonly ConcurrentDictionary<string, BackgroundTaskScheduler> _schedulers =
            new ConcurrentDictionary<string, BackgroundTaskScheduler>();

        private readonly ConcurrentDictionary<string, IChangeToken> _changeTokens =
            new ConcurrentDictionary<string, IChangeToken>();

        private readonly IShellHost _shellHost;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILogger _logger;

        public ModularBackgroundService(
            IShellHost shellHost,
            IHttpContextAccessor httpContextAccessor,
            ILogger<ModularBackgroundService> logger)
        {
            _shellHost = shellHost;
            _httpContextAccessor = httpContextAccessor;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            stoppingToken.Register(() =>
            {
                _logger.LogInformation("'{ServiceName}' is stopping.", nameof(ModularBackgroundService));
            });

            while (!GetRunningShells().Any())
            {
                try
                {
                    await Task.Delay(MinIdleTime, stoppingToken);
                }
                catch (TaskCanceledException)
                {
                    break;
                }
            }

            var previousShells = Enumerable.Empty<ShellContext>();

            try
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    var runningShells = GetRunningShells();
                    await UpdateAsync(previousShells, runningShells, stoppingToken);
                    previousShells = runningShells;

                    var pollingDelay = Task.Delay(PollingTime, stoppingToken);

                    await RunAsync(runningShells, stoppingToken);
                    await WaitAsync(pollingDelay, stoppingToken);
                }
            }
            catch (Exception ex) when (!ex.IsFatal())
            {
                _logger.LogError(ex, "Error while executing '{ServiceName}', the service is stopping.", nameof(ModularBackgroundService));
            }
        }

        private async Task RunAsync(IEnumerable<ShellContext> runningShells, CancellationToken stoppingToken)
        {
            await GetShellsToRun(runningShells).ForEachAsync(async shell =>
            {
                var tenant = shell.Settings.Name;

                var schedulers = GetSchedulersToRun(tenant);

                _httpContextAccessor.HttpContext = shell.CreateHttpContext();

                foreach (var scheduler in schedulers)
                {
                    if (stoppingToken.IsCancellationRequested)
                    {
                        break;
                    }

                    var shellScope = await _shellHost.GetScopeAsync(shell.Settings);

                    if (shellScope.ShellContext.Pipeline == null)
                    {
                        break;
                    }

                    await shellScope.UsingAsync(async scope =>
                    {
                        var taskName = scheduler.Name;

                        var task = scope.ServiceProvider.GetServices<IBackgroundTask>().GetTaskByName(taskName);

                        if (task == null)
                        {
                            return;
                        }

                        try
                        {
                            scheduler.Run();

                            await task.DoWorkAsync(scope.ServiceProvider, stoppingToken);
                        }
                        catch (Exception ex) when (!ex.IsFatal())
                        {
                            _logger.LogError(ex, "Error while processing background task '{TaskName}' on tenant '{TenantName}'.", taskName, tenant);
                        }
                    });
                }
            });
        }

        private async Task UpdateAsync(IEnumerable<ShellContext> previousShells, IEnumerable<ShellContext> runningShells, CancellationToken stoppingToken)
        {
            var referenceTime = DateTime.UtcNow;

            await GetShellsToUpdate(previousShells, runningShells).ForEachAsync(async shell =>
            {
                var tenant = shell.Settings.Name;

                if (stoppingToken.IsCancellationRequested)
                {
                    return;
                }

                _httpContextAccessor.HttpContext = shell.CreateHttpContext();

                var shellScope = await _shellHost.GetScopeAsync(shell.Settings);

                if (shellScope.ShellContext.Pipeline == null)
                {
                    return;
                }

                await shellScope.UsingAsync(async scope =>
                {
                    var tasks = scope.ServiceProvider.GetServices<IBackgroundTask>();

                    CleanSchedulers(tenant, tasks);

                    if (!tasks.Any())
                    {
                        return;
                    }

                    var settingsProvider = scope.ServiceProvider.GetService<IBackgroundTaskSettingsProvider>();

                    _changeTokens[tenant] = settingsProvider?.ChangeToken ?? NullChangeToken.Singleton;

                    foreach (var task in tasks)
                    {
                        var taskName = task.GetTaskName();

                        if (!_schedulers.TryGetValue(tenant + taskName, out var scheduler))
                        {
                            _schedulers[tenant + taskName] = scheduler = new BackgroundTaskScheduler(tenant, taskName, referenceTime);
                        }

                        if (!scheduler.Released && scheduler.Updated)
                        {
                            continue;
                        }

                        BackgroundTaskSettings settings = null;

                        try
                        {
                            if (settingsProvider != null)
                            {
                                settings = await settingsProvider.GetSettingsAsync(task);
                            }
                        }
                        catch (Exception ex) when (!ex.IsFatal())
                        {
                            _logger.LogError(ex, "Error while updating settings of background task '{TaskName}' on tenant '{TenantName}'.", taskName, tenant);
                        }

                        settings ??= task.GetDefaultSettings();

                        if (scheduler.Released || !scheduler.Settings.Schedule.Equals(settings.Schedule))
                        {
                            scheduler.ReferenceTime = referenceTime;
                        }

                        scheduler.Settings = settings;
                        scheduler.Released = false;
                        scheduler.Updated = true;
                    }
                });
            });
        }

        private async Task WaitAsync(Task pollingDelay, CancellationToken stoppingToken)
        {
            try
            {
                await Task.Delay(MinIdleTime, stoppingToken);
                await pollingDelay;
            }
            catch (OperationCanceledException)
            {
            }
        }

        private IEnumerable<ShellContext> GetRunningShells()
        {
            return _shellHost.ListShellContexts().Where(s => s.Settings.State == TenantState.Running && s.Pipeline != null).ToArray();
        }

        private IEnumerable<ShellContext> GetShellsToRun(IEnumerable<ShellContext> shells)
        {
            var tenantsToRun = _schedulers.Where(s => s.Value.CanRun()).Select(s => s.Value.Tenant).Distinct().ToArray();
            return shells.Where(s => tenantsToRun.Contains(s.Settings.Name)).ToArray();
        }

        private IEnumerable<ShellContext> GetShellsToUpdate(IEnumerable<ShellContext> previousShells, IEnumerable<ShellContext> runningShells)
        {
            var released = previousShells.Where(s => s.Released).Select(s => s.Settings.Name).ToArray();

            if (released.Any())
            {
                UpdateSchedulers(released, s => s.Released = true);
            }

            var changed = _changeTokens.Where(t => t.Value.HasChanged).Select(t => t.Key).ToArray();

            if (changed.Any())
            {
                UpdateSchedulers(changed, s => s.Updated = false);
            }

            var valid = previousShells.Select(s => s.Settings.Name).Except(released).Except(changed);
            var tenantsToUpdate = runningShells.Select(s => s.Settings.Name).Except(valid).ToArray();

            return runningShells.Where(s => tenantsToUpdate.Contains(s.Settings.Name)).ToArray();
        }

        private IEnumerable<BackgroundTaskScheduler> GetSchedulersToRun(string tenant)
        {
            return _schedulers.Where(s => s.Value.Tenant == tenant && s.Value.CanRun()).Select(s => s.Value).ToArray();
        }

        private void UpdateSchedulers(IEnumerable<string> tenants, Action<BackgroundTaskScheduler> action)
        {
            var keys = _schedulers.Where(kv => tenants.Contains(kv.Value.Tenant)).Select(kv => kv.Key).ToArray();

            foreach (var key in keys)
            {
                if (_schedulers.TryGetValue(key, out BackgroundTaskScheduler scheduler))
                {
                    action(scheduler);
                }
            }
        }

        private void CleanSchedulers(string tenant, IEnumerable<IBackgroundTask> tasks)
        {
            var validKeys = tasks.Select(task => tenant + task.GetTaskName()).ToArray();

            var keys = _schedulers.Where(kv => kv.Value.Tenant == tenant).Select(kv => kv.Key).ToArray();

            foreach (var key in keys)
            {
                if (!validKeys.Contains(key))
                {
                    _schedulers.TryRemove(key, out var scheduler);
                }
            }
        }
    }

    internal static class ShellExtensions
    {
        public static HttpContext CreateHttpContext(this ShellContext shell)
        {
            var context = shell.Settings.CreateHttpContext();

            context.Features.Set(new ShellContextFeature
            {
                ShellContext = shell,
                OriginalPathBase = string.Empty,
                OriginalPath = "/"
            });

            return context;
        }

        public static HttpContext CreateHttpContext(this ShellSettings settings)
        {
            var context = new DefaultHttpContext().UseShellScopeServices();

            var urlHost = settings.RequestUrlHost?.Split('/',
                StringSplitOptions.RemoveEmptyEntries).FirstOrDefault();

            context.Request.Host = new HostString(urlHost ?? "localhost");

            if (!string.IsNullOrWhiteSpace(settings.RequestUrlPrefix))
            {
                context.Request.PathBase = "/" + settings.RequestUrlPrefix;
            }

            context.Request.Path = "/";
            context.Items["IsBackground"] = true;

            return context;
        }
    }
}
