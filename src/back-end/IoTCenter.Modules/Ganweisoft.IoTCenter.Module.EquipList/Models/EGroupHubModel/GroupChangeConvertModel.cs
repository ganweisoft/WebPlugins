// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
namespace Ganweisoft.IoTCenter.Module.EquipList;

public class GroupChangeConvertModel
{
    public int GroupId { get; set; }
    public int? ParentGroupId { get; set; }
    public string Role { get; internal set; }
}
