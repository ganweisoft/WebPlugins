// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IoTCenterCore.Environment.Shell
{
    public interface IShellSettingsManager
    {
        ShellSettings CreateDefaultSettings();

        Task<IEnumerable<ShellSettings>> LoadSettingsAsync();

        Task<ShellSettings> LoadSettingsAsync(string tenant);

        Task SaveSettingsAsync(ShellSettings settings);
    }
}
