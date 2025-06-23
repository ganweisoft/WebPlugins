// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using System;

namespace IoTCenterCore.ExcelHelper
{
    [AttributeUsage(AttributeTargets.Property)]
    public class FieldAttribute : Attribute
    {
        public bool Ignore { get; set; }
        public string Name { get; set; }
    }
}
