// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterHost.Core.Abstraction;

namespace IoTCenterHost.Proxy.Core
{
    public interface IConnectStatusProvider
    {
        const string ServerTag = "ServerTag";

        ConnectionStatus ConnectionStatus { get; set; }
        string Token { get; }
    }
}
