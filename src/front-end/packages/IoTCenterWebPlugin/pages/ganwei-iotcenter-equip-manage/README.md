# ganwei-base-equip-manage

#### 模块简介

基线模块-设备管理

设备管理--对设备进行统一管理，包含遥信、遥测、设置项。其涵盖的模块有：

```
设备管理

模板管理

类型管理

```

#### 开发条件

要开发此模块，需要先行下载基线模板， 地址：git@gitee.com:shend/webui-base-equip-manage.git（DEV 分支），基线模板包含了 webpack、router、API、style、components、utils 等公共配置以及依赖项，详情依赖可查看 package.json。

#### 依赖框架

基于 Elemen UI 框架开发，要开发此模块，请预先熟悉该框架，地址：https://element.eleme.cn/#/zh-CN

#### 开发调试

1、根据上面地址下载基础模板后，使用下面命令安装引入该模块，如果 package.json 中有对应依赖项，直接使用命令 npm install 安装即可。

```
npm install ganwei-base-equip-manage
```

2、引入成功后，运行下面命令即可打开登录页面，继而开启 IoT 服务以及 API 服务即可登录查看该页面。

```
npm run dev
```

3、在 node_modules 下找到引入的组件，其目录结构有 src(源文件)、package(配置文件)、readme(说明文件)，其中 src 中又包含 vue、js、css、img 文件，按照正常 VUE 组件开发即可。

#### 改版升级

1：增加移动适配功能
2:2.1.0 && 2.1.1===>设备列表展示性能优化，编辑弹窗性能优化
