﻿// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using System;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class MyCurveCommonData
{
    public DateTime Datetime { get; set; }
    public double Value { get; set; }
}

public class MyHistoryCommonData
{
    public DateTime Datetime { get; set; }
    public string Value { get; set; }
}
