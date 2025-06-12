/**
 * @file 北向消息订阅管理
 */
const NorthSubscription = {

    // 获取简易应用列表（未分页，未使用）
    getAppDictionaryList() {
        return this.get('/IoT/api/v3/NorthAppManage/GetAppDictionaryList');
    },

    // 根据关键字获取应用列表
    searchAppList(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetAll', data);
    },

    // 获取数据类型
    getDataTypes() {
        return this.get('/IoT/api/v3/NorthSubscription/GetDataTypes');
    },

    // 获取终端类型
    getTerminalTypes() {
        return this.get('/IoT/api/v3/NorthSubscription/GetTerminalTypes');
    },

    // 获取协议类型
    getProtocolTypes() {
        return this.get('/IoT/api/v3/NorthSubscription/GetProtocolTypes');
    },

    // 获取消息订阅表格
    getAllSubscription(data) {
        return this.get('/IoT/api/v3/NorthSubscription/GetAll', data);
    },

    // 新增应用的消息订阅
    createSub(data) {
        return this.post('/IoT/api/v3/NorthSubscription/Create', data);
    },

    // 修改应用的消息订阅
    updateSub(data) {
        return this.post('/IoT/api/v3/NorthSubscription/Update', data);
    },

    // 删除应用的某个消息订阅
    deleteSub(data) {
        return this.delete('/IoT/api/v3/NorthSubscription/Delete', data);
    },
};
export default NorthSubscription;