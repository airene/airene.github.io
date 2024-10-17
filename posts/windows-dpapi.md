---
date: 2024-10-17
title: windows的DPAPI是什么
category: windows
tags:
- windows11
- windows server
description: windows环境下一台chrome的登录信息怎么能“挪”到另一个机器，还能保证登录状态
---
# windows的dpapi是什么
DPAPI = Data Protection API  
场景（非想做不好的事情）：windows环境下chrome的登录信息怎么能“挪”到另一个机器，还能保持登录状态  
查资料获得的信息 windows版的chrome对敏感数据用到了windows的dpapi做数据保护，所以想要上面的能实现需要复制DPAPI的信息  

DPAPI的目录 `C:\Users\[USERNAME]\AppData\Roaming\Microsoft\Protect`这个下面的数据复制到别的机器，chrome用户目录打包过去就行了。
