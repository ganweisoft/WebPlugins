// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterHost.Core.Abstraction.Interfaces.Services;
using IoTCenterHost.Proxy.Core;
using IoTCenterHost.Proxy.ServiceImpl;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace IoTCenterWebApi;

public static class IoTHostGatewaySyncEquip
{
    public static void SyncEquipManager(this IApplicationBuilder app)
    {
        var connectPoolManager = app.ApplicationServices.GetRequiredService<IConnectPoolManager>();
        connectPoolManager.SyncEquipManager();
    }
}

