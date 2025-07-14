// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;
using System.Collections.Generic;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class EquipGroupResponse : QueryRequest
{
    public int Count { get; set; }
    public int TotalEquipCount { get; set; }
    public int[] EquipList { get; set; }
    public List<EquipListModelEx> Groups { get; set; }
}
