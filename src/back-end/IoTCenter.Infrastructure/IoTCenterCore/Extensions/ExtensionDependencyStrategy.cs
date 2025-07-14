// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Linq;
using IoTCenterCore.Environment.Extensions.Features;

namespace IoTCenterCore.Environment.Extensions
{
    public class ExtensionDependencyStrategy : IExtensionDependencyStrategy
    {
        public bool HasDependency(IFeatureInfo observer, IFeatureInfo subject)
        {
            return observer.Dependencies.Contains(subject.Id);
        }
    }
}
