﻿using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class GroupQueryModel : QueryRequest
{
    public bool IsFittle { get; set; } = false;
    public string SystemName { get; set; }
    public string SearchName { get; set; }
}
