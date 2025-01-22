---
date: 2024-05-26
title: 设置手上的 debian12 测试机空闲时自动休眠
category: linux
tags:
- linux
- debian
- suspend
description: 
---
# 设置手上的 debian12 测试机空闲时自动休眠
以下设置在debian12系统亲测有效。  
主要收益是：本来就是测试机，需要的时候WOL唤醒，就不用主动执行`systemctl suspend`来手动休眠了，也省的忘了执行
```sh
# 修改配置文件并保存，这两个选项默认就有，只是注释了
vim /etc/systemd/logind.conf
----
IdleAction=suspend
IdleActionSec=30min
----
# 重启logind服务
systemctl restart systemd-logind
```
扩展：  
`/etc/systemd/sleep.conf` 用来控制“休眠”的行为

