﻿// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using System.ComponentModel.DataAnnotations;

namespace Ganweisoft.IoTCenter.Module.EquipConfig;

public class EquipDataModel
{
    [Required]
    public int StaNo { get; set; } = 1;
    [Required]
    public int EquipNo { get; set; }
    [Required]
    public string EquipNm { get; set; }
    public string EquipDetail { get; set; }
    [Required]
    public int AccCyc { get; set; }
    public string RelatedPic { get; set; }
    public string ProcAdvice { get; set; }
    public string OutOfContact { get; set; }
    public string Contacted { get; set; }
    public string EventWav { get; set; }
    public string CommunicationDrv { get; set; }
    public string LocalAddr { get; set; }
    public string EquipAddr { get; set; }
    public string CommunicationParam { get; set; }
    public string CommunicationTimeParam { get; set; }
    [Required]
    public int RawEquipNo { get; set; }
    public string Tabname { get; set; }
    [Required]
    public int AlarmScheme { get; set; }
    [Required]
    public int Attrib { get; set; }
    public string StaIp { get; set; }
    public int AlarmRiseCycle { get; set; }
    public string Reserve1 { get; set; }
    public string Reserve2 { get; set; }
    public string Reserve3 { get; set; }
    public string RelatedVideo { get; set; }
    public string ZiChanId { get; set; }
    public string PlanNo { get; set; }
    public string SafeTime { get; set; }
    public string Backup { get; set; }

    public int RelateiotEquipId { get; set; }

    public int EquipConnType { get; set; }
}
