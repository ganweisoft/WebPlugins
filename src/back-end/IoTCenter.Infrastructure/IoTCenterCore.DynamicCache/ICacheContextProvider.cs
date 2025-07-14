// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IoTCenterCore.DynamicCache
{
    public interface ICacheContextProvider
    {
        Task PopulateContextEntriesAsync(IEnumerable<string> contexts, List<CacheContextEntry> entries);
    }
}
