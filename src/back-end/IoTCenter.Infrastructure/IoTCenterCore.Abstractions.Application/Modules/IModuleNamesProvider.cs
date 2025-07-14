// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace IoTCenterCore.Modules
{
    public interface IModuleNamesProvider
    {
        IEnumerable<string> GetModuleNames();
    }
}
