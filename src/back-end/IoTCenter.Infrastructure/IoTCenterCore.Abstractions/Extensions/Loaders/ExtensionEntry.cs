// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Collections.Generic;
using System.Reflection;

namespace IoTCenterCore.Environment.Extensions.Loaders
{
    public class ExtensionEntry
    {
        public IExtensionInfo ExtensionInfo { get; set; }
        public Assembly Assembly { get; set; }
        public IEnumerable<Type> ExportedTypes { get; set; }
        public bool IsError { get; set; }
    }
}
