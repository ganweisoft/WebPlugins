// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Runtime.InteropServices;
using System.Security;

namespace IoTCenterCore.Modules
{
    public static class ExceptionExtensions
    {
        public static bool IsFatal(this Exception ex)
        {
            return
                ex is OutOfMemoryException ||
                ex is SecurityException ||
                ex is SEHException;
        }
    }
}
