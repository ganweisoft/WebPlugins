<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/WebPlugins/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

简体中文 | [English](README.md)

WebPlugins 是一个基于ASP.NET Core和VUE的模块化和插件化应用程序框架，基于松耦合、高内聚的设计理念，构建了一个可扩展、易维护的应用框架，通过将核心逻辑与功能组件完全解耦，可进行二次开发


# 插件开发技术白皮书

## [前端开发指南](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn)
### [第一章 环境配置与项目初始化](#chapter-1-environment-configuration-and-project-initialization)
#### [1.1 开发环境搭建](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#1-%E4%BD%BF%E7%94%A8nvm%E5%AE%89%E8%A3%85)
#### [1.2 项目架构解析](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#2-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)

### [第二章 子应用开发规范](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#2-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)
#### [2.1 模板工程体系](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#31-%E7%A4%BA%E4%BE%8B%E6%A8%A1%E6%9D%BF%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%AE%BE%E5%A4%87%E8%81%94%E5%8A%A8)
- [2.2.1 菜单系统配置](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#32-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95)
- [2.2.2 业务代码开发规范](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#33-%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91)
- [2.2.3 启动流程说明](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#34-%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%AE)

#### [2.3 界面主题系统]([#section-2-3-interface-theme-system](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#35-%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE))
- [2.3.1 主题资源引用机制](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#351-%E4%B8%BB%E9%A2%98%E5%BC%95%E7%94%A8))
- [2.3.2 动态主题切换实现](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#352-%E4%B8%BB%E9%A2%98%E5%88%87%E6%8D%A2))

### [第三章 构建与部署]([#chapter-3-build-and-deployment](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end%E2%80%90CN#4-%E5%AD%90%E5%BA%94%E7%94%A8%E6%89%93%E5%8C%85))


## [后端开发指南](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end.README.zh%E2%80%90cn)
### [第一章 插件工程架构](#chapter-1-plugin-engineering-architecture)
#### [1.1 工程化解决方案](#section-1-1-engineering-solutions)
- [1.1.1 模板引擎集成方案](#subsection-1-1-1-template-engine-integration-scheme)
- [1.1.2 命令行工具链配置](#subsection-1-1-2-command-line-toolchain-configuration)
- [1.1.3 Visual Studio开发环境配置](#subsection-1-1-3-visual-studio-development-environment-setup)

#### [1.2 解决方案结构](#section-1-2-solution-structure)
- [1.2.1 文档体系](#subsection-1-2-1-documentation-system)（docs目录规范）
- [1.2.2 构建系统](#subsection-1-2-2-build-system)（build目录说明）
- [1.2.3 插件项目结构标准](#subsection-1-2-3-plugin-project-structure-standards)

### [第二章 核心开发规范](#chapter-2-core-development-standards)
#### [2.1 上下文管理规范](#section-2-1-context-management-standards)
- [2.1.1 模型映射标准](#subsection-2-1-1-model-mapping-standards)
- [2.1.2 上下文命名规则](#subsection-2-1-2-context-naming-conventions)
- [2.1.3 跨插件交互机制](#subsection-2-1-3-cross-plugin-interaction-mechanism)
- [2.1.4 生命周期管理](#subsection-2-1-4-lifecycle-management)
- [2.1.5 跨域数据共享策略](#subsection-2-1-5-cross-domain-data-sharing-strategy)

#### [2.2 接口开发规范](#section-2-2-api-development-standards)
- [2.2.1 服务接口定义标准](#subsection-2-2-1-service-interface-definition-standards)
- [2.2.2 实现类开发指南](#subsection-2-2-2-implementation-class-development-guide)
- [2.2.3 控制器继承模式](#subsection-2-2-3-controller-inheritance-pattern)
- [2.2.4 调试体系](#subsection-2-2-4-debugging-system)
  - 本地调试配置
  - 接口测试工具链
  - 日志追踪规范

### [第三章 运维支持系统](#chapter-3-operations-support-system)
#### [3.1 日志管理](#section-3-1-log-management)
- [3.1.1 平台级日志规范](#subsection-3-1-1-platform-level-log-standards)
- [3.1.2 插件日志分级](#subsection-3-1-2-plugin-log-classification)
  - [3.1.2.1 插件独享日志](#subsubsection-3-1-2-1-plugin-exclusive-logs)
  - [3.1.2.2 关键日志](#subsubsection-3-1-2-2-critical-logs)

#### [3.2 常用工具扩展](#section-3-2-common-utility-extensions)
- [3.2.1 字符串处理](#subsection-3-2-1-string-processing)
- [3.2.2 日期时间操作](#subsection-3-2-2-date-time-operations)
- [3.2.3 序列化方案](#subsection-3-2-3-serialization-schemes)
- [3.2.4 枚举增强](#subsection-3-2-4-enum-enhancements)
- [3.2.5 键值对容器](#subsection-3-2-5-key-value-container)

### [第四章 高级功能模块](#chapter-4-advanced-feature-modules)
#### [4.1 配置管理系统](#section-4-1-configuration-management-system)
- [4.1.1 配置读取机制](#subsection-4-1-1-configuration-reading-mechanism)
- [4.1.2 动态配置更新](#subsection-4-1-2-dynamic-configuration-updates)

#### [4.2 任务调度系统](#section-4-2-task-scheduling-system)
- [4.2.1 定时任务基础](#subsection-4-2-1-timed-task-basics)
- [4.2.2 集群部署注意事项](#subsection-4-2-2-cluster-deployment-considerations)

#### [4.3 会话管理](#section-4-3-session-management)
- [4.3.1 上下文会话机制](#subsection-4-3-1-context-session-mechanism)
- [4.3.2 分布式会话方案](#subsection-4-3-2-distributed-session-scheme)

#### [4.4 配置读取](#section-4-4-configuration-reading)
- [4.4.1 读取机制](#subsection-4-4-1-reading-mechanism)
- [4.4.2 动态更新](#subsection-4-4-2-dynamic-updates)

#### [4.5 定时作业](#section-4-5-scheduled-jobs)
- [4.5.1 使用示例](#subsection-4-5-1-usage-examples)
- [4.5.2 使用注意](#subsection-4-5-2-usage-notes)

#### [4.6 数据转换对象(DTO)](#section-4-6-data-transfer-object-dto)
- [4.6.1 映射配置](#subsection-4-6-1-mapping-configuration)
- [4.6.2 映射方式](#subsection-4-6-2-mapping-methods)
  - [4.6.2.1 自动映射](#subsubsection-4-6-2-1-automatic-mapping)
  - [4.6.2.2 显式配置](#subsubsection-4-6-2-2-explicit-configuration)

