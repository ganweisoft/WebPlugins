// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace IoTCenterCore.Environment.Extensions.Features
{
    public interface IFeaturesProvider
    {
        IEnumerable<IFeatureInfo> GetFeatures(
            IExtensionInfo extensionInfo,
            IManifestInfo manifestInfo);
    }
}
