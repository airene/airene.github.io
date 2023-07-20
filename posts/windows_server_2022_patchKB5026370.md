---
date: 2023-05-16
title: Windows Server 2022在KB5026370更新修复了一个重要的体验问题
tags:
- windows server
description: 这下不用每次手动添加，也不需要启动时候加脚本了
---
# {{ $frontmatter.title }}

以前重启系统之后，hyper-v的端口映射信息还在但是并不能正常工作，在KB5026370更新之后，现在没问题了，也可能是之前的补丁就修复了，我不知道，这次重启才发现。
之前网上还有教程教写一个bat文件在启动的时候添加，现在也不用了，Great.

```shell
netsh interface portproxy add v4tov4 listenport=65xxx listenaddress=221.xxx.xxx.246 connectaddress=192.168.xxx.30 connectport=3389
```

## 2022-07-20 更新累积7月更新上面的又不行了
需要删了映射，然后再重新建映射才行，更新重启，和主动重启了一次，验证都不行。。。
