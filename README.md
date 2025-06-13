<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/WebPlugins/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

English | [简体中文](README-CN.md)

WebPlugins is a modular and pluggable application framework based on ASP.NET Core and VUE. Built on the design principles of loose coupling and high cohesion, it provides an extensible and maintainable application framework. By completely decoupling core logic from functional components, it enables secondary development.

# Plugin Development Technical White Paper

## Frontend Development Guide

### Chapter 1: Environment Configuration & Project Initialization
#### [1.1 Development Environment Setup](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#1-install-using-nvm)
- 1.1.1 Node Version Management with NVM
- 1.1.2 Project Initialization Workflow

#### [1.2 Project Architecture Analysis](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#2-project-structure-description)
- 1.2.1 Standardized Directory Structure
- 1.2.2 Modular Design Principles

### [Chapter 2: Sub-application Development Standards](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-sub-application-development)
#### 2.1 Template Engineering System
- [2.1.1 Device Interaction Scene Template Structure](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-1-device-interaction-scene-template-structure)
- [2.1.2 Common Component Development Paradigm](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-2-common-component-development-paradigm)

#### [2.2 Feature Implementation Guide](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-3-feature-implementation-guide)
- [2.2.1 Menu System Configuration](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-3-1-menu-system-configuration)
- [2.2.2 Business Code Development Standards](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-3-2-business-code-development-standards)
- [2.2.3 Startup Process Documentation](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-3-3-startup-process-documentation)
  - (pnpm install Optimization Practices)

#### 2.3 UI Theme System
- [2.3.1 Theme Resource Reference Mechanism](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-4-theme-resource-reference-mechanism)
- [2.3.2 Dynamic Theme Switching Implementation](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#3-5-dynamic-theme-switching-implementation)

### Chapter 3: Build & Deployment
#### 3.1 Packaging Optimization Strategies
- [3.1.1 Production Build Configuration](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#4-1-production-build-configuration)
- [3.1.2 Release Versioning Standards](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn#4-2-release-versioning-standards)
# 1. Backend Development Guide
- [1.1 Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#11-create-a-plugin-template-solution)
  - [1.1.1 Download the Template Engine](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#111-download-the-template-engine)
  - [1.1.2 Command Line to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#112-command-line-to-create-a-plugin-template-solution)
  - [1.1.3 Visual Studio to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#113-visual-studio-to-create-a-plugin-template-solution)

- [1.2 Explanation of the Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#12-explination-of-the-plugin-template-solution)
  - [1.2.1 Solution Items Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#121-solution-items-solution-folder)
  - [1.2.2 docs Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#122-docs-solution-folder)
  - [1.2.3 build Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#123-build-solution-folder)
  - [1.2.4 Plugin Project](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#124-plugin-project)

- [1.3 Context Operation Instructions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#13-context-operation-instructions)
  - [1.3.1 Model Mapping Norms](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#131-model-mapping-norms)
  - [1.3.2 Context Naming Conventions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#132-context-naming-conventions)
  - [1.3.3 Basic Explanation of Context](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#133-basic-explanation-of-context)

- [1.4 Interface Definition and Invocation](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#14-interface-definition-and-invocation)
  - [1.4.1 Service Interface Definition](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#141-service-interface-definition)
  - [1.4.2 Service Interface Implementation](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#142-service-interface-implementation)
  - [1.4.3 Service Interface Registration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#143-service-interface-registration)
  - [1.4.4 Controller Inheritance](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#144-controller-inheritance)
  - [1.4.5 Local Debugging Interface](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#145-local-debugging-interface)
  - [1.4.6 Interface Debugging Tools](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#146-interface-debugging-tools)

- [1.5 Log Management](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#15-log-management)
  - [1.5.1 Platform Log Output](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#151-platform-log-output)
  - [1.5.2 Plugin Log Output](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#152-plugin-log-output)

- [1.6 Common Helpful Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#16-common-helpful-extensions)
  - [1.6.1 String Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#161-string-extensions)
  - [1.6.2 Date Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#162-date-extensions)
  - [1.6.3 Serialization Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#163-serialization-extensions)
  - [1.6.4 Enumeration Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#164-enumeration-extensions)
  - [1.6.5 Key-Value Pair Objects](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#165-key-value-pair-objects)

- [1.7 Session Information](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#17-session-information)
- [1.8 Reading Configuration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#18-reading-configuration)
- [1.9 Scheduled Tasks](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#19-scheduled-tasks)
  - [1.9.1 Example Usage](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#191-example-usage)
  - [1.9.2 Usage Notes](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#192-usage-notes)
- [1.10 Data Transfer Object (DTO)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#110-data-transfer-object-dto)
  - [1.10.1 Mapping Configuration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1101-mapping-configuration)
  - [1.10.2 Mapping Method (One)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1102-mapping-method-one)
  - [1.10.3 Mapping Method (Two)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1103-mapping-method-two)

