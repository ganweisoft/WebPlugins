// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Threading.Tasks;

namespace IoTCenterCore.Environment.Shell.Builders
{
    public interface IShellPipeline
    {
        Task Invoke(object context);
    }
}
