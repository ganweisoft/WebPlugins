// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Threading.Tasks;
using IoTCenterCore.Environment.Shell.Builders.Models;
using IoTCenterCore.Environment.Shell.Descriptor.Models;

namespace IoTCenterCore.Environment.Shell.Builders
{
    public interface ICompositionStrategy
    {
        Task<ShellBlueprint> ComposeAsync(ShellSettings settings, ShellDescriptor descriptor);
    }
}
