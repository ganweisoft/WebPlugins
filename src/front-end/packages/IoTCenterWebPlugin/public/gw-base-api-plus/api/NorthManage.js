/**
 * 北向管理接口
 */

 const NorthManage = {
    // 北向终端类型管理
    getList(data) {
        return this.get(`/IoT/api/v3/NorthTerminalType/GetAll`, data)
    },

    getNorthTerminalType(id) {
        return this.get(`/IoT/api/v3/NorthTerminalType/GetNorthTerminalType`, id)
    },

    addNorthTerminalType(data) {
        return this.post(`/IoT/api/v3/NorthTerminalType/AddNorthTerminalType`, data)
    },

    updateNorthTerminalType(data) {
        return this.post(`/IoT/api/v3/NorthTerminalType/UpdateNorthTerminalType`, data)
    },

    deleteTerminalType(id) {
        return this.post(`/IoT/api/v3/NorthTerminalType/DeleteTerminalType?Id=${id}`)
    },

    // 北向终端管理
    getAllProductDict() {
        return this.get(`/IoT/api/v3/NorthTerminalType/GetAllProductDict`);
    },

    getAllTerminalTypeDict() {
        return this.get(`/IoT/api/v3/NorthTerminalType/GetAllTerminalTypeDict`);
    },

    getTerminalList(data) {
        return this.get(`/IoT/api/v3/NorthTerminal/GetAll`, data);
    },

    getNorthTerminal(id) {
        return this.get(`/IoT/api/v3/NorthTerminal/GetNorthTerminal`, id);
    },

    updateNorthTerminal(data) {
        return this.post(`/IoT/api/v3/NorthTerminal/UpdateNorthTerminal`, data);
    },

    deleteNorthTerminal(id) {
        return this.post(`/IoT/api/v3/NorthTerminal/DeleteNorthTerminal?id=${id}`);
    },

    exportFailExcel(data) {
        return this.get(`/IoT/api/v3/NorthTerminal/ExportFailExcel`, data);
    },

    exportExcelAll(data) {
        return this.download(`/IoT/api/v3/NorthTerminal/ExportExcelAll`, data);
    },

    importExcel(data) {
        return this.post(`/IoT/api/v3/NorthTerminal/ImportExcel`, data);
    },

    syncForEquipment() {
        return this.get(`/IoT/api/v3/NorthTerminal/SyncForEquipment`);
    },

    // 北向接口管理
    getInterfaceList(params) {
        return this.get(`/IoT/api/v3/NorthInterface/GetAll`, params);
    },

    getAppDictionaryList() {
        return this.get(`/IoT/api/v3/NorthInterface/GetAppDictionaryList`);
    },

    getInterfaceGroups() {
        return this.get(`/IoT/api/v3/NorthInterface/GetInterfaceGroups`);
    },

    getNrothRequestMethods() {
        return this.get(`/IoT/api/v3/NorthInterface/GetNrothRequestMethods`);
    },

    getNorthPlatformStates() {
        return this.get(`/IoT/api/v3/NorthInterface/GetNorthPlatformStates`);
    },

    creatInterface(params) {
        return this.post(`/IoT/api/v3/NorthInterface/Create`, params);
    },

    updateInterface(params) {
        return this.post(`/IoT/api/v3/NorthInterface/Update`, params);
    },

    delInterface(id) {
        return this.delete('/IoT/api/v3/NorthInterface/Delete', id);
    },

    getInterface(id) {
        return this.get(`/IoT/api/v3/NorthInterface/Get`, id);
    },

    // 北向应用管理
    getAppList(params) {
        return this.get(`/IoT/api/v3/NorthAppManage/GetAll`, params);
    },

    getNorthAppStatus() {
        return this.get(`/IoT/api/v3/NorthAppManage/GetNorthAppStatus`);
    },

    getApp(id) {
        return this.get(`/IoT/api/v3/NorthAppManage/Get`, id);
    },

    creatApp(params) {
        return this.post(`/IoT/api/v3/NorthAppManage/Create`, params);
    },

    updateApp(params) {
        return this.post(`/IoT/api/v3/NorthAppManage/Update`, params);
    },

    delApp(id) {
        return this.delete(`/IoT/api/v3/NorthAppManage/Delete`, id);
    },

    downloadLogFile(id) {
        return this.download(`/IoT/api/v3/NorthAppManage/DownloadLogFile`, id);
    },

    appDefaultConfig(id) {
        return this.post(`/IoT/api/v3/NorthAppManage/NorthAppDefaultConfig?id=${id}`);
    },

    createCredential() {
        return this.get(`/IoT/api/v3/NorthAppManage/CreateCredential`);
    },

    // 平台管理
    getPlatformAll(params) {
        return this.get(`/IoT/api/v3/NorthPlatform/GetAll`, params);
    },

    createPlatform(params) {
        return this.post(`/IoT/api/v3/NorthPlatform/Create`, params);
    },

    getNorthPlatformConfig(id) {
        return this.get(`/IoT/api/v3/NorthPlatform/GetNorthPlatformConfig`, id);
    },

    updateNorthPlatform(params) {
        return this.post(`/IoT/api/v3/NorthPlatform/UpdateNorthPlatform`, params);
    },

    getReportRule(params) {
        return this.get(`/IoT/api/v3/NorthPlatform/GetReportRule`, params);
    },

    updateReportRule(params) {
        return this.post(`/IoT/api/v3/NorthPlatform/CreateOrUpdateReportRule`, params);
    },

    getProductAllAttributeList(id) {
        return this.get(`/IoT/api/v3/NorthPlatform/GetProductAllAttributeList`, id);
    },

    downloadPlatformLog(id) {
        return this.download(`/IoT/api/v3/NorthPlatform/DownloadLogFile`, id);
    },

    getNorthTimeIntervalUnits() {
        return this.get(`/IoT/api/v3/NorthAppManage/GetNorthTimeIntervalUnits`);
    },

    getAutoRegisterInfo(params) {
        return this.get(`/IoT/api/v3/NorthPlatform/GetAutoRegisterInfo`, params);
    },

    autoRegisterSetting(params) {
        return this.post(`/IoT/api/v3/NorthPlatform/AutoRegisterSetting`, params);
    },

    deleteNorthPlatform(id) {
        return this.delete(`/IoT/api/v3/NorthPlatform/DeleteNorthPlatform`, id);
    },

    // 北向平台终端管理
    getPlatformTerminalList(params) {
        return this.get(`/IoT/api/v3/NorthPlatformTerminal/GetAll`, params);
    },

    getNorthRegistStates() {
        return this.get(`/IoT/api/v3/NorthPlatformTerminal/GetNorthRegistStates`);
    },

    getPlatformRegistParam(id) {
        return this.get(`/IoT/api/v3/NorthPlatformTerminal/GetPlatformRegistParam`, id);
    },

    getPlatformDictionaryList() {
        return this.get(`/IoT/api/v3/NorthPlatformTerminal/GetPlatformDictionaryList`);
    },

    getPlatformTerminal(id) {
        return this.get(`/IoT/api/v3/NorthPlatformTerminal/GetPlatformTerminal`, id);
    },

    GetPlafromeTerminalList(id) {
        return this.get(`/IoT/api/v3/NorthAppManage/GetAllTerminalList`, id);
    },

    registTerminal(params) {
        return this.post(`/IoT/api/v3/NorthPlatformTerminal/RegistTerminal`, params);
    },

    offLineTerminal(ids) {
        return this.post(`/IoT/api/v3/NorthPlatformTerminal/OffLineTerminal`, ids);
    }
}

export default NorthManage;
