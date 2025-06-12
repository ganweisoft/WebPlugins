const toCss = require('./complieReset.js')
class resetCssPlugin {
    constructor(noPress) {
        this.noPress = noPress
        this.time = 1
    }
    apply (compiler) {
        try {
            // compiler.plugin('after-compile', (compilation, callback) => {
            //     compilation.fileDependencies.push('/dist/static/css/reset.css')
            //     callback()
            // });

            // const emit = (compilation, cb) => {
            //     toCss.build(this.noPress)
            //     cb();
            // }

            // if (compiler.hooks) {
            //     compiler.hooks.emit.tapAsync('resetCssPlugin', emit);
            // } else {
            //     compiler.plugin('emit', emit);
            // }
            // compiler.hooks.emit.tapAsync('resetCssPlugin',)
            // compiler.plugin('emit', (compilation, callback) => {
            //     this.time++
            //     // 修改名称为filename的文件的输出

            //     compilation.chunks.forEach(chunk => {
            //         chunk.files.forEach(item => {
            //             console.log(item, 6666222)
            //         })
            //     })


            //     compilation.assets['static/css/reset.css'] = {
            //         // source方法用于输出文件的内容
            //         source: () => {
            //             // 这个方法的返回值可以是字符串或者buffer。可以在这里重写模块的输出内容
            //             return this.time % 2 == 0 ? '1' : '2'
            //         },
            //         size: () => {
            //             return 1
            //         }
            //     }
            //     callback()
            // })

            const emit = (compilation, cb) => {
                toCss.build(this.noPress)
                cb();
            }
            if (compiler.hooks) {
                compiler.hooks.emit.tap('resetCssPlugin', (compilation) => {
                    toCss.build(this.noPress)
                })
            } else {
                compiler.plugin('emit', emit);
            }
            compiler.plugin('watch-run', (watching, callback) => {
                Object.keys(watching.compiler.watchFileSystem.watcher.mtimes).forEach(fileName => {

                    if (fileName.includes('reset.scss')) {
                        toCss.build(this.noPress)
                        // this.changeResetCSS(compiler)
                        // compiler.apply('emit', compiler)
                    }
                })
                callback()
            });
        } catch (error) {
            console.log(error)

        }

    }
    changeResetCSS (compiler) {
        const emit = (compilation, cb) => {
            toCss.build(this.noPress)
            cb();
        }
        // compiler.plugin('after-compile', (compilation, callback) => {
        //     compilation.fileDependencies.push('/static/css/reset.scss')
        //     callback()
        // });

        if (compiler.hooks) {
            compiler.hooks.emit.tap('emit', (compilation) => {
                toCss.build(this.noPress)
            })
        } else {
            compiler.plugin('emit', emit);
        }
        // compiler.plugin('emit', (compilation, callback) => {
        //     // 修改名称为filename的文件的输出
        //     // console.log(compilation.assets)

        //     compilation.assets['static/css/reset.css'] = {
        //         // source方法用于输出文件的内容
        //         source: () => {
        //             // 这个方法的返回值可以是字符串或者buffer。可以在这里重写模块的输出内容
        //             return this.time == 2 ? '2' : '1'
        //         },
        //         size: () => {
        //             return 1
        //         }
        //         // 还有很多其他的属性，参考文档
        //     }
        //     callback()
        // })
    }
}

module.exports = resetCssPlugin