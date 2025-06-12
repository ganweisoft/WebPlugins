/**
 * @file 设备列表插件
 */

const myTree = () => import('gw-base-components-plus/treeV2');
export default {
    components: {
        myTree
    },
    props: {
        selectedChange: {
            type: Function,
            default: () => { }
        },
        selectedMode: {
            type: Number,
            default: 0
        },
        equipSelected: {
            type: Array,
            default: () => []
        },
        showSetParm: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            equipLoading: false, // 设备加载loading
            equipList: [], // 设备列表
            searchName: '', // 搜索框
            selectedList: [],
            total: 10,
            currentPage: 1,
            pageSize: 5,
            dialogVisible: true,
            noData: this.$t('login.framePro.label.noData'),
            equipNo: -1,
            setParmList: [],
            setParmCurrentPage: 1,
            setParmPageSize: 8,
            setParmTotal: 0,
            setParmCurrentIndex: -1,
            setParmData: {
                setNo: -1,
                setName: ''
            },
            searchEquipName: '',
            disabled: true

        };
    },
    mounted () {

        // 缓存 ，搜索用API请求
        this.equipLoading = true;
        // if (this.globalVariable.initsEquipAList.groups && !this.globalVariable.search) {
        //     setTimeout(() => {
        //         this.equipLoading = false;
        //         this.equipList = this.globalVariable.initsEquipAList.groups;
        //     }, 500);
        // } else {
        //     this.searchEquips();
        // }

        // this.searchEquips();

        // if (this.showSetParm) {
        //     $('.menuDialog .equipSelect').addClass('showSetParm');
        // }

    },
    watch: {
        searchName (val) {
            if (!val) {
                this.$refs.treeV2.filterMethod()
                // this.searchEquipName = val
            }
        }

    },
    methods: {
        setParmHandleChange (val) {
            this.setParmCurrentPage = val;
            this.getItem();
        },
        getItem (data) {

            // 当需要选择设备控制项的时候传equipNo
            if (!data.isGroup) {
                this.equipNo = data.key;
                this.selectedList = [
                    {
                        equipNo: data.key,
                        equipName: data.title,
                        staNo: data.staNo
                    }]

            }

        },
        selectedSetParm (item) {
            this.setParmCurrentIndex = item.setNo;
            this.setParmData.setNo = item.setNo;
            this.setParmData.setName = item.setNm;
        },
        sendData () {
            let equipNoList = this.selectedList;
            // if (this.selectedMode === 0) {
            //     let dataList = $('.child_tags');
            //     dataList.each((item) => {
            //         if (
            //             $($('.child_tags')[item])
            //                 .children('label')
            //                 .hasClass('checkInput-active')
            //         ) {
            //             if (
            //                 $($('.child_tags')[item])
            //                     .children('label')
            //                     .attr('no') !== 0
            //             ) {
            //                 equipNoList.push({
            //                     equipNo: parseInt(
            //                         $($('.child_tags')[item])
            //                             .children('label')
            //                             .attr('no'),
            //                         10
            //                     ),
            //                     equipName: $($('.child_tags')[item])
            //                         .children('a')
            //                         .text()
            //                 });
            //             }
            //         }
            //     });
            // } else if ($('.selectedColor')) {
            //     if ($('.selectedColor').length > 0) {
            //         equipNoList.push({
            //             equipName: $('.selectedColor')
            //                 .children('a')
            //                 .text().trim(),
            //             equipNo: parseInt($('.selectedColor').attr('equipno'), 10)
            //         });
            //     }
            // }
            if (equipNoList.length === 0) {
                this.$message({
                    title: this.$t('login.framePro.tips.selEquip'),
                    type: 'warning'
                });
            } else if (this.showSetParm && this.setParmData.setNo === -1) {
                this.$title({
                    message: this.$t('login.framePro.tips.selControlEquip'),
                    type: 'warning'
                });
            } else {
                this.filterData(equipNoList);
            }
        },
        filterData (data) {
            let Arr = [];
            let ArrList = [];
            data.forEach((item) => {
                if (Arr.indexOf(item.equipNo) === -1) {
                    Arr.push(item.equipNo);
                    ArrList.push(item);
                }
            });
            if (this.showSetParm) {
                this.selectedChange(ArrList, this.setParmData);
            } else {
                this.selectedChange(ArrList);
            }
        },
        handleCurrentChange (val) {
            this.currentPage = val;
            this.searchEquips();
        },
        inputSearch () {
            // if (this.searchName == '')
            // this.onSearch();
        },
        onSearch () {
            // this.searchEquips();
            // this.globalVariable.search = true;
            // this.searchEquipName = this.searchName
            this.searchName = this.searchName.trim()
            this.$refs.treeV2.filterMethod(this.searchName)
        },

        // 获取左侧设备列表
        searchEquips () {
            this.equipLoading = true;
            this.$api
                .getGroup()
                .then((rt) => {

                    // 搜索请求结果
                    let str = this.$t('login.framePro.tips.noSearchResult');
                    if (rt.data.message === '无查找结果' || rt.data.message === str) {
                        this.equipList = [];
                        return;
                    }
                    if (rt.data.code === 200) {
                        // this.equipList = rt.data.data.groups;
                        this.equipList = rt.data.data
                        // this.total = rt.data.data.groups.length;
                        // if (!this.globalVariable.search) {
                        //     this.globalVariable.initsEquipAList = rt.data.data;
                        // }
                        // if (this.searchName.length === 0) {
                        //     this.globalVariable.search = false;
                        // }
                    }
                    this.equipLoading = false;
                })
                .catch((err) => {
                    this.equipLoading = false;
                    console.log('err---', err);
                });

        }
    }
};