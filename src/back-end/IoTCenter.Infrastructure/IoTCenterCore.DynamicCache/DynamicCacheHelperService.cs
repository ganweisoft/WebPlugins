// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace IoTCenterCore.DynamicCache
{
    public class DynamicCacheHelperService<T> where T : class
    {
        public ConcurrentDictionary<string, Task<T>> Workers = new ConcurrentDictionary<string, Task<T>>();
    }
}
