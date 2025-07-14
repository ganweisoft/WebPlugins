// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Threading.Tasks;

namespace IoTCenterCore.Localization
{
    public class CalendarSelectorResult
    {
        public int Priority { get; set; }

        public Func<Task<CalendarName>> CalendarName { get; set; }
    }
}
