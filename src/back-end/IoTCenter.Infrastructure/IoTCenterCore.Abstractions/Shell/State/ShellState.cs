// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace IoTCenterCore.Environment.Shell.State
{
    public class ShellState
    {
        public List<ShellFeatureState> Features { get; } = new List<ShellFeatureState>();
    }
}
