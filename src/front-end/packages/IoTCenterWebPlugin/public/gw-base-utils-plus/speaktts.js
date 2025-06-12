/*
 * @Author: 郑堪侠
 * @Date: 2022-09-06 13:47:27
 * @LastEditTime: 2022-09-23 10:44:27
 * @FilePath: \webui-base-ladderd:\3\6.0\webui-base-frame\node_modules\gw-base-utils-plus\speaktts.js
 * @Description: 首先通过 npm install speak-tts 安装该插件包， 再通过minxins引入
 * Copyright (c) 2022 by 敢为软件, All Rights Reserved. 
 */
import Speech from 'speak-tts'
export default {
    data() {
        return {
            speech: null
        }
    },
    create() {
        this.speechInit();
    },
    //离开页面取消语音
    destroyed() {
        this.speech.cancel();
    },

    mounted() {
        this.speechInit();
    },
    methods: {
        // 初始化
        speechInit() {
            let that = this;
            this.speech = new Speech()
            this.speech.setLanguage('zh-CN')
            this.speech.init().then(() => {
                console.log("success");
            })
        },

        /**
         * @Author: 郑堪侠
         * @description: 播放按钮 ，txt 为传入文本
         * @return {*}
         */
        speechPlay(txt, isFlag) {
            let that = this;
            this.speech.speak({
                text: txt,
                listeners: {
                    //开始播放
                    onstart: () => {},
                    //判断播放是否完毕
                    onend: () => {
                        try {
                            if (isFlag)
                                that.speakttsIs = true;
                        } catch (e) {

                        }
                    },
                    //恢复播放
                    onresume: () => {
                        // console.log("Resume utterance")
                    },
                },
            }).then(() => {
                // console.log("读取成功")
            })
        },
        //暂停
        speechPaused() {
            this.speech.pause();
        },
        //从暂停处继续播放
        speechGoahead() {
            this.speech.resume();
        }

    }


}