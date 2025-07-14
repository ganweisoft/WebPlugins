// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using Microsoft.AspNetCore.Http;

namespace IoTCenterCore.Abstractions
{
    public interface IIoTCenterHelper
    {
        HttpContext HttpContext { get; }
    }
}
