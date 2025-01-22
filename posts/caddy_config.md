---
date: 2024-10-10
title: 记录一下 caddy 的 log 主要配置
category: caddy
tags:
- caddy
description: caddy 的 log 和 nginx 不太一样，nginx 属于“单行字符串”类型，caddy 的核心宗旨就是 json 和 metrics 丰富
---
# 记录一下 caddy 的 log 主要配置

```yaml
{
    admin off
    email abc@gmail.com
}
(log) {
    log {
        output file /var/log/caddy/{args[0]}/access.log {
            roll_size 100MiB
            roll_local_time
            roll_keep_for 168h
            roll_uncompressed
        }
        format filter {
            wrap console {
                time_local
                time_format wall
                duration_format ms
     
            }
            request>headers delete
            request>remote_ip delete
            request>remote_port delete
            request>host delete
            request>tls delete
            resp_headers delete
            bytes_read delete
            user_id delete
        }
    }
    @skip path_regexp \.(js|css|png|jpe?g|gif|ico|woff2?|otf|ttf|eot|svg|txt|pdf|docx?|xlsx?)$
    log_skip @skip
}
ti.bi {
    handle_path /api/* {
        reverse_proxy localhost:8008
    }
    handle {
        root * /home/www
        try_files {path} /index.html
        file_server
        encode gzip
    }
    import log ti.bi
}
www.ti.bi {
    redir https://ti.bi{uri} permanent
}
```

