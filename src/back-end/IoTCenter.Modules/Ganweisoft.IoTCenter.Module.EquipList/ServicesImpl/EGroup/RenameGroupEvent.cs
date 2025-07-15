﻿// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenter.Data;
using System;
using System.Threading.Tasks;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class RenameGroupEvent : IEGroupEvent
{
    private readonly GWDbContext _context;
    public RenameGroupEvent(GWDbContext context)
    {
        _context = context;
    }

    public async Task Invoke(object data)
    {
        if (data == null || data.GetType() != typeof(int))
            return;
        int groupId = Convert.ToInt32(data);

        await EGroupStaticStruct.RenameGroupAsync(_context, groupId);
    }
}
