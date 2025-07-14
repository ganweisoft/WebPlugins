// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterCore.Abstractions;
using Microsoft.AspNetCore.Http;

namespace IoTCenterCore.Modules
{
    public class DefaultIoTCenterHelper : IIoTCenterHelper
    {
        public DefaultIoTCenterHelper(IHttpContextAccessor httpContextAccessor)
        {
            HttpContext = httpContextAccessor.HttpContext;
        }

        public HttpContext HttpContext { get; set; }
    }
}
