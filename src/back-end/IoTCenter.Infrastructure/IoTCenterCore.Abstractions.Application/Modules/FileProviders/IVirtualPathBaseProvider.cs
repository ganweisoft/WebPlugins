// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using Microsoft.AspNetCore.Http;

namespace IoTCenterCore.Modules.FileProviders
{
    public interface IVirtualPathBaseProvider
    {
        PathString VirtualPathBase { get; }
    }
}
