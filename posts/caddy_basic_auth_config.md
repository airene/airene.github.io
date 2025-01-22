---
date: 2025-01-10
title: caddy 的 basic_auth 在有 reserve_proxy 的情况下怎么一处配置，集体生效
category: caddy
tags:
- caddy
description: 一个配置文件折腾了好久，gpt 和类 gpt 和 google 都不太能搜到结果（误导居多），最后无意中还是 gpt 解决了
---
# caddy 的 basic_auth 在有 reserve_proxy 的情况下怎么一处配置，集体生效
## 场景
在单个子域名多个项目的时候有用，直接上结果
```yaml
demo.example.com {
    basic_auth {
        ad hash_password # 要用caddy命令生成
    }
    # 后端项目1
    handle_path /be1/* {
        reverse_proxy 127.0.0.1:8093 {
            header_up Authorization {http.auth.header}
        }
    }
    # 后端项目2
    handle_path /be2/* {
        reverse_proxy 127.0.0.1:8095 {
            header_up Authorization {http.auth.header}
        }
    }
    # 前端地址，所有项目都在一起
    reverse_proxy  http://127.0.0.1
}

```
最重要的坑点就是搜出来的都是 `header_up Authorization {http.auth.header.Authorization}` ，而不是现在的写法

## 扩展
handle 和 handle_path 的区别主要就是在对路径的处理上，这个很简单。


