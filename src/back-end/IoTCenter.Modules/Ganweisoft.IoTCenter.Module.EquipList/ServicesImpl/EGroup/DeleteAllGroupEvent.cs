// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Threading.Tasks;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class DeleteAllGroupEvent : IEGroupEvent
{
    public async Task Invoke(object data)
    {
        if (data == null || data.GetType() != typeof(int))
            return;
        int groupId = Convert.ToInt32(data);

        EGroupStaticStruct.DeleteAllGroupAsync(groupId);
        await Task.CompletedTask;
    }
}
