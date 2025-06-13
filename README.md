<p align="center" dir="auto">
  <a href="https://opensource.ganweicloud.com" rel="nofollow">
    <img style="max-width:100%;" src="https://github.com/ganweisoft/WebPlugins/blob/main/src/logo.jpg">
  </a>
</p>

[![GitHub license](https://camo.githubusercontent.com/5eaf3ed8a7e8ccb15c21d967b8635ac79e8b1865da3a5ccf78d2572a3e10738a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f646f746e65742f6173706e6574636f72653f636f6c6f723d253233306230267374796c653d666c61742d737175617265)](https://github.com/ganweisoft/WebPlugins/blob/main/LICENSE) ![AppVeyor](https://ci.appveyor.com/api/projects/status/v8gfh6pe2u2laqoa?svg=true) ![https://v2.vuejs.org/](https://img.shields.io/badge/Vue-3.5.13-%2394c20c?labelColor=#94c20c) ![https://www.webpackjs.com](https://img.shields.io/badge/vite-4.5.5-%234ec428?labelColor=#5a5a5a) ![https://www.axios-http.cn/docs/intro](https://img.shields.io/badge/Axios-1.7.9-%2397c424?labelColor=#5a5a5a) ![https://next.router.vuejs.org](https://img.shields.io/badge/vueRouter-4.5.0-%23d6604a?labelColor=#5a5a5a) ![https://element.eleme.io/#/zh-CN](https://img.shields.io/badge/ElementUI-2.9.1-%23097abb?labelColor=#5a5a5a) ![](https://img.shields.io/badge/join-discord-infomational)

English | [简体中文](README-CN.md)

WebPlugins is a modular and pluggable application framework based on ASP.NET Core and VUE. Built on the design principles of loose coupling and high cohesion, it provides an extensible and maintainable application framework. By completely decoupling core logic from functional components, it enables secondary development.

# Plugin Development Technical White Paper

## Frontend Development Guide [Frontend Wiki Documentation](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README.zh%E2%80%90cn)

### Chapter 1: Environment Configuration & Project Initialization
#### [1.1 Development Environment Setup](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end#1-install-using-nvm)
- 1.1.1 Node Version Management with NVM
- 1.1.2 Project Initialization Workflow

#### [1.2 Project Architecture Analysis](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end#2-project-structure-description)
- 1.2.1 Standardized Directory Structure
- 1.2.2 Modular Design Principles

### [Chapter 2: Sub-application Development Standards](https://github.com/ganweisoft/WebPlugins/wiki/front%E2%80%90end.README#3-sub-application-development)
#### 2.1 Template Engineering System
- 2.1.1 Device Interaction Scene Template Structure
- 2.1.2 Common Component Development Paradigm

#### 2.2 Feature Implementation Guide()
- 2.2.1 Menu System Configuration
- 2.2.2 Business Code Development Standards
- 2.2.3 Startup Process Documentation (pnpm install Optimization Practices)

#### 2.3 UI Theme System
- 2.3.1 Theme Resource Reference Mechanism
- 2.3.2 Dynamic Theme Switching Implementation

### Chapter 3: Build & Deployment
#### 3.1 Packaging Optimization Strategies
- 3.1.1 Production Build Configuration
- 3.1.2 Release Versioning Standards
以下是文档中的前三级目录结构：

# 1. 后端开发指南
- [1.1 Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#11-%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
  - [1.1.1 Download the Template Engine](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#111-%E4%B8%8B%E8%BD%BD%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E)
  - [1.1.2 Command Line to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#112-%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
  - [1.1.3 Visual Studio to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#113-visualstudio%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)

- [1.2 Explanation of the Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#12-%E6%8F%92%E4%BB%B6%E6%A8%A1%E6%9D%BF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E8%AF%B4%E6%98%8E)
  - [1.2.1 Solution Items Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#121-solution-items%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
  - [1.2.2 docs Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#122-docs%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
  - [1.2.3 build Solution Folder](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#123-build%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%96%87%E4%BB%B6%E5%A4%B9)
  - [1.2.4 Plugin Project](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#124-%E6%8F%92%E4%BB%B6%E9%A1%B9%E7%9B%AE)

- [1.3 Context Operation Instructions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#13-%E4%B8%8A%E4%B8%8B%E6%96%87%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E)
  - [1.3.1 Model Mapping Norms](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#131-%E6%A8%A1%E5%9E%8B%E6%98%A0%E5%B0%84%E8%A7%84%E8%8C%83)
  - [1.3.2 Context Naming Conventions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#132-%E4%B8%8A%E4%B8%8B%E6%96%87%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
  - [1.3.3 Basic Explanation of Context](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#133-%E4%B8%8A%E4%B8%8B%E6%96%87%E5%9F%BA%E6%9C%AC%E8%AF%B4%E6%98%8E)
  - [1.3.4 Cross-Plugin Model Operation Instructions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#134-%E8%B7%A8%E6%8F%92%E4%BB%B6%E6%A8%A1%E5%9E%8B%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E)

- [1.4 Interface Definition and Invocation](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#14-%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%B0%83%E7%94%A8)
  - [1.4.1 Service Interface Definition](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#141-%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)
  - [1.4.2 Service Interface Implementation](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#142-%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0)
  - [1.4.3 Service Interface Registration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#143-%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3%E6%B3%A8%E5%86%8C)
  - [1.4.4 Controller Inheritance](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#144-%E6%8E%A7%E5%88%B6%E5%99%A8%E7%BB%A7%E6%89%BF)
  - [1.4.5 Local Debugging Interface](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#145-%E6%9C%AC%E5%9C%B0%E8%B0%83%E8%AF%95%E6%8E%A5%E5%8F%A3)
  - [1.4.6 Interface Debugging Tools](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#146-%E6%8E%A5%E5%8F%A3%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7)

- [1.5 Log Management](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#15-%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86)
  - [1.5.1 Platform Log Output](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#151-%E5%B9%B3%E5%8F%B0%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA)
  - [1.5.2 Plugin Log Output](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#152-%E6%8F%92%E4%BB%B6%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA)

- [1.6 Common Helpful Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#16-%E5%B8%B8%E7%94%A8%E5%B8%AE%E5%8A%A9%E6%89%A9%E5%B1%95)
  - [1.6.1 String Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#161-%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%89%A9%E5%B1%95)
  - [1.6.2 Date Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#162-%E6%97%A5%E6%9C%9F%E6%89%A9%E5%B1%95)
  - [1.6.3 Serialization Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#163-%E5%BA%8F%E5%88%97%E5%8C%96%E6%89%A9%E5%B1%95)
  - [1.6.4 Enumeration Extensions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#164-%E6%9E%9A%E4%B8%BE%E6%89%A9%E5%B1%95)
  - [1.6.5 Key-Value Pair Objects](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#165-%E9%94%AE%E5%80%BC%E5%AF%B9%E5%AF%B9%E8%B1%A1)

- [1.7 Session Information](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#17-%E4%BC%9A%E8%AF%9D%E4%BF%A1%E6%81%AF)
- [1.8 Reading Configuration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#18-%E8%AF%BB%E5%8F%96%E9%85%8D%E7%BD%AE)
- [1.9 Event Bus](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#19-%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF)
  - [1.9.1 Local Event Bus](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#191-%E6%9C%AC%E5%9C%B0%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF)
  - [1.9.2 Fuzzy Subscription](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#192-%E6%A8%A1%E7%B3%8A%E8%AE%A2%E9%98%85)
- [1.10 Kafka Distributed Event Bus](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#110-kafka%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF)
  - [1.10.1 Configuration Instructions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1101-%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)
  - [1.10.2 Usage Instructions](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1102-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)
- [1.11 Scheduled Tasks](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#111-%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)
  - [1.11.1 Example Usage](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1111-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)
  - [1.11.2 Usage Notes](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1112-%E4%BD%BF%E7%94%A8%E6%B3%A8%E6%84%8F)
- [1.12 Data Transfer Object (DTO)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#112-%E6%95%B0%E6%8D%AE%E8%BD%AC%E6%8D%A2%E5%AF%B9%E8%B1%A1dto)
  - [1.12.1 Mapping Configuration](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1121-%E6%98%A0%E5%B0%84%E9%85%8D%E7%BD%AE)
  - [1.12.2 Mapping Method (One)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1122-%E6%98%A0%E5%B0%84%E6%96%B9%E5%BC%8F%E4%B8%80)
  - [1.12.3 Mapping Method (Two)](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#1123-%E6%98%A0%E5%B0%84%E6%96%B9%E5%BC%8F%E4%BA%8C)
