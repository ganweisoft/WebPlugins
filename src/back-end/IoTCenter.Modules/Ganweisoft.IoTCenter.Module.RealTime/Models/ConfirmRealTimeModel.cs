// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.ComponentModel.DataAnnotations;

namespace Ganweisoft.IoTCenter.Module.RealTime;

public class ConfirmRealTimeModel
{
    [Required(AllowEmptyStrings =false,ErrorMessage ="唯一标识不能为空")]
    public string GUID { get; set; }

    [Required(AllowEmptyStrings = false,ErrorMessage ="处理意见不能为空")]

    public string ProcMsg { get; set; }
    public int WuBao { get; set; }
}
