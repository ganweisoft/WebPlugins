// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using IoTCenterCore.Modules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Ganweisoft.IoTCenter.Module.Event
{
    public class Startup : StartupBase
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IEventService, EventServiceImpl>();
        }

        public override void Configure(IApplicationBuilder builder, IEndpointRouteBuilder routes, IServiceProvider serviceProvider)
        {
            routes.MapDefaultControllerRoute();
        }
    }
}