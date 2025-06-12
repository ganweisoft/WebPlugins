/**
 * @file 北向转发规则引擎接口
 */
const NorthForwardingRule = {

    // 根据关键字获取应用列表
    searchAppList(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetAll', data);
    },

    // 获取产品列表
    getAllEquipDataList(data) {
        return this.post('/IoT/api/v3/ModelConfig/GetAllEquipDataList', data);
    },

    // 获取当前产品规则
    getForwardingRules(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetForwardingRules', data);
    },

    // 获取上报类型规则
    getReportValues() {
        return this.get('/IoT/api/v3/NorthAppManage/GetReportValues');
    },

    // 获取上报规则
    getReportConditions() {
        return this.get('/IoT/api/v3/NorthAppManage/GetReportConditions');
    },

    // 获取时间单位
    getNorthTimeIntervalUnits() {
        return this.get('/IoT/api/v3/NorthAppManage/GetNorthTimeIntervalUnits');
    },

    // 获取产品属性列表
    getProductAttributeList(data) {
        return this.get('/IoT/api/v3/NorthAppManage/GetProductAttributeList', data);
    },

    // 上传当前产品规则
    updateAppRule(data) {
        return this.post('/IoT/api/v3/NorthAppManage/CreateOrUpdateAppRule', data);
    }
}
export default NorthForwardingRule;