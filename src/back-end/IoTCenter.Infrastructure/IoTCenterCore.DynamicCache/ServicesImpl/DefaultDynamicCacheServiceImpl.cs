﻿using IoTCenterCore.DynamicCache.Abstractions;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoTCenterCore.DynamicCache
{
    public class DefaultDynamicCacheServiceImpl : IDynamicCacheService
    {
        private readonly ICacheContextManager _cacheContextManager;
        private readonly IDynamicCache _dynamicCache;

        private readonly Dictionary<string, string> _localCache = new Dictionary<string, string>();

        public DefaultDynamicCacheServiceImpl(ICacheContextManager cacheContextManager, IDynamicCache dynamicCache)
        {
            _cacheContextManager = cacheContextManager;
            _dynamicCache = dynamicCache;
        }

        public async Task<string> GetCachedValueAsync(CacheContext context)
        {
            var cacheKey = await GetCacheKey(context);

            context = await GetCachedContextAsync(cacheKey);

            if (context == null)
            {
                return null;
            }

            var content = await GetCachedStringAsync(cacheKey);

            return content;
        }

        public async Task SetCachedValueAsync(CacheContext context, string value)
        {
            var cacheKey = await GetCacheKey(context);

            _localCache[cacheKey] = value;

            var esi = JsonConvert.SerializeObject(CacheContextModel.FromCacheContext(context));

            await Task.WhenAll(
                SetCachedValueAsync(cacheKey, value, context),
                SetCachedValueAsync(GetCacheContextCacheKey(cacheKey), esi, context)
            );
        }

        private async Task SetCachedValueAsync(string cacheKey, string value, CacheContext context)
        {
            var bytes = Encoding.UTF8.GetBytes(value);

            var options = new DistributedCacheEntryOptions
            {
                AbsoluteExpiration = context.ExpiresOn,
                SlidingExpiration = context.ExpiresSliding,
                AbsoluteExpirationRelativeToNow = context.ExpiresAfter
            };

            if (!options.AbsoluteExpiration.HasValue && !options.SlidingExpiration.HasValue && !options.AbsoluteExpirationRelativeToNow.HasValue)
            {
                options.SlidingExpiration = new TimeSpan(0, 1, 0);
            }

            await _dynamicCache.SetAsync(cacheKey, bytes, options);
        }

        private async Task<string> GetCacheKey(CacheContext context)
        {
            var cacheEntries = context.Contexts.Count > 0
                ? await _cacheContextManager.GetDiscriminatorsAsync(context.Contexts)
                : Enumerable.Empty<CacheContextEntry>();

            if (!cacheEntries.Any())
            {
                return context.CacheId;
            }

            var key = context.CacheId + "/" + cacheEntries.GetContextHash();
            return key;
        }

        private string GetCacheContextCacheKey(string cacheKey)
        {
            return "cachecontext-" + cacheKey;
        }

        private async Task<string> GetCachedStringAsync(string cacheKey)
        {
            if (_localCache.TryGetValue(cacheKey, out var content))
            {
                return content;
            }

            var bytes = await _dynamicCache.GetAsync(cacheKey);
            if (bytes == null)
            {
                return null;
            }

            return Encoding.UTF8.GetString(bytes);
        }

        private async Task<CacheContext> GetCachedContextAsync(string cacheKey)
        {
            var cachedValue = await GetCachedStringAsync(GetCacheContextCacheKey(cacheKey));

            if (cachedValue == null)
            {
                return null;
            }

            var esiModel = JsonConvert.DeserializeObject<CacheContextModel>(cachedValue);

            return esiModel.ToCacheContext();
        }

        public async Task RemovedCachedAsync(CacheContext context)
        {
            var cacheKey = await GetCacheKey(context);

            context = await GetCachedContextAsync(cacheKey);

            if (context == null)
            {
                return;
            }

            await _dynamicCache.RemoveAsync(cacheKey);
        }
    }
}
