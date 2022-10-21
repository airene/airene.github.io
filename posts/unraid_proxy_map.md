---
date: 2022-10-22
title: Unraid 实现能代理的时间路线图
tags:
- unraid
description: 对于有"洁癖"，或者家里"条件"不好的，比如没有旁路由或者主路由无法开魔法的人可以看一下，这是一个长时间的有点像流水账，并不是一个保姆级教程
---
# {{ $frontmatter.title }}
::: tip
1、以下所有场景都是主机为单网卡场景  
2、CA = community.applications
:::

## 第一阶段：刚开始玩 unraid 发现系统和插件都无法更新

**因为同时也是在正式学习 docker**，所以不想用 vm openwrt 的方式安装小猫咪，尝试方法：
- unraid 自身安装小猫咪，手动在命令行 export， 终端能 proxy，更新系统和CA依然不行
- docker 安装 openwrt ，因为在 unraid 的网卡是否 bond 和 bridge 和 docker 的 macvlan 上朦朦胧胧，花了很长时间才在不桥接的情况下，通过 docker openwrt 能正常更新。
- 随即发现，openwrt 可以，那直接安装一个 docker 版的 小猫咪 也可以，尝试发现ok，最终就是这个方案，完全靠自身能力不依赖外部，满意

核心实现或者原理就是：
```shell
# /boot/config/go
http_proxy=http://192.168.1.2:7890 https_proxy=http://192.168.1.2:7890 /usr/local/sbin/emhttp &
```
这句

其实还有一个变种实现，比如局域网有一个长开的物理windows，那这个win在小猫咪（允许局域网）开了之后通过切换直连还是代理方式达到目的，也能接受，只是不在本机也还是有点瑕疵而已。

## 第二阶段：升级到6.11.x之后发现这种方式无法正常更新了

问了大佬(大佬都是上层有主路由并支持魔法或者旁路由)，官方论坛（无人回），嵌入反馈渠道（balabala无解）都试了一下，没有一个给出直接答案的。  

https://post.smzdm.com/p/all247de/ 这篇文章写的比较全，方方面面都有，总结一下，经过大体测试和观察（应该实际就是下面的结论）：
- go file 的 两个 export 会影响 docker pull 这种操作和认识"环境变量"的程序
- go file 写在 emhttp 前面的可能是 6.10.x 生效（**懒，没有回退版本测试**），到 6.11.x 不好用了
- proxy.cfg 文件确认只影响 CA 页面本身的加载，和下载里面的各种内容没关系，下载内容是靠 unraid `自身的` dynamix.plugin.manager来管理的，纯官方，至少不在 CA 的包里

经过刨祖坟之后发现 CA 内下载内容实际方法是：
```php
// /usr/local/emhttp/plugins/dynamix.plugin.manager/scripts/plugin 这个文件
if ($file = popen("wget --compression=auto --no-cache --progress=dot --retry-connrefused --timeout=30 --tries=5 --waitretry=5 -O $name $url 2>&1", 'r')) {...}
```
得知用的 wget 就好办了，直接在 /root 下面新建一个文件
```shell
# /root/.wgetrc
use_proxy=yes
http_proxy=http://10.0.0.2:7890
https_proxy=http://10.0.0.2:7890
wait=10
```
**重启都不用直接生效！！！**   

到目前还没有测试系统更新（下次有系统更新的时候测试），刨祖坟时候发现还有很多 curl 没走 proxy 配置，不知道影响什么

## 备份一下 go file 的内容

```shell
#!/bin/bash
cat >>/root/.bash_profile << __EOF__
alias ll="ls -lh"
alias l="ls -lah"
export TIME_STYLE=long-iso
__EOF__

cat >>/root/.wgetrc << __EOF__
use_proxy=yes
http_proxy=http://10.0.0.2:7890
https_proxy=http://10.0.0.2:7890
wait=10
__EOF__

cat >>/etc/sysctl.conf << __EOF__
net.ipv6.conf.all.disable_ipv6 = 1
__EOF__

/sbin/sysctl -p

ip link add myvlan-shim link br0 type macvlan  mode bridge
ip addr add 10.0.0.63/32 dev myvlan-shim
ip link set dev myvlan-shim address 8a:b1:0f:00:50:64
ip link set myvlan-shim up
ip route add 10.0.0.32/27 dev myvlan-shim
```

目前只有一级子网（也不需要二级）：
- 2 ~ 31 预留给虚拟机或者其他设备
- 32 ~ 63 是 docker macvlan网段，其中63是宿主访问 docker macvlan 的**hack**的另一个macvlan
- 65 ~ 230 ap池
- 231 ~ 253 预留




