
export default {
    created () {
        // this.$api.getSystemInfo().then(res => {
        //     if (res?.data?.code != 200 && res?.data?.code != -99999) {
        //         this.jumpLogin()
        //     }
        // }).catch(err => {
        //     console.log(err)
        //     this.jumpLogin()
        // })
        let map = window?.getParameterMap() || {}
        if (process.env.NODE_ENV == "development" && map) {
            sessionStorage.languageType = localStorage.languageType = map.get("languageType")
            sessionStorage.userName = map.get("userName")
            sessionStorage.passwordPolicy = map.get("passwordPolicy")
            if(!sessionStorage.getItem('theme') || sessionStorage.getItem('theme') == 'null' || sessionStorage.getItem('theme') == 'undefined') {
                sessionStorage.setItem('theme', map.get("theme"))
            }
        }
    },
    methods: {
        jumpLogin () {
            let url = (process.env.NODE_ENV === "development" ? this.$hostMap('ganwei-iotcenter-login') : '/ganwei-iotcenter-login/#/')
            window.location.href = url
        },
    }
}
