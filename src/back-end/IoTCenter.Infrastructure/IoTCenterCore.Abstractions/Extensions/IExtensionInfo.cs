// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using IoTCenterCore.Environment.Extensions.Features;

namespace IoTCenterCore.Environment.Extensions
{
    public interface IExtensionInfo
    {
        string Id { get; }

        string SubPath { get; }

        bool Exists { get; }

        IManifestInfo Manifest { get; }

        IEnumerable<IFeatureInfo> Features { get; }
    }
}
