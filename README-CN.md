<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/WebPlugins/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

简体中文 | [English](README.md)

WebPlugins 是一个基于ASP.NET Core和VUE的模块化和插件化应用程序框架，基于松耦合、高内聚的设计理念，构建了一个可扩展、易维护的应用框架，通过将核心逻辑与功能组件完全解耦，可进行二次开发


# [插件开发技术白皮书](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN)

## [前端开发指南](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn)
### [第一章 环境配置与项目初始化](#chapter-1-environment-configuration-and-project-initialization)
#### [1.1 开发环境搭建](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#1-%E4%BD%BF%E7%94%A8nvm%E5%AE%89%E8%A3%85)
#### [1.2 项目架构解析](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#2-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)

### [第二章 子应用开发规范](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#2-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)
#### [2.1 模板工程体系](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#31-%E7%A4%BA%E4%BE%8B%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%AE%BE%E5%A4%87%E8%81%94%E5%8A%A8)
- [2.2.1 菜单系统配置](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#32-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95)
- [2.2.2 业务代码开发规范](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#33-%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91)
- [2.2.3 启动流程说明](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#34-%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%AE)

#### [2.3 界面主题系统](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#35-%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE)
- [2.3.1 主题资源引用机制](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#351-%E4%B8%BB%E9%A2%98%E5%BC%95%E7%94%A8)
- [2.3.2 动态主题切换实现](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#352-%E4%B8%BB%E9%A2%98%E5%88%87%E6%8D%A2)

### [第三章 构建与部署](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#4-%E5%AD%90%E5%BA%94%E7%94%A8%E6%89%93%E5%8C%85)


# [后端开发指南](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end.README.zh%E2%80%90cn)
## [1. 插件工程架构](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#%E6%8F%92%E4%BB%B6%E5%B7%A5%E7%A8%8B%E6%9E%B6%E6%9E%84)
### [1.1 工程化解决方案](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#11-%E5%B7%A5%E7%A8%8B%E5%8C%96%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
#### [1.1.1 下载模板引擎](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#111-%E4%B8%8B%E8%BD%BD%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E)
#### [1.1.2 命令行创建插件模板解决方案](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#112-%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
#### [1.1.3 VisualStudio创建插件模板解决方案](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#113-visualstudio%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
### [1.2 解决方案结构](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#12-%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%BB%93%E6%9E%84)
#### [1.2.1 Solution Items解决方案文件夹](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#121-solution-items%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
#### [1.2.2 docs解决方案文件夹](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#122-docs%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
#### [1.2.3 build解决方案文件夹](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#123-build%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
#### [1.2.4 插件项目](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#124-%E6%8F%92%E4%BB%B6%E9%A1%B9%E7%9B%AE)
## [2. 上下文管理规范](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#2-%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83)
### [2.1 模型映射规范](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#21-%E6%A8%A1%E5%9E%8B%E6%98%A0%E5%B0%84%E8%A7%84%E8%8C%83)
### [2.2 上下文命名规范](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#22-%E4%B8%8A%E4%B8%8B%E6%96%87%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
### [2.3 上下文基本说明](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#23-%E4%B8%8A%E4%B8%8B%E6%96%87%E5%9F%BA%E6%9C%AC%E8%AF%B4%E6%98%8E)
### [2.4 跨插件模型操作说明](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%90CN#24-%E8%B7%A8%E6%8F%92%E4%BB%B6%E6%A8%A1%E5%9E%8B%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E)
## [3. 接口定义及调用](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end%E2%80%9
