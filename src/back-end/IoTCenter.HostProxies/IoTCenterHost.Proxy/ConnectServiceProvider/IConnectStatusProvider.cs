// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
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
