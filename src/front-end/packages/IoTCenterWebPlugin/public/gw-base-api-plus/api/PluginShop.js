import Axios from 'axios';
/**
 * 应用商店
 */
const url = 'https://test.store.ganweisoft.net';
const PluginShop = {
    getPluginList(data) {
        return this.post('/IoT/api/v3/GWAssembly/GetPlugList', { WhereCause: data });
    },
    pluginDetails(id, state) {
        return this.post('/IoT/api/v3/GWAssembly/PlugDetail?releaseId=' + id + '&state=' + state);
    },
    installPlug(releaseId, assestId) {
        return this.post('/IoT/api/v3/GWAssembly/InstallPlug?releaseId=' + releaseId + '&assestId=' + assestId);
    },
    unInstallPlug(id) {
        return this.post('/IoT/api/v3/GWAssembly/UnInstallPlug?packageId=' + id);
    },
    GetApprovalByTitle(name, versionId) {
        return Axios({
            method: 'post',
            url: url + '/wx/GetApprovalByTitle?projectName=' + name + '&versionId=' + versionId,
        });
    },
    DownloadFile(releaseId, assestId) {
        return url + '/api/Release/DownloadFile?releaseId=' + releaseId + '&assestId=' + assestId;
    },
    DownloadStaticReport(assestId) {
        return url + '/api/release/DownloadStaticCheckReport?assestId=' + assestId;
    },
    UpdateStaticReport(packageId, version) {
        return url + '/api/Release/UpdateStaticCheckReport?packageId=' + packageId + '&version=' + version;
    },
    UploadFileVirus(fileRepo, id) {
        return Axios({
            method: 'get',
            url: url + '/api/release/UploadFileToVirusTotal?fileRepo=' + fileRepo + '&assestId=' + id,
        });
    },
    GetReadMe(releaseId) {
        return Axios({
            method: 'get',
            url: `${url}/api/release/ReadMe?releaseId=${releaseId}`,
        });
    },
    setGrade(ReleaseId, Grade) {
        return Axios({
            method: 'post',
            url: `${url}/api/Release/SetGrade`,
            data: {
                ReleaseId,
                Grade
            }
        });
    }
};

export default PluginShop;
