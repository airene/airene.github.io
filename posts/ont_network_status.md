---
date: 2022-09-18
title: 给华为HN8346x6安装一个轻量版的 server_status
category: linux
tags:
- ont
- 光猫
description: 给光猫安装一个网速监控
---
# 给华为HN8346x6安装一个轻量版的 server_status

## 前提摘要

之前魔改定制了一个rust的[server-status](https://github.com/airene/server-status)项目，安装在云主机上完全没问题，从学习的角度想装在光猫里，然后就开始各种`Illegal Instruction`，突发奇想放到小米R3D里跑一下，程序本身有code不兼容arm，运行环境没问题，然后奇葩或者恶补的时间就开始了

**为什么要折腾**：
- 主要是rust练习和交叉编译，之前都是前端或者java这种web技术栈的，不涉及编译，低级语言的内容了解太少了，unraid内核重新封包也只是单一环境(amd64)编译，按照教程走就可以了
- 如果能有额外收益，比如为智能家居来点数据或者接口就更好了  

看过华为有一个LinkHome App，有些不满足：
- 运营商版本的光猫是定制版，在wifi ssid没改回原厂的情况下试了试近场模式，联不上，放弃。对我而言，联上了也没什么用，只能近场没有意义
- 恩山有人发布从原厂光猫jffs2下提取的插件，据说能远程联上。但是现在手机上已经有米家、格力（空调），不想再装智能类app了
- LinkHome虽然有拓扑图和其他更高级的功能，（可我只需要一个网速），同时完全还原jffs2也有变砖风险，另外网上发布的好像是java的程序

## 终极目标
能在HomeAssistant的基础上，或者不依赖HA直接做到类似网上牛人[智能家居全套IoT](https://cloud.lyvc.com/)这种效果，目前简单测试过docker版本的HA，好像是插件没装，没法直接把小米生态的都装进HA（也有额外成本）

## cpu信息

华为ONT 
```shell
# cat /proc/cpuinfo
processor       : 0
model name      : ARMv7 Processor rev 1 (v7l)
Features        : half thumb fastmult edsp thumbee tls
Hardware        : Hisilicon A9
# uname -m
armv7l
```
小米R3D
```shell
# cat /proc/cpuinfo
Processor       : ARMv7 Processor rev 0 (v7l)
Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4
Hardware        : Qualcomm Atheros AP148 reference board
# uname -m
armv7l
```

网上查到的资料ONT是 海思SD5182H， R3D是高通 IPQ8064(和R3P也不一样，P是联发科的)，刚开始努力的方向都是arm7或者armv7l，心想6和7差距大，都没想过用6，至于大架构下的差异完全不知道，指令集还是有概念的，但也不具体，而其他的比如hf，musl，gnu，eabi，thumb什么的就完全不知道了，musl和gnu倒是好理解。

status不能跑，试过github actions里的照别的项目的配置编译和可能的target，结果是要么编译报错，要么编译成功但是ONT上不能用。`其实事后发现是对toolchains和target和linker不理解`

为了加快效率，那就写个很简单的纯hello world，github来回提交效率也慢， 用本机的简单的编译，而且在本地编译问题上先看的[资料](https://blog.csdn.net/weixin_35757531/article/details/112934940)，过程中什么ulimit开允许coredump,core文件分析（皮毛）折腾一通，里面找到了一个 v-push，确认是指令不同，因为对编译知识的匮乏，没有及时发现musl.cc这个网站的mac，win，linux其实分开列的，而且已经不维护没有下载了，只有linux的是完整的，没注意这个细节，下了linxu在mac上配置了半天不好用，后来找到[资料](https://github.com/messense/homebrew-macos-cross-toolchains/releases)，用`armv7-unknown-linux-musleabihf-x86_64-darwin.tar.gz`，编出来的**R3D能用，光猫不能用**，都快放弃了。

网上基本全是光猫补全，和一些光猫原厂插件的文章，偶然搜到这篇**宝藏**文章，[参考链接](https://www.capjsj.cn/arm_linux_gcc_tcpdump.html)，虽然源码使用的语言不一样，但至少从外面编译的东西能放进去用，前面快放弃是因为以为是高度定制化（从cpu到系统，尤其是cpu可能精简？！）的光猫不好往里写插件呢

>arm-linux-gnueabi-gcc 和 arm-linux-gnueabihf-gcc  
两个交叉编译器分别适用于 armel 和 armhf 两个不同的架构，armel 和 armhf 这两种架构在对待浮点运算采取了不同的策略（有 fpu 的 arm 才能支持这两种浮点运算策略）。  
其实这两个交叉编译器只不过是 gcc 的选项 -mfloat-abi 的默认值不同。gcc 的选项 -mfloat-abi 有三种值 soft、softfp、hard（其中后两者都要求arm 里有 fpu 浮点运算单元，soft 与后两者是兼容的，但 softfp 和 hard 两种模式互不兼容）：  
soft： 不用fpu进行浮点计算，即使有fpu浮点运算单元也不用，而是使用软件模式。  
softfp： armel架构（对应的编译器为 arm-linux-gnueabi-gcc ）采用的默认值，用fpu计算，但是传参数用普通寄存器传，这样中断的时候，只需要保存普通寄存器，中断负荷小，但是参数需要转换成浮点的再计算。  
hard： armhf架构（对应的编译器 arm-linux-gnueabihf-gcc ）采用的默认值，用fpu计算，传参数也用fpu中的浮点寄存器传，省去了转换，性能最好，但是中断负荷高  

思路清晰点了之后，找arm7的不带hf的gcc，**没有，找armel前缀的也没有！** 又绝望了，抱着试试的心态直接用`arm-unknown-linux-gnueabi-x86_64-darwin.tar.gz` 成功了，%$##$@%^..


## 参考资料
https://blog.csdn.net/weixin_35757531/article/details/112934940  
https://www.capjsj.cn/arm_linux_gcc_tcpdump.html  
https://github.com/messense/homebrew-macos-cross-toolchains/releases

延伸扩展 `upx`， `llvm-strip` 应用程序瘦身


