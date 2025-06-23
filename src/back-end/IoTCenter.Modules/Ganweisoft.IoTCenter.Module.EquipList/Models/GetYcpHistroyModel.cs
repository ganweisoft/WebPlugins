// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class GetYcpHistroyModel : QueryRequest
{
    public string BeginTime { get; set; }

    public string EndTime { get; set; }

    public int StaNo { get; set; }

    public int EquipNo { get; set; }

    public int YcpNo { get; set; }

    public string Type { get; set; }
}
