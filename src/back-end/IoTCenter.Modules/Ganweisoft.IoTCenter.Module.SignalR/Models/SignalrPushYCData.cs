// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
namespace Ganweisoft.IoTCenter.Module.SignalR;

internal class SignalrPushYCData
{
    public int equipNo { get; set; }
    public int ycNo { get; set; }
    public object value { get; set; }
    public bool state { get; set; }
    public string unit { get; set; }
}
