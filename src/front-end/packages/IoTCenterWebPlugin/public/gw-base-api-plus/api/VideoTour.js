/**
 * @file 视频巡更接口
 */
export default {
    // 巡更人员
    async getPatrollerList(query) {
        return await this.get('/IoT/api/v3/Patroller', query);
    },
    async addPatroller(data) {
        return await this.post('/IoT/api/v3/Patroller', data);
    },
    async getAdminList(data) {
        return await this.post('/IoT/api/v3/Patroller/GetUserDataList', data);
    },
    async editPatroller(data) {
        return await this.put('/IoT/api/v3/Patroller', data);
    },
    async deletePatroller(id) {
        return await this.delete('/IoT/api/v3/Patroller?id=' + id);
    },

    // 巡更上级
    async getPatrolLeader() {
        return await this.get('/IoT/api/v3/patrolsuperior');
    },
    async addPatrolLeader(data) {
        return await this.post('/IoT/api/v3/PatrolSuperior', data);
    },
    async deletePatrolLeader(id) {
        return await this.delete('/IoT/api/v3/PatrolSuperior/' + id);
    },
    async editPatrolLeader(data) {
        return await this.put('/IoT/api/v3/PatrolSuperior', data);
    },

    // 巡更路线接口
    async getPatrolRouteList(query) {
        return await this.get('/IoT/api/v3/PatrolRoute', query);
    },
    async addPatrolRoute(name) {
        return await this.post('/IoT/api/v3/PatrolRoute', name);
    },
    async editPatrolRoute(data) {
        return await this.put('/IoT/api/v3/PatrolRoute', data);
    },
    async deletePatrolRoute(id) {
        return await this.delete('/IoT/api/v3/PatrolRoute?id=' + id);
    },
    async getChannelList(name) {
        return await this.get('/IoT/api/v3/Channel', name);
    },
    async getPatrolPointList(data) {
        return await this.get('/IoT/api/v3/PatrolRoute/PatrolPoint', data);
    },
    async savePatrolPoint(data) {
        return await this.post('/IoT/api/v3/PatrolRoute/PatrolPoint', data);
    },
    async getRoutePointCount(id) {
        return await this.get('/IoT/api/v3/PatrolRoute/patrolPointCount/' + id);
    },

    // 巡更考勤接口
    async getAttendenceList(data) {
        return await this.get('/IoT/api/v3/patrolAttendence/attendence', data);
    },
    async getPatrolRecord(id) {
        return await this.get('/IoT/api/v3/PatrolRecord', id);
    },

    exportAttendence(data) {
        return this.download('/IoT/api/v3/PatrolExport/Attendence', data);
    },
    exportAttendencePDF(data) {
        return this.download('/IoT/api/v3/PatrolExport/AttendencePDF', data);
    },

    exportRecord(data) {
        return this.download('/IoT/api/v3/PatrolExport/Record', data);
    },
    exportRecordPDF(data) {
        return this.download('/IoT/api/v3/PatrolExport/RecordPDF', data);
    },

    // 巡更计划
    async getPatrolPlanList(data) {
        return await this.get('/IoT/api/v3/PatrolPlan', data);
    },
    async addPatrolPlan(data) {
        return await this.post('/IoT/api/v3/PatrolPlan', data);
    },
    async editPatrolPlan(data) {
        return await this.put('/IoT/api/v3/PatrolPlan', data);
    },
    async deletePatrolPlan(id) {
        return await this.delete('/IoT/api/v3/PatrolPlan?id=' + id);
    },
    async getPatrolPlanById(id) {
        return await this.get('/IoT/api/v3/PatrolPlan/' + id);
    },
    async generatePlan(id) {
        return await this.get('/IoT/api/v3/PatrolPlan/Generate/' + id);
    },

    // 巡更考勤
    async getPatrolPlanToday() {
        return await this.get('/IoT/api/v3/videoPatrol/Attendence');
    },
    async getVideoChannels1(id) {
        return await this.get('/IoT/api/v3/videoPatrol/State/' + id);
    },
    async addPatrolRecord(data) {
        return await this.post('/IoT/api/v3/PatrolRecord', data);
    },
    async finished(id) {
        return new Promise((resolve, reject) => {
            this.get('/IoT/api/v3/videoPatrol/Finish', {patrolAttendenceId: id}).then(res => {
                resolve(res);
            }).catch(err => {

                // 失败时重复请求
                this.finished(id);
                reject(err);
            })
        })
    },
    async startPatrolAttdence(id) {
        return await this.get('/IoT/api/v3/videoPatrol/Start?patrolAttendenceId=' + id);
    }
};
