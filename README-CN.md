<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/WebPlugins/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

简体中文 | [English](README.md)

WebPlugins 是一个基于ASP.NET Core和VUE的模块化和插件化应用程序框架，基于松耦合、高内聚的设计理念，构建了一个可扩展、易维护的应用框架，通过将核心逻辑与功能组件完全解耦，可进行二次开发

# 插件开发技术白皮书

## 前端开发指南 [前端Wiki文档](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn)

### 第一章 环境配置与项目初始化
#### 1.1 开发环境搭建
- 1.1.1 使用nvm进行Node版本管理
- 1.1.2 项目初始化流程

#### 1.2 项目架构解析
- 1.2.1 标准化目录结构
- 1.2.2 模块化设计原则

### 第二章 子应用开发规范
#### 2.1 模板工程体系
- 2.1.1 设备联动场景模板结构
- 2.1.2 通用组件开发范式

#### 2.2 功能实现指南
- 2.2.1 菜单系统配置
- 2.2.2 业务代码开发规范
- 2.2.3 启动流程说明（pnpm install优化实践）

#### 2.3 界面主题系统
- 2.3.1 主题资源引用机制
- 2.3.2 动态主题切换实现

### 第三章 构建与部署
#### 3.1 打包优化策略
- 3.1.1 生产环境构建配置
- 3.1.2 版本发布规范

## 后端开发指南 [后端Wiki文档](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end.README.zh%E2%80%90cn)

### 第一章 插件工程架构
#### 1.1 工程化解决方案
- 1.1.1 模板引擎集成方案
- 1.1.2 命令行工具链配置
- 1.1.3 Visual Studio开发环境配置

#### 1.2 解决方案结构
- 1.2.1 文档体系（docs目录规范）
- 1.2.2 构建系统（build目录说明）
- 1.2.3 插件项目结构标准

### 第二章 核心开发规范
#### 2.1 上下文管理规范
- 2.1.1 模型映射标准
- 2.1.2 上下文命名规则
- 2.1.3 跨插件交互机制
- 2.1.4 生命周期管理
- 2.1.5 跨域数据共享策略

#### 2.2 接口开发规范
- 2.2.1 服务接口定义标准
- 2.2.2 实现类开发指南
- 2.2.3 控制器继承模式
- 2.2.4 调试体系
  - 本地调试配置
  - 接口测试工具链
  - 日志追踪规范

### 第三章 运维支持系统
#### 3.1 日志管理
- 3.1.1 平台级日志规范
- 3.1.2 插件日志分级
  - 3.1.2.1 插件独享日志
  - 3.1.2.2 关键日志

#### 3.2 常用工具扩展
- 3.2.1 字符串处理
- 3.2.2 日期时间操作
- 3.2.3 序列化方案
- 3.2.4 枚举增强
- 3.2.5 键值对容器

### 第四章 高级功能模块
#### 4.1 配置管理系统
- 4.1.1 配置读取机制
- 4.1.2 动态配置更新

#### 4.2 任务调度系统
- 4.2.1 定时任务基础
- 4.2.2 集群部署注意事项

#### 4.3 会话管理
- 4.3.1 上下文会话机制
- 4.3.2 分布式会话方案

#### 4.4 配置读取
- 4.4.1 读取机制
- 4.4.2 动态更新

#### 4.5 定时作业
- 4.5.1 使用示例
- 4.5.2 使用注意

#### 4.6 数据转换对象(DTO)
- 4.6.1 映射配置
- 4.6.2 映射方式
  - 4.6.2.1 自动映射
  - 4.6.2.2 显式配置
