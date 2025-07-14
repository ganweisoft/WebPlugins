// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IoTCenterCore.DynamicCache.CacheContextProviders
{
    public class DefaultCacheContextProvider : ICacheContextProvider
    {
        public Task PopulateContextEntriesAsync(IEnumerable<string> contexts, List<CacheContextEntry> entries)
        {
            entries.Add(new CacheContextEntry("", string.Join(",", contexts)));

            return Task.CompletedTask;
        }
    }
}
