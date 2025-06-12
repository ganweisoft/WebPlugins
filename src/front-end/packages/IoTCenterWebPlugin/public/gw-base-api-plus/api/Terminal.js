/**
 * 批量导入终端、审批终端
 */
 const Terminal = {

  // 获取终端列表
  getTerminalPageList(data) {
    return this.get(`/IoT/api/v3/TerminalManage/GetTerminalPageList?Status=${data.status}&PageNo=${data.pageNo}&PageSize=${data.pageSize}`)
  },

  // 同步终端列表
  syncTerminals(data) {
    return this.post('/IoT/api/v3/TerminalManage/SyncTerminals', data)
  },

  // 搜索归属组
  searchSpecify(data) {
    return this.get(`/IoT/api/v3/TerminalApprovalManage/GetTerminalGroups?id=${data.id}&name=${data.name}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`)
  },

  // 获取终端审批列表
  getTerminalApprovalPageList(data) {
    return this.get(`/IoT/api/v3/TerminalApprovalManage/GetTerminalApprovalPageList?ApprovalStatus=${data.approvalStatus}&PageNo=${data.pageNo}&PageSize=${data.pageSize}`)
  },

  // 同步审批状态列表
  syncApprovalStatus() {
    return this.post('/IoT/api/v3/TerminalApprovalManage/SyncApprovalStatus')
  },

  // 审批
  approvalTerminals(data) {
    return this.post('/IoT/api/v3/TerminalApprovalManage/ApprovalTerminals', data)
  },

  // 上传失败的处理接口，下载一个Excel
  failToUpload(data) {
    return this.post('/IoT/api/v3/ReportTerminal/ExportFailExcel', data);
  }
}
export default Terminal;