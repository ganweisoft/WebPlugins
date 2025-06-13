<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/IoTCenterWebAPi/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

简体中文 | [English](README.md)

WebPlugins 是一个基于ASP.NET Core和VUE的模块化和插件化应用程序框架，基于松耦合、高内聚的设计理念，构建了一个可扩展、易维护的应用框架，通过将核心逻辑与功能组件完全解耦，可进行二次开发

# 目录   
# 前端插件开发指南

 ## 一、使用nvm安装
## 二、 项目结构说明
## 三、子应用开发
   - 3.1 示例模板文件结构(设备联动)
   - 3.2 配置菜单
   - 3.3 代码开发
   - 3.4 启动项目pnpm install
   - 3.5 主题配置
     - 3.5.1 [主题引用
     - 3.5.2 主题切换
## 四、 子应用打包
## Wiki地址  

- [Wiki主页](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn)


# 后端插件开发指南

## 一、插件工程搭建
### 1. 模板解决方案创建
- 1.1 下载模板引擎
- 1.2 命令行创建方案
- 1.3 Visual Studio创建方案

### 2. 解决方案结构解析
- 2.1 docs 文档目录
- 2.2 build 构建目录
- 2.3 插件项目结构

## 二、上下文管理规范
### 1. 基础规范
- 1.1 模型映射规范
- 1.2 上下文命名规则
- 1.3 跨插件模型交互

### 2. 操作指南
- 2.1 上下文生命周期管理
- 2.2 跨域数据共享策略

## 三、接口开发流程
### 1. 服务接口规范
- 1.1 接口定义规范
- 1.2 实现类开发指南
- 1.3 控制器继承模式

### 2. 调试体系
- 2.1 本地调试配置
- 2.2 接口测试工具链
- 2.3 调试日志追踪

## 四、日志管理系统
### 1. 日志输出规范
- 1.1 平台级日志输出
- 1.2 插件专属日志
  - 1.2.1 业务关键日志
  - 1.2.2 调试辅助日志

## 五、实用开发扩展
### 1. 类型扩展工具集
- 1.1 字符串处理扩展
- 1.2 日期时间操作
- 1.3 序列化/反序列化
- 1.4 枚举类型增强

### 2. 数据结构支持
- 2.1 键值对容器
- 2.2 DTO映射方案
  - 2.2.1 方案一：自动映射
  - 2.2.2 方案二：显式配置

## 六、进阶功能模块
### 1. 配置管理
- 1.1 配置读取机制
- 1.2 动态配置更新

### 2. 定时任务
- 2.1 基础使用示例
- 2.2 集群部署注意事项

### 3. 会话管理
- 3.1 上下文会话机制
- 3.2 分布式会话方案
