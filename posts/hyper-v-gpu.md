---
date: 2024-11-12
title: hyper-v如何将显卡直通到虚拟的linux vm中
category: windows server
tags:
- windows
- hyper-v
description: 记录一下hyper-v如何直通dda的设备，显卡是tesla t4
---
# hyper-v如何将显卡直通到虚拟的linux vm中

环境：windows server 2016  
问题：server版本不算新，算事最早支持的一代，再老就不行了，而且和windows的wsl那种显卡共享还不是一个概念，直通就是宿主看不到了，只有vm能看到  
方法：宿主和vm都安装要安装显卡驱动   
关键：利用开源项目，比手动执行多条命令要好的多，直观且好用    
引申：用这个开源项目直通其他设备，比如硬盘，网卡也很方便  
遗留：内存映射放大的作用是什么  

## 参考

[微软官方文档](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/plan/plan-for-deploying-devices-using-discrete-device-assignment)  
[Discrete Device Assignment -- GPUs](https://techcommunity.microsoft.com/blog/virtualization/discrete-device-assignment----gpus/382266)  
[开源项目](https://github.com/airene/DDA)  
