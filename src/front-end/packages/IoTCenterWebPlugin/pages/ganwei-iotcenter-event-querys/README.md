1. # webui-base-event-querys

   #### 模块简介

   基线模块-事件查询

   事件查询包含对某个设备【遥测事件、遥信事件、设置事件】进行时间范围的事件查询以及系统事件的查询：

   ```
   设备事件
   
   系统事件
   ```

   #### 开发条件

   要开发此模块，需要先行下载基线模板， 地址：https://gitee.com/shend/io-tcenter-vue-temp.git（DEV分支），基线模板包含了webpack、router、API、style、components、utils等公共配置以及依赖项，详情依赖可查看package.json。

   #### 依赖框架

   基于Elemen UI框架开发，要开发此模块，请预先熟悉该框架，地址：https://element.eleme.cn/#/zh-CN

   #### 开发调试

   1、根据上面地址下载基础模板后，使用下面命令安装引入该模块，如果package.json中有对应依赖项，直接使用命令npm install 安装即可。

   ```
   npm install ganwei-base-event-querys
   ```

   2、引入成功后，运行下面命令即可打开登录页面，继而开启IoT服务以及API服务即可登录查看该页面。

   ```
   npm run dev
   ```

   3、在node_modules下找到引入的组件，其目录结构有src(源文件)、package(配置文件)、readme(说明文件)，其中src中又包含vue、js、css、img文件，按照正常VUE组件开发即可。

   

   

   
