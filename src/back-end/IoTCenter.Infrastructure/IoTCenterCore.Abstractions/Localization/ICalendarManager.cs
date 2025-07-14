// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Threading.Tasks;

namespace IoTCenterCore.Localization
{
    public interface ICalendarManager
    {
        Task<CalendarName> GetCurrentCalendar();
    }
}
