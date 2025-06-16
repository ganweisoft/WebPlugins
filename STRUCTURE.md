```bash
|-- IoTCenter.Build # 核心源代码目录
|-- IoTCenter.HostProxies 
|   |-- IoTCenterHost.Protos
|   |-- IoTCenterHost.Proxy
|-- IoTCenter.Infrastructure
|   |-- IoTCenter.Data
|   |-- IoTCenter.Utilities
|   |-- IoTCenterCore
|   |-- IoTCenterCore.Abstractions
|   |-- IoTCenterCore.Abstractions.Application
|   |-- IoTCenterCore.AutoMapper
|   |-- IoTCenterCore.DeviceDetection
|   |-- IoTCenterCore.DynamicCache
|   |-- IoTCenterCore.DynamicCache.Abstractions
|   |-- IoTCenterCore.ExcelHelper
|   |-- IoTCenterCore.Hei.Captcha
|   |-- IoTCenterCore.RsaEncrypt
|   |-- IoTCenterCore.SelfSignedCertificate
|   |-- IoTCenterCore.SlideVerificationCode
|   |-- IoTCenterWebApi.BaseCore
|-- IoTCenter.Modules # 插件目录
|   |-- Ganweisoft.IoTCenter.Module.EquipConfig # 设备管理
|   |-- Ganweisoft.IoTCenter.Module.EquipLink # 设备联动
|   |-- Ganweisoft.IoTCenter.Module.EquipList # 设备列表
|   |-- Ganweisoft.IoTCenter.Module.Event # 事件查询
|   |-- Ganweisoft.IoTCenter.Module.LogManage # 日志管理
|   |-- Ganweisoft.IoTCenter.Module.Login # 登录
|   |-- Ganweisoft.IoTCenter.Module.RealTime # 实时快照
|   |-- Ganweisoft.IoTCenter.Module.SignalR # SignalR推送
|   |-- Ganweisoft.IoTCenter.Module.TimeTask # 定时任务
|-- IoTCenter.WindowsServices # Windows服务注册
|   |-- IoTCenterWeb.Daemon
|   |-- IoTCenterWebApi.StartUp
|-- IoTCenterWebApi # Web入口
|-- Shared
