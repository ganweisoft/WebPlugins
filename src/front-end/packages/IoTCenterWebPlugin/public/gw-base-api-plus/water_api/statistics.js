
const statistics = {

    // 导出功能
    getStaFile (data) {
        return this.postBlob('/IoT/api/v3/Statistic/GetFile', data);
    },

    // 获取平台运维信息数据
    getAnalyse (data) {
        return this.post('/IoT/api/v3/Statistic/GetAnalyse', data);
    },

    // 获取平台运维统计测站相关数据
    getSta (data) {
        return this.post('/IoT/api/v3/Statistic/GetSta', data);
    }
}
export default statistics