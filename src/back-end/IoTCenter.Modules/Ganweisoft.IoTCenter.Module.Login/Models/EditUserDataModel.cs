// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.Collections.Generic;

namespace Ganweisoft.IoTCenter.Module.Login;

public class EditUserDataModel
{
    public string Id { get; set; }

    public string UserName { get; set; }

    public string UserPwd { get; set; }

    public string Remark { get; set; }

    public int ControlLevel { get; set; }

    public bool IsAdministrator { get; set; }

    public List<string> RoleList { get; set; } = new List<string>();

    public List<string> HomePageList { get; set; } = new List<string>();

    public List<string> AutoInspectionPagesList { get; set; } = new List<string>();

    public bool RoleChanged { get; set; }
}
