// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class EquipYcYxRequest
{
    public int EquipNo { get; set; }
    public IEnumerable<int> YcYxNos { get; set; }
}
