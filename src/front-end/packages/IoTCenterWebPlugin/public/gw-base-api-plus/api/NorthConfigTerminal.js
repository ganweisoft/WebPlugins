/**
 * @file 北向配置终端
 */
const NorthConfigTerminal = {

    // 根据关键字获取应用列表
    searchAppList(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetAll', data);
    },

    // 获取消息订阅表格
    getCurrAppInfo(data) {
        return this.get('/IoT/api/v3/NorthAppManage/Get', data);
    },

    // 获取授权管理列表
    getAllTerminalList() {
        return this.get('/IoT/api/v3/NorthAppManage/GetAllTerminalList');
    },

    // 提交授权管理列表
    postTerminalList(data) {
        return this.post('/IoT/api/v3/NorthAppManage/AuthorizationTerminals', data);
    },
};

export default NorthConfigTerminal;