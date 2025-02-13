---
date: 2025-02-13
title: Caddy 成功配置插件 rate_limit 限流
category: caddy
tags:
- caddy
description: 如果有一个网站访问最多的是爬虫，要怎么做，限流是一个方法
---
# Caddy 成功配置插件 rate_limit 限流
## 下载方式
限流不是一个内置插件，官方只是开了一个口子，允许自行实现，官方页面定制下载，搜索关键字 `ratelimit`,找到 https://github.com/mholt/caddy-ratelimit 这个插件，下载。
## 配置文件 caddyfile 的写法
一开始使用配置文件，因为文档的问题，描述的感觉不是非常清楚，当然也可能是使用不当，下面发一下成功的配置  
**需求： 所有伪静态页面限制固定的访问频率**
```yaml
# 每天最多访问100篇
domain {
    rate_limit {
        zone limit_zone1 {
            match {
                path_regexp \.(html|htm|php)$
            }
            key {remote_host}
            events 100
            window 1d
        }
    }
    # 插件返回的限流处理
    handle_errors {
        @429 {
        expression `{http.error.status_code} == 429`
        }
        respond @429 "Too fast！" 429
        respond "Unknown Error" {http.error.status_code}
    }
}
```

## 另外同时支持 80 和 443 的配置的写法参考
```yaml
# 可能有更简洁的写法
http://domain, https://domain {
      ...
}
```

