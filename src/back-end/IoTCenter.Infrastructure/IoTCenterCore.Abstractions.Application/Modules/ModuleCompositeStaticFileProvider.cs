// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;
using Microsoft.Extensions.FileProviders;
using IoTCenterCore.Modules.FileProviders;

namespace IoTCenterCore.Modules
{
    public class ModuleCompositeStaticFileProvider : CompositeFileProvider, IModuleStaticFileProvider
    {
        public ModuleCompositeStaticFileProvider(params IStaticFileProvider[] fileProviders) : base(fileProviders)
        {
        }
        public ModuleCompositeStaticFileProvider(IEnumerable<IStaticFileProvider> fileProviders) : base(fileProviders)
        {
        }
    }
}
