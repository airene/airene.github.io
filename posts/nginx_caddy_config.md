---
date: 2023-03-26
title: nginx 和 caddy 反向代理的区别
category: caddy
tags:
- nginx
- caddy
description: caddy 简单的反向代理非常好实现，如果是稍微复杂点的，还真不知道 caddy 怎么写，查资料都不好查，官网翻了半天都没有，为了自动证书特性还是 google 到了，虽然知道底层用的是 acme.sh 的，还是不想额外单独自己装
---
# nginx 和 caddy 反向代理的区别

之前提到过https://www.ti.bi/posts/caddy_auto_tls.html 这个  
这次就真的换了。

## 期望目标
后端接口服务url: `http://localhost:8008/getJson`  
前端调用地址: 当前FE域名加`/api/getJson`能访问！  
**注意后端是没有`/api/`这个路径的哦**


上配置:
```nginx
    // 注意8008最后有一个 '/' 有没有这个差异还是很大的
    location /api/ {
        proxy_pass http://localhost:8008/;
    }
```
不想写有没有`/`什么差异的内容了，网上有的是，直接看caddy的，然后实现的效果是一样的就好理解了

```nginx
handle_path /api/* {
    reverse_proxy localhost:8008
}
```
重点其实是`handle_path`的使用  
直接写成 `reverse_proxy /api/* localhost:8008` 是不行的，直接写应该是后端带`/api/` 能支持，**这一点未测试**
