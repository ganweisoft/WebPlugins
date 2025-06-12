
const dataTrack = {

    // 获取测站列表
    getStation (data) {
        return this.post('/io/io.iot.ganwei/south/gateways', data);
    },

    // 数据追溯 (深圳水务)
    // 获取数据追溯所有原始数据——按分页、时间、设备来检索
    getInitData (data) {
        return this.post('/io/io.iot.ganwei/south/curve/original', data);
    },

    // 获取数据追溯所有解析数据——按分页、时间、设备来检索
    getParseData (data) {
        return this.post('/io/io.iot.ganwei/south/curve/history', data);
    },

    //  数据追溯导出接口
    getWaterHistoryExport (data) {
        return this.postBlob('/IoT/api/v3/Shuiwu/ExprotHistoriyData', data);
    },
    getWaterInitExport (data) {
        return this.postBlob('/IoT/api/v3/Shuiwu/ExprotOriginalData', data);
    }
}
export default dataTrack