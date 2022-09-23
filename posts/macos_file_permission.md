---
date: 2017-03-29
title: 全新安装macOS系统考回的文件权限变成777修复
description: 大版本升级喜欢全格之后升级，遇到的问题是文件系统权限就全变777了，从网上找到了解决办法
tags:
- macOS
---
# {{ $frontmatter.title }}
从macOS 10.11.6 U盘全新安装升级到 10.12.4(到第四版应该是没什么坑了吧);  
备份方式为用路由器与Time Machine全量备份45个G的内容+手动备份有用的个人文件到U盘;  
没什么特别的,就一个地方比较不好,复制出去的文件,在复制回来权限全变成了777了,网上找到命令解决;  
```bash
find . -type d -exec chmod 755{} \; && find . -type d | xargs chmod 755 && chmod 755 `find -type d`
find . -type f -exec chmod 644 {} \; && find . -type f | xargs chmod 644 && chmod 644 `find -type f`
```

文件是 644,文件夹是755 为新建文件或文件夹的默认权限.
<Comment />
