// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class OneGroupRequest : QueryRequest
{
    public string SystemName { get; set; }
    public int GroupId { get; set; }
}
