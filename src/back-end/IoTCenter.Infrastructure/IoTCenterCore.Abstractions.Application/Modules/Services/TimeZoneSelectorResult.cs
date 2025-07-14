// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Threading.Tasks;

namespace IoTCenterCore.Modules
{
    public class TimeZoneSelectorResult
    {
        public int Priority { get; set; }
        public Func<Task<string>> TimeZoneId { get; set; }
    }
}
