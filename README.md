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
#### 1.1 Development Environment Setup
- 1.1.1 Node Version Management with NVM
- 1.1.2 Project Initialization Workflow

#### 1.2 Project Architecture Analysis
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

## Backend Development Guide [Backend Wiki Documentation](https://github.com/ganweisoft/WebPlugins/wiki/back%E2%80%90end.README.zh%E2%80%90cn)

### Chapter 1: Plugin Engineering Architecture
#### 1.1 Engineering Solutions
- 1.1.1 Template Engine Integration
- 1.1.2 Command-Line Toolchain Configuration
- 1.1.3 Visual Studio IDE Configuration

#### 1.2 Solution Structure
- 1.2.1 Documentation System (docs Directory Standards)
- 1.2.2 Build System (build Directory Overview)
- 1.2.3 Plugin Project Structure Standards

### Chapter 2: Core Development Standards
#### 2.1 Context Management Standards
- 2.1.1 Model Mapping Specifications
- 2.1.2 Context Naming Conventions
- 2.1.3 Cross-Plugin Interaction Mechanisms
- 2.1.4 Lifecycle Management
- 2.1.5 Cross-Domain Data Sharing Strategies

#### 2.2 API Development Standards
- 2.2.1 Service Interface Definitions
- 2.2.2 Implementation Class Guidelines
- 2.2.3 Controller Inheritance Patterns
- 2.2.4 Debugging System
  - Local Debug Configuration
  - API Testing Toolchain
  - Log Tracing Standards

### Chapter 3: Operational Support Systems
#### 3.1 Logging Management System
- 3.1.1 Platform-Level Logging Standards
- 3.1.2 Plugin Logging Classification
  - Business Critical Logs
  - Debug Auxiliary Logs

#### 3.2 Developer Toolkit
- 3.2.1 Type Extension Utilities
  - String Processing
  - Date/Time Operations
  - Serialization Solutions
  - Enum Enhancements
- 3.2.2 Data Structure Support
  - Key-Value Container
  - DTO Mapping Solutions

### Chapter 4: Advanced Feature Modules
#### 4.1 Configuration Management
- 4.1.1 Configuration Retrieval Mechanism
- 4.1.2 Dynamic Configuration Updates

#### 4.2 Task Scheduling
- 4.2.1 Basic Usage Examples
- 4.2.2 Cluster Deployment Considerations

#### 4.3 Session Management
- 4.3.1 Context Session Mechanism
- 4.3.2 Distributed Session Solutions
