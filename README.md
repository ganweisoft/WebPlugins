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

## [1.1 Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#11-create-a-plugin-template-solution)
### [1.1.1 Download the Template Engine](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#111-download-the-template-engine)
### [1.1.2 Command Line to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#112-command-line-to-create-a-plugin-template-solution)
### [1.1.3 Visual Studio to Create a Plugin Template Solution](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end#133-basic-explanation-of-context))

## 1.2 Explanation of the Plugin Template Solution
### 1.2.1 SolutionI Items Solution Folder
### 1.2.2 docs Solution Folder
### 1.2.3 build Solution Folder
### 1.2.4 Plugin Project

## 1.3 Context Operation Instructions
### 1.3.1 Model Mapping Norms
### 1.3.2 Context Naming Conventions
### 1.3.3 Basic Explanation of Context
### 1.3.4 Cross-Plugin Model Operation Instructions

## 1.4 Interface Definition and Invocation
### 1.4.1 Service Interface Definition
### 1.4.2 Service Interface Implementation
### 1.4.3 Service Interface Implementation
### 1.4.4 Controller Inheritance
### 1.4.5 Local Debugging Interface
### 1.4.6 Interface Debugging Tools

## 1.5 Log Management
### 1.5.1 Platform Log Output
### 1.5.2 Plugin Log Output

## 1.6 Common Helpful Extensions
### 1.6.1 String Extensions
### 1.6.2 Date Extensions
### 1.6.3 Serialization Extensions
### 1.6.4 Enumeration Extensions
### 1.6.5 Key-Value Pair Objects

## 1.7 Session Information

## 1.8 Reading Configuration

## 1.9 Event Bus
### 1.9.1 Local Event Bus
### 1.9.2 Fuzzy Subscription

## 1.10 Kafka Distributed Event Bus
### 1.10.1 Configuration Instructions
### 1.10.2 Usage Instructions

## 1.11 Scheduled Tasks
### 1.11.1 Example Usage
### 1.11.2 Usage Notes

## 1.12 Data Transfer Object (DTO)
### 1.12.1 Mapping Configuration
### 1.12.2 Mapping Method (One)
### 1.12.3 Mapping Method (Two)
