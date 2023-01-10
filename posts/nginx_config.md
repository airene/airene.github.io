---
date: 2023-01-10
title: Nginx中一些不常见但是有用的配置和windows下的特殊处理
tags:
- nginx
description: 装上就能用，但是有些地方还是有一些个性化需求的，记录一下，也许别人也会用到，比如最优的让ip不能访问而不是打开"第一个"，代理下的静态文件关闭日志等
---
# {{ $frontmatter.title }}

只写一些默认配置没有的选项，常见的就不写了

## 不显示nginx版本号
携带版本号的可能有特定的漏洞，隐藏了加强点安全，http节点下加入一行`server_tokens off;`即可
## 默认时间格式不是国人友好
把 log_format 中的 `$time_local` 换成`$time_iso8601`会易读一些
## 在proxy关闭静态文件log
这个点下面点两个方法可能都不是最优解法  
**方法一**，配置双份代理，实测有效，不优雅
```nginx
location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_pass http://192.168.137.2;
}
location ~ .*\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_pass http://192.168.137.2;
    log_not_found off;
    access_log off;
}
```
**方法二**，用一个nginx支持的map功能,全站或者按站点添加都可以
```nginx
map $request_uri $loggable {
    default                                                        1;
    ~*\.(gif|jpg|jpeg|png|bmp|css|js|ico|svg|ttf|woff|woff2|json)$ 0;
}

access_log logs/access.log combined if=$loggable;
```
## windows日志切割
linux平台装好了自动按日期切割而且还压缩了（yum安装），windows费点劲，而且还不能直接注册服务，需要winsw的协助  
实测有效（部分语法不是非常清楚，比如最后一个@echo on有没有意义），好像不停服务也没问题，不是HA很高要求的 启停一下问题也不大。
```bat
@echo off
net stop nginx
rem get date in format yyyymmdd
for /f "tokens=1-3 delims=-/ " %%1 in ("%date%") do set ddd=%%1%%2%%3
move PATH:\nginx\logs\access.log PATH:\nginx\logs\access_%ddd%.log
move path:\nginx\logs\error.log PATH:\nginx\logs\error_%ddd%.log
net start nginx
@echo on
```
## 直接使用ip不让问题
如果不做特殊处理，使用ip访问，默认会找"第一个"网站打开，最新的可能是默认nginx页面，反正还是有的打开，这样会别人随便解析ip，有风险，而且不管是返回啥都比下面都方法的慢，我知道的最优雅的方式
```nginx
server {
    listen 80 default_server;
    listen 443 default_server;
    ssl_reject_handshake on;
    server_name _;
    return 444;
}
```
直接就是打不开 而且返回速度很快  
PS:`ssl_reject_handshake`需要高版本nginx才支持

## 其他好文
[为什么NGINX的reload命令不是热加载？](https://mp.weixin.qq.com/s/UXgjwYI6eI0Acgb-CfxtAw)  
看起来在一些代理场景缺点还挺多的

