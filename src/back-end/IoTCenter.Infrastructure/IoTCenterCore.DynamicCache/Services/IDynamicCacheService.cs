// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IoTCenterCore.DynamicCache
{
    public interface IDynamicCacheService
    {
        Task<string> GetCachedValueAsync(CacheContext context);
        Task SetCachedValueAsync(CacheContext context, string value);
        Task RemovedCachedAsync(CacheContext context);
    }
}
