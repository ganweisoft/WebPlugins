// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Threading.Tasks;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public interface IEGroupEvent
{
    Task Invoke(object data);
}
