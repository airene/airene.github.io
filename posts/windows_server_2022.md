---
date: 2022-12-18
title: 近期遇到的几个问题
category: windows
tags:
- windows server
description: windows server, app store
---
# 近期遇到的几个问题

## windows server 2022 在 i7 12700 启动蓝屏问题
windows server 2022 刚装完没问题，等装完hyper-v后重启就稳定蓝屏，最后google发现是hyper-v对大小核支持的不好...  
还好华硕b660m bios提供了关闭小核也就是能效核的办法，关闭后就正常了，心中一万个...  
据说对wsl2也就是正式版支持也不行，这个还没试，等有消息能完全支持的吧

## server 2022 手动安装 mysql 报文件找不到 MSVCP140.dll 等文件
实际执行命令是好几个文件找不到，有说找windows修复工具的，有说直接找对应的文件下载放在系统目录的，正规的解决办法，安装运行库就行了，在这里下载：  
https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170  
微软官方的，安全的很

## iOS 15.x版本在wifi链接的情况下，下载速度慢的问题
**最终原因还没有确定和解决**，可能是确实国内没有下载的cdn吧，或者cdn都不给力。  
表现：白天更新app稳定在1MB左右，有时候稍微快点，但是离宽带速度差很远，macOS更新没这个问题  

手机修改dns处还有一个提示：    
**此局域网的dns请求正被iCloud专用代理路由(以为是这个问题，实际不是)**    
首先这个代理路由服务属于icloud+的内容，目的是为了隐私，其次国内不提供这个服务，然后国内这个在icloud设置处(ios15.7.1)只有一个升级的选项，**没有关闭选项**  
升级到16.2之后修改dns那没有这个提示了，但是下载速度依然是经常1M，后半夜没人的时候能到宽带满速。  
网上找了修改dns 什么 114.114.114.114,233.5.5.5这种改完并没有效果，有一个帖子说改168.95.1.1（台湾） 改完了能到10M速度，实际应该是cdn地址换了，但是这个dns并不稳定，有时候改完了，才500KB左右，还不如自动的...  

很早以前好像没这个问题，不说满速，20-30MB还是有的。

也有说和开启显示ip地址跟踪有关系的，周末试试

## 参考
https://blog.csdn.net/wjx_jasin/article/details/126687590
