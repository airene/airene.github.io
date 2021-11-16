---
date: 2021-11-01
title: macOS开启平滑字体
tags:
- macOS
description: 从macOS11开始设置里面平滑字体没了，字体明显不舒服
---
# macOS11之后开启平滑字体

嫌弃 big sur 也就是11的 app icon 奇丑无比一直没升级，到12的图片直接复制文字，而且越来越多的软件已经变成方形图标，更新完新app再手动换老图标已经有点麻烦了，所以直接升了12了，上结论(**需要重启**)：  
```shell
defaults -currentHost write -g AppleFontSmoothing -int 0
```
执行上面命令可以完全等效于以前 '设置-通用' 底部的平滑字体选项   
如果要重新开启此选项：
```shell
defaults -currentHost delete -globalDomain AppleFontSmoothing
```
