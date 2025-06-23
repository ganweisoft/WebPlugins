// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterHost.Core.Abstraction;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ganweisoft.IoTCenter.Module.RealTime;

public interface IRealTimeCacheService
{
    Task<List<WcfRealTimeEventItem>> HandleRealTimeData(string role);
}
