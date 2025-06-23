// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoTCenterWebApi.BaseCore;

public class DoNotRefreshSlidingExpirationAttribute : ActionFilterAttribute
{
    public const string DontRenewSlidingCookie = "dontRenewSlidingCookie";
    public override void OnResultExecuting(ResultExecutingContext context)
    {
        context.HttpContext.Items.Add(DontRenewSlidingCookie, true);
    }
}
