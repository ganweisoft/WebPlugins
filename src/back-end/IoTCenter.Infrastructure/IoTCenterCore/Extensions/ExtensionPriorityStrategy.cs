// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterCore.Environment.Extensions.Features;

namespace IoTCenterCore.Environment.Extensions
{
    public class ExtensionPriorityStrategy : IExtensionPriorityStrategy
    {
        public int GetPriority(IFeatureInfo feature)
        {
            return feature.Priority;
        }
    }
}
