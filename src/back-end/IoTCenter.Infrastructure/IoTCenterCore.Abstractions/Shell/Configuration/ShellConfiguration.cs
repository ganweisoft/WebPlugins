using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using IoTCenterCore.Environment.Extensions.Utility;
using IoTCenterCore.Environment.Shell.Configuration.Internal;

namespace IoTCenterCore.Environment.Shell.Configuration
{
    public class ShellConfiguration : IShellConfiguration
    {
        private IConfigurationRoot _configuration;
        private UpdatableDataProvider _updatableData;
        private readonly IEnumerable<KeyValuePair<string, string>> _initialData;

        private readonly string _name;
        private Func<string, Task<IConfigurationBuilder>> _configBuilderFactory;
        private readonly IEnumerable<IConfigurationProvider> _configurationProviders;
        private SemaphoreSlim _semaphore = new SemaphoreSlim(1);

        public ShellConfiguration()
        {
        }

        public ShellConfiguration(IConfiguration configuration)
        {
            _configurationProviders = new ConfigurationBuilder()
                .AddConfiguration(configuration)
                .Build().Providers;
        }

        public ShellConfiguration(string name, Func<string, Task<IConfigurationBuilder>> factory)
        {
            _name = name;
            _configBuilderFactory = factory;
        }

        public ShellConfiguration(ShellConfiguration configuration) : this(null, configuration)
        {
        }

        public ShellConfiguration(string name, ShellConfiguration configuration)
        {
            _name = name;

            if (configuration._configuration != null)
            {
                _configurationProviders = configuration._configuration.Providers
                    .Where(p => !(p is UpdatableDataProvider)).ToArray();

                _initialData = configuration._updatableData.ToArray();

                return;
            }

            if (name == null)
            {
                _configurationProviders = configuration._configurationProviders;
                _initialData = configuration._initialData;
                return;
            }

            _configBuilderFactory = configuration._configBuilderFactory;
        }

        private void EnsureConfiguration()
        {
            if (_configuration != null)
            {
                return;
            }

            EnsureConfigurationAsync().GetAwaiter().GetResult();
        }

        internal async Task EnsureConfigurationAsync()
        {
            if (_configuration != null)
            {
                return;
            }

            await _semaphore.WaitAsync();
            try
            {
                if (_configuration != null)
                {
                    return;
                }

                var providers = new List<IConfigurationProvider>();

                if (_configBuilderFactory != null)
                {
                    providers.AddRange(new ConfigurationBuilder()
                        .AddConfiguration((await _configBuilderFactory.Invoke(_name)).Build())
                        .Build().Providers);
                }

                if (_configurationProviders != null)
                {
                    providers.AddRange(_configurationProviders);
                }

                _updatableData = new UpdatableDataProvider(_initialData ?? Enumerable.Empty<KeyValuePair<string, string>>());

                providers.Add(_updatableData);

                _configuration = new ConfigurationRoot(providers);
            }
            finally
            {
                _semaphore.Release();
            }
        }

        private IConfiguration Configuration
        {
            get
            {
                EnsureConfiguration();
                return _configuration;
            }
        }

        public string this[string key]
        {
            get
            {
                var value = Configuration[key];

                return value ?? (key.Contains('_')
                    ? Configuration[key.Replace('_', '.')]
                    : null);
            }
            set
            {
                EnsureConfiguration();
                _updatableData.Set(key, value);
            }
        }

        public IConfigurationSection GetSection(string key)
        {
            return Configuration.GetSectionCompat(key);
        }

        public IEnumerable<IConfigurationSection> GetChildren()
        {
            return Configuration.GetChildren();
        }

        public IChangeToken GetReloadToken()
        {
            return Configuration.GetReloadToken();
        }
    }
}
