/*
 * @Author: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @Date: 2022-08-16 11:00:41
 * @LastEditors: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @LastEditTime: 2022-08-18 16:25:51
 * @FilePath: \webui-base-frame----RefactorUI-dev----图标管理\src\views\pages\ganwei-iotcenter-equip-lists\src\components\table\yxTable\yxTable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    props: {
        tableDataYx: {
            type: Array,
            default: () => []
        },
        loading:{
            type:Boolean,
            default:false
        },
    },
    inject:['getColor'],
    data() {
        return {
            isShow: ['0','1','2','3','4','5']
        }
    },
    mounted () {
        let _this = this
        this.$bus.off('equipListsIot-yxp')
        this.$bus.on('equipListsIot-yxp', function(arry){
            _this.isShow = arry
        })
    },
    methods: {
        showRealTimeCurve(type, item) {
            this.$emit('showRealTimeCurve', type, item)
        },
        showYcYxList(type, title, ycyxNum, ycyxName, showTimeSelect) {
            this.$emit('showYcYxList', type, title, ycyxNum, ycyxName, showTimeSelect)
        },
        showHistoryCurve(type, item) {
            this.$emit('showHistoryCurve', type, item)
        }
    }
}
