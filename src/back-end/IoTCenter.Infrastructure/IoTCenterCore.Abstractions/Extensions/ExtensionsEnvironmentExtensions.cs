// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.IO;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

namespace IoTCenterCore.Environment.Extensions
{
    public static class ExtensionsEnvironmentExtensions
    {
        public static IFileInfo GetExtensionFileInfo(
            this IHostEnvironment environment,
            IExtensionInfo extensionInfo,
            string subPath)
        {
            return environment.ContentRootFileProvider.GetFileInfo(
                Path.Combine(extensionInfo.SubPath, subPath));
        }
    }
}
