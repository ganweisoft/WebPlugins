using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.FileProviders.Physical;
using Microsoft.Extensions.Primitives;

namespace IoTCenterCore.Modules
{
    public class ModuleProjectStaticFileProvider : IModuleStaticFileProvider
    {
        private static Dictionary<string, string> _roots;
        private static readonly object _synLock = new object();

        public ModuleProjectStaticFileProvider(IApplicationContext applicationContext)
        {
            if (_roots != null)
            {
                return;
            }

            lock (_synLock)
            {
                if (_roots == null)
                {
                    var application = applicationContext.Application;

                    var roots = new Dictionary<string, string>();

                    foreach (var module in application.Modules)
                    {
                        if (module.Assembly == null || Path.GetDirectoryName(module.Assembly.Location)
                            != Path.GetDirectoryName(application.Assembly.Location))
                        {
                            continue;
                        }

                        var asset = module.Assets.FirstOrDefault(a => a.ModuleAssetPath
                            .StartsWith(module.Root + Module.WebRoot, StringComparison.Ordinal));

                        if (asset != null)
                        {
                            var index = asset.ProjectAssetPath.IndexOf('/' + Module.WebRoot, StringComparison.Ordinal);

                            roots[module.Name] = asset.ProjectAssetPath.Substring(0, index + Module.WebRoot.Length + 1);
                        }
                    }

                    _roots = roots;
                }
            }
        }

        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            return NotFoundDirectoryContents.Singleton;
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            if (subpath == null)
            {
                return new NotFoundFileInfo(subpath);
            }

            var path = NormalizePath(subpath);
            var index = path.IndexOf('/');

            if (index != -1)
            {
                var module = path.Substring(0, index);

                if (_roots.TryGetValue(module, out var root))
                {
                    var filePath = root + path.Substring(module.Length + 1);

                    if (File.Exists(filePath))
                    {
                        return new PhysicalFileInfo(new FileInfo(filePath));
                    }
                }
            }

            return new NotFoundFileInfo(subpath);
        }

        public IChangeToken Watch(string filter)
        {
            if (filter == null)
            {
                return NullChangeToken.Singleton;
            }

            var path = NormalizePath(filter);
            var index = path.IndexOf('/');

            if (index != -1)
            {
                var module = path.Substring(0, index);

                if (_roots.TryGetValue(module, out var root))
                {
                    var filePath = root + path.Substring(module.Length + 1);

                    if (File.Exists(filePath))
                    {
                        return new PollingFileChangeToken(new FileInfo(filePath));
                    }
                }
            }

            return NullChangeToken.Singleton;
        }

        private string NormalizePath(string path)
        {
            return path.Replace('\\', '/').Trim('/').Replace("//", "/");
        }
    }
}
