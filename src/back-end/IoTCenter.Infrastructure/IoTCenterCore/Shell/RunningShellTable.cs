using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace IoTCenterCore.Environment.Shell
{
    public class RunningShellTable : IRunningShellTable
    {
        private static readonly char[] HostSeparators = new[] { ',', ' ' };

        private ImmutableDictionary<string, ShellSettings> _shellsByHostAndPrefix = ImmutableDictionary<string, ShellSettings>.Empty.WithComparers(StringComparer.OrdinalIgnoreCase);
        private ShellSettings _default;
        private bool _hasStarMapping = false;

        public void Add(ShellSettings settings)
        {
            if (ShellHelper.DefaultShellName == settings.Name)
            {
                _default = settings;
            }

            var allHostsAndPrefix = GetAllHostsAndPrefix(settings);

            var settingsByHostAndPrefix = new Dictionary<string, ShellSettings>();

            foreach (var hostAndPrefix in allHostsAndPrefix)
            {
                _hasStarMapping = _hasStarMapping || hostAndPrefix.StartsWith('*');
                settingsByHostAndPrefix.TryAdd(hostAndPrefix, settings);
            }

            lock (this)
            {
                _shellsByHostAndPrefix = _shellsByHostAndPrefix.SetItems(settingsByHostAndPrefix);
            }
        }

        public void Remove(ShellSettings settings)
        {
            var allHostsAndPrefix = _shellsByHostAndPrefix
                .Where(kv => kv.Value.Name == settings.Name)
                .Select(kv => kv.Key)
                .ToArray();

            lock (this)
            {
                _shellsByHostAndPrefix = _shellsByHostAndPrefix.RemoveRange(allHostsAndPrefix);
            }

            if (_default == settings)
            {
                _default = null;
            }
        }

        public ShellSettings Match(HostString host, PathString path, bool fallbackToDefault = true)
        {
            var hostOnly = host.Host;

            if (TryMatchInternal(host.Value, hostOnly, path.Value, out var result))
            {
                return result;
            }


            if (_hasStarMapping && TryMatchStarMapping(host.Value, hostOnly, path.Value, out result))
            {
                return result;
            }

            if (fallbackToDefault && DefaultIsCatchAll())
            {
                return _default;
            }

            if (fallbackToDefault && TryMatchInternal("", "", "/", out result))
            {
                return result;
            }

            return null;
        }

        private bool TryMatchInternal(StringSegment host, StringSegment hostOnly, StringSegment path, out ShellSettings result)
        {

            if (host.Length == 0 || !_shellsByHostAndPrefix.TryGetValue(GetHostAndPrefix(host, path), out result))
            {

                if (host.Length == hostOnly.Length || !_shellsByHostAndPrefix.TryGetValue(GetHostAndPrefix(hostOnly, path), out result))
                {

                    if (host.Length == 0 || !_shellsByHostAndPrefix.TryGetValue(GetHostAndPrefix(host, "/"), out result))
                    {

                        if (host.Length == hostOnly.Length || !_shellsByHostAndPrefix.TryGetValue(GetHostAndPrefix(hostOnly, "/"), out result))
                        {

                            if (!_shellsByHostAndPrefix.TryGetValue(GetHostAndPrefix("", path), out result))
                            {
                                result = null;
                                return false;
                            }
                        }
                    }
                }
            }

            return true;
        }

        private bool TryMatchStarMapping(StringSegment host, StringSegment hostOnly, StringSegment path, out ShellSettings result)
        {
            if (TryMatchInternal("*." + host, "*." + hostOnly, path, out result))
            {
                return true;
            }

            var index = -1;

            while (-1 != (index = host.IndexOf('.', index + 1)))
            {
                if (TryMatchInternal("*" + host.Subsegment(index), "*" + hostOnly.Subsegment(index), path, out result))
                {
                    return true;
                }
            }

            result = null;
            return false;
        }

        private string GetHostAndPrefix(StringSegment host, StringSegment path)
        {
            var firstSegmentIndex = path.Length > 0 ? path.IndexOf('/', 1) : -1;
            if (firstSegmentIndex > -1)
            {
                return host + path.Subsegment(0, firstSegmentIndex).Value;
            }
            else
            {
                return host + path.Value;
            }
        }

        private string[] GetAllHostsAndPrefix(ShellSettings shellSettings)
        {

            if (string.IsNullOrWhiteSpace(shellSettings.RequestUrlHost))
            {
                return new string[] { "/" + shellSettings.RequestUrlPrefix };
            }

            return shellSettings
                .RequestUrlHost
                .Split(HostSeparators, StringSplitOptions.RemoveEmptyEntries)
                .Select(ruh => ruh + "/" + shellSettings.RequestUrlPrefix)
                .ToArray();
        }

        private bool DefaultIsCatchAll()
        {
            return _default != null && string.IsNullOrEmpty(_default.RequestUrlHost) && string.IsNullOrEmpty(_default.RequestUrlPrefix);
        }
    }
}
