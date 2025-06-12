/*
 * @Author: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @Date: 2022-08-16 13:36:09
 * @LastEditors: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @LastEditTime: 2022-08-18 14:04:25
 * @FilePath: \webui-base-frame----RefactorUI-dev----图标管理\src\views\pages\ganwei-iotcenter-equip-lists\src\components\dialog\selectExportType\selectExportType.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    props: {
        showDialog:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            exportTypeOption: [
                {
                    label: 'equipListsIot.button.exportByDay',
                    value: false
                },
                {
                    label: 'equipListsIot.button.exportByCombined',
                    value: true
                }
            ],
            isMerge:false
        }
    },
    methods:{
        closeDialog(){
            this.$emit('closeDialog','showExportTypeSelectDialog')
        },
        confirm(){
            this.$emit('confirm',this.isMerge)
        }
    }
}