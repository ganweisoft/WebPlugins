/**
 * 深圳水务
 */

const Shuiwu = {

    // 获取数据追溯所有原始数据——按分页、时间、设备来检索
    getInitData (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterOldDataByPage', data);
    },

    // 获取数据追溯所有解析数据——按分页、时间、设备来检索
    getParseData (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterAnalyDataByPage', data);
    },

    // 获取测站ID及名称
    getStatData (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterStationDataByPage', data);
    },

    // 获取设备ID及名称
    getDeviceData (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterDeviceDataByPage', data);
    },

    // 获取测点ID及名称
    getDotData (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterServiceDataByPage', data);
    },

    // 水务设备
    getWaterEquip (data) {
        return this.post('/IoT/api/v3/Shuiwu/GetWaterDeviceListByPage', data);
    }
}

export default Shuiwu;