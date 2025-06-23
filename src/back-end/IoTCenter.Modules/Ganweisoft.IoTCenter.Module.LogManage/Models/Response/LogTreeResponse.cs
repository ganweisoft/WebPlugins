// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Collections.Generic;

namespace Ganweisoft.IoTCenter.Module.LogManage;

public class LogTreeResponse
{
    public string Name { get; set; }
    public string FullPath { get; set; }
    public long Size { get; set; }
    public DateTime ModifyTime { get; set; }
    public bool IsDirectory { get; set; }

    public List<LogTreeResponse> Childs { get; set; }
}
