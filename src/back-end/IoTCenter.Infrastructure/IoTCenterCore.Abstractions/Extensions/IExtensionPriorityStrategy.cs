// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterCore.Environment.Extensions.Features;

namespace IoTCenterCore.Environment.Extensions
{
    public interface IExtensionPriorityStrategy
    {
        int GetPriority(IFeatureInfo feature);
    }
}
