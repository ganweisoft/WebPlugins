﻿// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class GetEquipListModel : QueryRequest
{

    public string EquipName { get; set; }

    public string SystemName { get; set; }
}
