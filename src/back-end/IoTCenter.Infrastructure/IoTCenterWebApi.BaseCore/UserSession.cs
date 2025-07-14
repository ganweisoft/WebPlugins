﻿// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
namespace System;

public class UserBaseSession
{
    public string UserName { get; set; }
    
    public string RoleName { get; set; }

    public string SignalRConnectId { get; set; }
}

public class UserSession : UserBaseSession
{
    public string Token { get; set; }

    public int DeviceSubscribed { get; set; }
}
