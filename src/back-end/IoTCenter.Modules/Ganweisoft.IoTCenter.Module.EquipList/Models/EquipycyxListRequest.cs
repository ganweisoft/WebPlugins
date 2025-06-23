// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class EquipycyxListRequest : QueryRequest
{
    public int StaN { get; set; }
    public int EquipNo { get; set; }

    public string SearchName { get; set; }
}
