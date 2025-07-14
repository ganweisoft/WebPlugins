// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;

namespace IoTCenterCore.Modules.Manifest
{
    [AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true, Inherited = false)]
    public class ModuleAssetAttribute : Attribute
    {
        public ModuleAssetAttribute(string asset)
        {
            Asset = asset ?? String.Empty;
        }

        public string Asset { get; }
    }
}
