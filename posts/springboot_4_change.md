---
date: 2025-12-02
title: spring-boot 4 相比 3.5.x 的变化
category: spring-boot
description: spring-boot 4 相比 3.5.x 的变化
tags:
- spring-boot
---
# spring-boot 4 相比 3.5.x 的变化
2025-11-21 spring-boot 4 发布正式版，自己手上的很小的项目(只依赖spring-boot、spring-boot-starter - web｜webmvc、spring-boot-starter-jdbc,mysql-connector-j、lombok)尝了一下鲜，官方文档说的各种提升或者变化或者迁移指南就不写了，重点写一下差异。
## pom.xml 变化
除了 3.5.x 变成 4.0.0 的变化之外，重要的是 spring-boot-starter-web 要改成 spring-boot-starter-webmvc
## 4.0.0 包依赖变化
同包只是升版本的删掉了
### 3.5.x 特有的 jar 包
```
├── jackson-datatype-jdk8-2.19.4.jar
├── jackson-datatype-jsr310-2.19.4.jar
├── jackson-module-parameter-names-2.19.4.jar
└── spring-jcl-6.2.14.jar
```
### 4.0.0 特有的 jar 包
```
├── commons-logging-1.3.5.jar // 取消spring-jcl包
├── jspecify-1.0.0.jar
├── spring-boot-http-converter-4.0.0.jar
├── spring-boot-jackson-4.0.0.jar
├── spring-boot-jdbc-4.0.0.jar
├── spring-boot-persistence-4.0.0.jar
├── spring-boot-servlet-4.0.0.jar
├── spring-boot-sql-4.0.0.jar
├── spring-boot-tomcat-4.0.0.jar
├── spring-boot-transaction-4.0.0.jar
├── spring-boot-web-server-4.0.0.jar
└── spring-boot-webmvc-4.0.0.jar
```
可以看出来主要是 spring-boot 的变化，而且还非常大（和官方的细化模块依赖吻合），当然 4.0.0 才是第一个稳定版本，还不是 LTS 版本，依赖很有可能发生变化
## 额外的问题
jackson 从 2 升级到 3 了，之前数据库类型为 date 的字段输出变成了长格式，eg：`2025-12-02T16:00:00.000Z`这种,其实我想要的就是`2025-12-02`,可以配置增加一个属性即可。
```yaml
spring:
  jackson:
    date-format: yyyy-MM-dd
```
## 参考
https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Release-Notes  
