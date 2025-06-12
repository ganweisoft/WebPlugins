/*
 * @Author: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @Date: 2022-08-16 13:14:43
 * @LastEditors: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @LastEditTime: 2022-08-18 11:11:39
 * @FilePath: \webui-base-frame----RefactorUI-dev----图标管理\src\views\pages\ganwei-iotcenter-equip-lists\src\components\dialog\exportEquip\exportEquip.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    props: {
        showDialog: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            exportType:3,
            exportLoading:false
        }
    },
    computed: {
        typeList() {
            return [
                {
                    name: 'equipListsIot.excelName.allDevice',
                    value: 3
                },
                {
                    name: 'equipListsIot.excelName.normalDevice',
                    value: 1
                },
                {
                    name: 'equipListsIot.excelName.alarmDevice',
                    value: 2
                },
                {
                    name: 'equipListsIot.excelName.outLineDevice',
                    value: 0
                }
            ]
        },
    },
    methods: {

        confirmExport() {
            this.exportLoading = true
            this.$api
                .exportAbnormalRecord({
                    deviceStatus: this.exportType == 3 ? -1 : this.exportType
                })
                .then((res) => {
                    this.exportLoading = false
                    if (res.status === 200) {
                        let url = window.URL.createObjectURL(new Blob([res.data], { type: res.data.type }))
                        let link = document.createElement('a')
                        link.style.display = 'none'
                        link.href = url
                        let date = new Date()
                        let dateStr = `${date.getFullYear()}-${date.getMonth() + 1
                            }-${date.getDate()}`
                        let excelName = ''
                        switch (this.exportType) {
                            case 0:
                                excelName = this.$t('equipListsIot.excelName.outLineDevice')
                                break // 离线
                            case 1:
                                excelName = this.$t('equipListsIot.excelName.normalDevice')
                                break // 正常
                            case 2:
                                excelName = this.$t('equipListsIot.excelName.alarmDevice')
                                break // 告警
                            case 3:
                                excelName = this.$t('equipListsIot.excelName.allDevice')
                                break // 全部
                            default:
                                break
                        }
                        link.setAttribute('download', dateStr + '-' + excelName)
                        document.body.appendChild(link)
                        link.click()
                        this.closeDialog()
                    } else {
                        this.$message.error(this.$t('equipListsIot.publics.tips.exportFail'), res)
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.exportLoading = false
                    // if (err.status == 403) {
                    //     return;
                    // }
                    let reader = new FileReader()
                    reader.readAsText(err.data, 'utf-8')
                    reader.onload =  (e)=> {
                        let content = JSON.parse(reader.result)
                        this.$message.error(content.message, err)
                    }
                })
        },

        closeDialog(){
            this.$emit('closeDialog','showExportEquipDialog')
        }

    }
}