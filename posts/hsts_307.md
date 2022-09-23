---
date: 2021-09-17
title: Hsts，httpcode - 302 303 307
tags:
- httpcode
- hsts
description: 没见过hsts是个什么东东，用一个jsdelivr的接口,发现的307和响应header里面有hsts 
---
# {{ $frontmatter.title }}

## 3xx code
- 301 永久性跳转 http1.0
- 302 临时性跳转 http1.0
- 303 (补充302) 各浏览器按302处理 http1.1
- 307 (补充302) 基本没见过 在jsdelivr看到了 http1.1

303,307的表现还和请求的幂等、非幂等有关,get,delete,put为幂等，post非幂等  
白话版，请求无法预知提交schema的作用，比如primarykey是否存在的情况下，通常意义上来讲前三个的副作用是固定的，post不是

## 表现
本地文件按照`file://`或者webstorm的`localhost`不带https打开,请求自适应协议的get`//data.jsdelivr.com/v1/package/npm/xxx`,查看控制台发现先发了一个http get请求,
状态码:307,响应response headers:

```text
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: http://localhost:63342
Location: https://data.jsdelivr.com/v1/package/npm/vue
Non-Authoritative-Reason: HSTS
```

再发一个https get到这个url到请求,并正常返回结果,**浏览器自动完成**

## nginx 如何开启
```text
add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
```
## 参考

[https://hstspreload.org/](https://hstspreload.org/)  
[https://zhangzifan.com/hsts.html](https://zhangzifan.com/hsts.html)  
[hsts list的列表(加密,好像是会随chrome的发布不断内置新版,已经到22M了)](https://chromium.googlesource.com/chromium/src/+/master/net/http/transport_security_state_static.json?format=TEXT)


