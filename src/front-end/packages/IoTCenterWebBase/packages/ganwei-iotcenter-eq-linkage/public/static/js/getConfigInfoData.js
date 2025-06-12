

// sessionStorage.isGetConfigInfoData = sessionStorage.isGetConfigInfoData == 'true' || 'false'
window.getConfigInfoData = function () {
    return new Promise((resolve, reject) => {
        let configInfoData = sessionStorage.configInfoData || null
        if (configInfoData) {
            resolve(JSON.parse(configInfoData))
        } else {
            if (window.AxiosBuilder.axios) {
                // if (sessionStorage.isGetConfigInfoData == 'false') {
                    // sessionStorage.isGetConfigInfoData = true
                    window.AxiosBuilder.axios({
                        methed: 'get',
                        url: '/IoT/api/v3/Frontconfiguration/GetFrontconfigurationData',
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Accept-Language': window.sessionStorage.languageType || 'zh-CN'
                        }
                    })
                        .then(res => {
                            const { code, data } = res ? (res.data || {}) : {}
                            if (code == 200 && data) {
                                sessionStorage.configInfoData = data
                                try {
                                    resolve(JSON.parse(data))
                                } catch (error) {
                                    resolve({})
                                }

                            } else {
                                reject({})
                            }
                        })
                        .catch(err => {
                            reject({})
                        })
                // } else {
                //     let times = 0
                //     let time = window.setInterval(
                //         () => {
                //             let configInfoData = sessionStorage.configInfoData
                //             if (configInfoData || times > 300) {
                //                 window.clearInterval(time)
                //                 time = null
                //                 configInfoData ? resolve(JSON.parse(configInfoData)) : reject({})
                //             }
                //             times = times + 1
                //         }, 100
                //     )
                // }

            } else {
                reject({})
            }
        }
    })
}
