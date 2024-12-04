---
date: 2024-12-04
title: 解决macOS存储空间一直在计算的问题
category: macOS
tags:
- macOS
description: 好长时间点到设置-通用-存储空间，老是只有照片和系统数据一直再“转”，计算中
---
# 解决macOS存储空间一直在计算的问题
如果你也恰巧只有照片和系统数据一直计算出不来大小，以前怀疑是cleanmymac或者其他的应用比如微信文件太碎导致的系统数据出不来，照片可能是icloud的设置出不来。  
结果还真不是！！！ 从reddit找到答案，确实有点坑了  

**解决办法：**
```
Open Photos app, Photos->Settings->Use as System Photo Library->solved.
打开照片应用 - 设置 - 随便一个或者新建一个相册，然后设置成系统相册，解决！！
```
## 参考
https://www.reddit.com/r/MacOS/comments/175kglm/never_ending_calculating_for_photos_and_system/


