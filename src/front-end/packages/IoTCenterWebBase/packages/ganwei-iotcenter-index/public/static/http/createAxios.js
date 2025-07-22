const loginLanuage = {
    login_en: [
         "Login Session Has Expired, Please Login Again",
         "tips",
         "Confirm",
         "Cancel"
    ],
    login_zh: [
          "登录凭证已过期，请重新登录!",
          "提示",
          "确认",
          "取消"
]
}
const overTimeList = [
    { api: "/IoT/api/v3/GWAssembly/InstallAppStorePlugin", timeout: 1800000 },
    { api: "/IoT/api/v3/Event/GetEquipEvtCounts", timeout: 1800000 },
    { api: "/IoT/api/v3/Event/GetEquipEvtByPage", timeout: 1800000 },
    { api: "/IoT/api/v3/Event/GetSysEvtByPage", timeout: 1800000 },
    { api: "/IoT/api/v3/HistoryData/GetYcYxList", timeout: 1800000 },
    { api: "/IoT/api/v3/EquipList/GetYcpHistroyByTime", timeout: 1800000 },
    { api: "/IoT/api/v3/EquipList/ExportEquipHistroyCurves", timeout: 1800000 },
    { api: "/IoT/api/v3/EquipList/ExportAbnormalRecord", timeout: 1800000 },
    { api: "/IoT/api/v3/Record/GetRecordListByPage", timeout: 1800000 },
    { api: "/IoT/api/v3/GWAssembly/BatchInstallAppStorePlugin", timeout: 1800000 }
];

/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
(function (_this) {
    const getParameterMap = () => {
        let parameters = window.location.href.split("?")[1];
        let map = new Map()

        if (!parameters) return map;
        let data = parameters.indexOf("&") != -1 ? parameters.split("&") : [parameters]
        for (let i = 0; i < data.length; i++) {
            let arry = data[i].split("=")
            map.set(arry[0], arry[1])
        }
        return map;
    }
    if (getParameterMap().get('CSRF_TOKEN')) {
        window.sessionStorage.CSRF_TOKEN = getParameterMap().get('CSRF_TOKEN')
    }

    let currentAxiosBuilder = null
    const timeoutNoTips = ['/api/ServiceManage/GetServiceStatus']

    /**
     * 弹窗提示
     * msg：键值文本
     * zhMsg：中文文本
     * duration：延迟时间
     */
    const tip = async (msg, duration) => {
        let languagePackage = {}
        try {
            if (sessionStorage.languagePackage) languagePackage = JSON.parse(sessionStorage.languagePackage)
        } catch (error) {
            console.log(error)
        }
        if (!languagePackage || !languagePackage[localStorage.languageType] || !languagePackage[localStorage.languageType].login) {
            await getLoginLanuage('ganwei-iotcenter-login', 'login', 'Ganweisoft.IoTCenter.Module.Login', msg, duration)
        } else {
            messageTips(msg, duration)
        }
    }
    async function getLoginLanuage (pluginName, menuName, packageId, msg, duration) {
        await _this.requestLanguage(pluginName, menuName, packageId, '').then(res => {
            
            if (!sessionStorage.languageType) { sessionStorage.languageType = localStorage.languageType }
            if (currentAxiosBuilder.i18n && currentAxiosBuilder.i18n.global && currentAxiosBuilder.i18n.global.messages) {
                currentAxiosBuilder.i18n.global.messages.value[sessionStorage.languageType][menuName] = res
            }
        }).catch(err => {
            console.log(err)
        }).finally(o => {
            messageTips(msg, duration)
        })
    }
    function messageTips (msg, duration) {
        currentAxiosBuilder.notification({
            message: currentAxiosBuilder.i18n.global.t(msg),
            duration: duration,
            type: 'error'
        })
    }
    _this.mergeApi = function (webApis, apis) {
        let newApis = []
        if (webApis && apis) {
            newApis = [...webApis]
            for (let i = 0; i < apis.length; i++) {
                let api = apis[i]
                let hasApi = newApis.some(item => item.api === api.api)
                if (!hasApi) {
                    newApis.push(api)
                }
            }
        }
        return newApis
    }

    /**
     * 跳转登录页
     * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
     */
    const toLogin = async () => {
        try {
            if (top.location.href.toLowerCase().indexOf('login') == -1) {
                jumpPage('ganwei-iotcenter-login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * 跳转判断
     * page:路由
     */
    const jumpPage = (page) => {
        try {
            _this.top.location.href = _this.top.isProduction ? `${_this.top.location.origin}/${page}` : hostMap(page)
        } catch (error) {
            _this.top.location.href = hostMap(page)
        }
    }
    function hostMap (host) {
        if (_this.top.isProduction) return host;
        let hostLocalMap = JSON.parse(localStorage.hostMap || '{}')
        return hostLocalMap[host] || host;
    }

    /**
     * 服务器存在响应状态码处理
     * @param {Number} status 请求失败的状态码
     * 401 cookie过期，后端重定向，检测到?ReturnUrl=则跳转登录页
     * 403 拒绝访问，无权限，不处理
     * 404 缺失，不处理
     * 500 ghost关闭或者其它异常，不处理
     * 501 服务异常，不处理
     * 504 服务异常，跳转登录页
     * default 其它情况不做处理
     */
    const errorHandle = function (status, other) {
        // 状态码判断
        switch (status) {
            case 401:
                if (window.sessionStorage.getItem('isSsoLogin')) {
                    window.sessionStorage.clear()
                    jumpPage('/ganwei-iotcenter-login/ssoLogout')
                } else {
                    toLogin()
                }
                break
            case 403:
                tip('login.framePro.tips.noOparate', 2000)
                break
            case 404:
                break
            case 500:
                break
            case 501:
                break
            case 504:
                toLogin()
                break
            default:
                break
        }
    }

    let defaultResponseInterceptorConfig = {
        fullfilled: res => {
            if (res.status === 200 || res.status === 201 || res.status === 204) {
                let requestData = res.request
                if (requestData.responseURL.indexOf('?ReturnUrl=') != -1) {
                    toLogin()
                    return
                }
            }
            return res.status === 200 || res.status === 201 ? Promise.resolve(res) : Promise.reject(res)
        },
        reject: function axiosRetryInterceptor (err) {
            let codeToLowerCase = err.code.toLowerCase()
            const instance = currentAxiosBuilder.axios
            const { response } = err
            let retryWhiteList = err.config.retryWhiteList, url = err.config.url, location = url.split('?')[0]
            if (typeof err.code == 'string' && codeToLowerCase.includes('err_network') && !timeoutNoTips.includes(location)) {
                toLogin();
            }

            let ifRetryApi = retryWhiteList.findIndex(reg => reg && reg.test(location)) > -1

            // 具有返回值且不属于重复请求API
            if (response && !ifRetryApi) {
                errorHandle(response.status, response)
                return Promise.reject(response)
            } else if (response == undefined || ifRetryApi) {
                let config = err.config
                if (ifRetryApi) {
                    // 记录当前重连次数，初始化默认为0
                    config.__retryCount = config.__retryCount || 0

                    // 超过重连次数时，retry为配置管理获取次数
                    if (config.__retryCount >= config.retry) {
                        // 超过重连次数且有响应内容时，进行相应的错误处理
                        if (response) {
                            errorHandle(response.status, response)
                            return Promise.reject(response)
                        }
                        tip('login.framePro.tips.overtime', 3000)
                        return Promise.reject({})

                    }
                    // 重连次数加一
                    config.__retryCount += 1

                    // 创建一个新的promise来处理请求
                    let backoff = new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve()
                        }, config.retryDelay || 1000)
                    })

                    // 返回一个axios重试请求的promise
                    return backoff.then(function () {
                        return instance(config)
                    })
                }
                // 接口请求超时的处理
                if (response == undefined) {

                    if (!timeoutNoTips.includes(location)) {
                        tip('login.framePro.tips.overtime', 3000)
                    }
                    return Promise.reject({})
                }
            }
        }
    }, httpConfig = {
        countRetry: 0,
        timeout: 30000,
        retryDelay: 3000
    }

    /**
     * @description: 定义AxiosBuilder并挂载window
     * @return {*}
     */
    _this['AxiosBuilder'] = function AxiosBuilder () {
        this.axios = window.axios
        this.config = {}
        this.requestInterceptor = []
        this.responseInterceptor = []
        this.i18n = null
        this.notification = null
        this.elmessageBox = null
    }

    _this['AxiosBuilder'].prototype.withTipConfig = function withTipConfig (i18n, notification, elmessageBox) {
        _this.i18n = this.i18n = i18n
        _this.notification = this.notification = notification
        _this.elmessageBox = this.elmessageBox = elmessageBox
        try {
            if (_this.top.AxiosBuilder.i18n) { this.i18n = _this.top.AxiosBuilder.i18n }
            if (_this.top.AxiosBuilder.notification) { this.notification = _this.top.AxiosBuilder.notification }
            if (_this.top.AxiosBuilder.elmessageBox) { this.elmessageBox = _this.top.AxiosBuilder.elmessageBox }
        } catch (error) { }
        _this.AxiosBuilder = this
        return this
    }

    _this['AxiosBuilder'].prototype.withDeafultConfig = function withDeafultConfig (config) {
        this.config = config || httpConfig
        return this
    }

    _this['AxiosBuilder'].prototype.withRequestInterceptor = function withRequestInterceptor (requestInterceptor) {
        if (Array.isArray(requestInterceptor) && requestInterceptor[0] instanceof Function && requestInterceptor[1] instanceof Function) {
            this.requestInterceptor.push(requestInterceptor)
        } else {
            console.error('requestInterceptor should be [(config) => {}, (error) => {}]')
        }
        return this
    }

    _this['AxiosBuilder'].prototype.withResponseInterceptor = function withResponseInterceptor (responseInterceptor) {
        if (Array.isArray(responseInterceptor) && responseInterceptor[0] instanceof Function && responseInterceptor[1] instanceof Function) {
            this.responseInterceptor.push(responseInterceptor)
        } else {
            console.error('responseInterceptor should be [(response) => {}, (error) => {}]')
        }
        return this
    }
    _this['AxiosBuilder'].prototype.withDeafultRequestInterceptor = function withDeafultRequestInterceptor () {
        this.requestInterceptor.push([
            config => {
                config.headers['Accept-Language'] = window.localStorage.languageType || 'zh-CN'
                //config.headers['Xsrf-Token'] = window.sessionStorage.CSRF_TOKEN || ''
                // config.url = config.url + (config.url.indexOf("?") != -1 ? "&culture=" : "?culture=") + window.localStorage.languageType
                let specialConfig = config.overTimeList.find((i, index) => {
                    return i.api === (config.url.indexOf("?") != -1 ? config.url.split("?")[0] : config.url)
                });
                if (specialConfig) {
                    config.timeout = specialConfig.timeout;
                }
                return config
            },
            error => Promise.error(error)
        ])
        return this
    }

    _this['AxiosBuilder'].prototype.withDeafultResponseInterceptor = function withDeafultResponseInterceptor () {
        this.responseInterceptor.push([defaultResponseInterceptorConfig.fullfilled, defaultResponseInterceptorConfig.reject])
        return this
    }

    _this['AxiosBuilder'].prototype.build = function build () {
        this.axios = window.axios.create(this.config)
        this.axios.defaults.headers.post['Content-Type'] = 'application/json'
        this.axios.defaults.headers['X-Requested-With'] = 'IoT-XMLHttpRequest'
        this.axios.defaults.withCredentials = true
        this.requestInterceptor.forEach(r => {
            this.axios.interceptors.request.use(...r)
        })
        this.responseInterceptor.forEach(r => {
            this.axios.interceptors.response.use(...r)
        })

        this.axios.defaults['timeout'] = httpConfig.timeout
        this.axios.defaults['retry'] = httpConfig.countRetry
        this.axios.defaults['retryDelay'] = httpConfig.retryDelay
        this.axios.defaults['retryWhiteList'] = []
        this.axios.defaults['overTimeList'] = []
        _this.getConfigInfoData().then(res => {
            if (res.httpConfig) {
                this.axios.defaults['timeout'] = res.httpConfig.timeout
                this.axios.defaults['retry'] = res.httpConfig.countRetry
                this.axios.defaults['retryDelay'] = res.httpConfig.retryDelay
                this.axios.defaults['retryWhiteList'] = Array.from(new Set(res.httpConfig.retryWhiteList.replaceAll('\n', '').split(','))).map(str => str && new RegExp(str))
                this.axios.defaults['overTimeList'] = _this.mergeApi(res.httpConfig.overTimeList || [], overTimeList)
            }
        })
        return this
    }
    _this['AxiosBuilder'].prototype.getInstance = function getInstance () {
        currentAxiosBuilder = this
        return this.axios
    }
})(window)
