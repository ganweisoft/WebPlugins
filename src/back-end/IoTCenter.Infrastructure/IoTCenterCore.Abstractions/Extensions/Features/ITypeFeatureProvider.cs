// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using IoTCenterCore.Environment.Extensions.Features;

namespace IoTCenterCore.Environment.Extensions
{
    public interface ITypeFeatureProvider
    {
        IFeatureInfo GetFeatureForDependency(Type dependency);
        void TryAdd(Type type, IFeatureInfo feature);
    }
}
