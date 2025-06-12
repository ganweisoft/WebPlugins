const water_equip_manage = {
    // ------测站管理------
    // 获取测站列表
    getStation (data) {
        return this.post('/io/io.iot.ganwei/south/gateways', data);
    },

    // 获取设备信息
    getDevices (data) {
        return this.post('/io/io.iot.ganwei/south/devices', data);
    },

    // // 获取测站设备信息
    // getDevicesForGateway(data) {
    //     return this.post('/io/io.iot.ganwei/south/devices', data);
    // },

    // 获取测站类型
    getStationType (data) {
        return this.post('/IoT/api/v3/ROMA/GetGatewayTypes', data);
    },

    // 新增单个测站信息
    addStation (data) {
        return this.post('/IoT/api/v3/ROMA/GatewayCreate', data);
    },

    // 编辑单个测站信息
    editStation (data) {
        return this.post('/io/io.iot.ganwei/south/gateway/modify', data);
    },

    // 删除单个测站信息
    delStation (data) {
        return this.post('/IoT/api/v3/ROMA/GatewayDelete', data);
    },

    // 测站下添加设备
    addEquipInStation (data) {
        return this.post('/IoT/api/v3/ROMA/AddDeviceInGateway', data);
    },

    // 测站下删除设备
    delEquipInStation (data) {
        return this.post('/IoT/api/v3/ROMA/DeleteDeviceInGateway', data);
    },

    // 测站命令下发
    gatewayCommand (data) {
        return this.get('/IoT/api/v3/ROMA/GatewayCommand', data);
    },
    //获取水务设备类型
    GetWaterEquipPropertyTypeByPage (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterEquipPropertyTypeByPage', data);
    },
    GetWaterEquipCommandTypeByPage (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterEquipCommandTypeByPage', data);
    },
    // 水务版本过滤API
    GetRealTimeEventFitter (data) {
        return this.post('/IoT/api/v3/RealTime/GetRealTimeEventFitter', data);
    }
}
export default water_equip_manage