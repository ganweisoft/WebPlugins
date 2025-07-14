// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Threading;
using System.Threading.Tasks;

namespace IoTCenterCore.BackgroundTasks
{
    public interface IBackgroundTask
    {
        Task DoWorkAsync(IServiceProvider serviceProvider, CancellationToken cancellationToken);
    }
}
