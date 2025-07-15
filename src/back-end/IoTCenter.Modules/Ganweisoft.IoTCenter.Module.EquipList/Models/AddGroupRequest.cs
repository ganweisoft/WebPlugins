// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class AddGroupRequest
{
    public string Name { get; set; }
    public int ParentId { get; set; }
    public IEnumerable<int> EquipNos { get; set; }
}
