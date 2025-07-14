// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Threading.Tasks;

namespace IoTCenterCore.Modules
{
    public interface ILocalClock
    {
        Task<DateTimeOffset> LocalNowAsync { get; }

        Task<ITimeZone> GetLocalTimeZoneAsync();

        Task<DateTimeOffset> ConvertToLocalAsync(DateTimeOffset dateTimeOffset);

        Task<DateTime> ConvertToUtcAsync(DateTime dateTime);
    }
}
