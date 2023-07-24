---
date: 2023-02-04
title: 是时候尝试一下Caddy了
tags:
- caddy
description: Caddy v2，免费且自动SSL证书续期，配置文件及其简约，它很香
---
# 是时候尝试一下Caddy了
## 对Caddy的了解
学习golang的时候看过，一直觉得离生产比较远，nginx在行业的地位不是三两年就能撼动的。现在v2版本已经出了2年多了，上生产肯定是没问题了。
像介绍说的免费SSL自动续期，配置文件简洁这两条深得我心，小项目换这个很方便。
## 番外篇1
看配置文件的时候看到压缩方面，除离gzip之外 还一个zstd，zstd是facebook开源的，号称是比gzip强，尝试了几次想开启来看看和gzip对比一下，一开始以为是debian操作系统要安装zstd，装了也不好使，最后发现是浏览器不支持导致的，caddy的zstd是自包含的，都不用安装 !@#!@#$%%$，干！  

https://github.com/facebook/zstd  
https://caddy.community/t/zstd-not-working-caddy-always-prefers-gzip/17900

## 番外篇2
不发起favicon.ico请求的最快方法，不是放一个空文件在工程里面，那样还是会发起请求，下面这种方式请求都没有了   
```html
<link rel="icon" href="data:,">
```
就很香
## 参考
[Caddy vs Nginx](https://blog.tjll.net/reverse-proxy-hot-dog-eating-contest-caddy-vs-nginx/)


