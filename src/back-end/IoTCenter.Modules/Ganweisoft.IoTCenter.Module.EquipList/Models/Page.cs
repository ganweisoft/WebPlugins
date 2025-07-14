// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
namespace Ganweisoft.IoTCenter.Module.EquipList;

public class Page
{
    public long pageNo { get; set; }

    public long pageSize { get; set; }

    public int totalCount { get; set; }

    public int totalPage { get; set; }

    public object list { get; set; }
}
