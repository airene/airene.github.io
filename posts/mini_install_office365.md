---
date: 2024-03-06
title: "最小化"安装office 365
tags:
- windows11
description: 连快捷方式都不要的福音 
---
# "最小化"安装office 365
是不是真的省硬盘 感知好想不是很明显(**装了一个多的，又按照这个装了一个少的，结果C盘剩的一样？**)，但是开始菜单里是真的没有 outlook,project这些了，以下是我的配置，只有office三剑客  

用到的软件：  
[微软链接](https://link.juejin.cn/?target=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fdownload%2Fdetails.aspx%3Fid%3D49117)

我的配置文件
```xml
<Configuration>
    <Add OfficeClientEdition="64" Channel="Current">
        <Product ID="O365ProPlusRetail">
            <Language ID="zh-cn" />
            <ExcludeApp ID = "Access"/>
            <ExcludeApp ID = "Lync"/>
            <ExcludeApp ID = "OneNote"/>
            <ExcludeApp ID = "Groove"/>
            <ExcludeApp ID = "OneDrive"/>
            <ExcludeApp ID = "Outlook"/>
            <ExcludeApp ID = "Publisher"/>
            <ExcludeApp ID = "Teams"/>
        </Product>
    </Add>
</Configuration>
```

文章参考:  
[掘金链接](https://juejin.cn/post/7204844328110669879)
