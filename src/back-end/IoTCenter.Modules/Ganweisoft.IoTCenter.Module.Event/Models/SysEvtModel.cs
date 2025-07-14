// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.Event;

public class SysEvtModel:QueryRequest
{

    public string BeginTime { get; set; }

    public string EndTime { get; set; }

    public string Sort { get; set; }

    public string EventName { get; set; }
}
