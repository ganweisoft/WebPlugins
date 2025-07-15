// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using System;
namespace Ganweisoft.IoTCenter.Module.EquipList;

public class BatchMoveEquipDto
{
    public int[] EquipNoList { get; set; } = Array.Empty<int>();
    public int newGroupId { get; set; }

}