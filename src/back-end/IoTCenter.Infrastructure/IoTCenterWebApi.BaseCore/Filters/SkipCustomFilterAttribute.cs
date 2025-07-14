// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IoTCenterWebApi.BaseCore;

[AttributeUsage(AttributeTargets.All)]
public class SkipCustomFilterAttribute : Attribute
{
}
