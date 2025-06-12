/**
 * @file 北向配置接口接口
 */
const NorthConfigInterface = {

    // 根据关键字获取应用列表
    searchAppList(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetAll', data);
    },

    // 获取授权接口表格
    getAuthInterfaces(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetAuthorizationInterfaces', data);
    },

    // 获取应用接口树形列表
    getAppDictionaryList() {
        return this.get('/IoT/api/v3/NorthInterface/GetAppDictionaryList');
    },

    // 新增应用接口树形列表选中项
    postAppIdList(data) {
        return this.post('/IoT/api/v3/NorthAppManage/AuthorizationInterfaces', data);
    },

    // 修改授权接口表格数据
    updateInterfaceConfig(data) {
        return this.post('/IoT/api/v3/NorthAppManage/AuthorizationInterfaceConfig', data);
    },

    // 删除授权接口
    deleteAuthInterfaces(data) {
        return this.get('/IoT/api/v3/NorthAppManage/CancelAuthorizationInterface', data);
    },

};
export default NorthConfigInterface;