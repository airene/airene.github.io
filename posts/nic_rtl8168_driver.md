---
date: 2022-10-29
title: 解决 NUC11 阿斯加特峡谷 ubuntu22.04 RTL8168 网卡驱动问题
category: linux
tags:
- nuc11
- RTL8168
description: 即使到 ubuntu 的 22 版本，也没有正确安装 RTL 驱动，unraid 的机器也有类似的问题，插资料好像是螃蟹卡的尿性，没有积极往内核集成，所以内核里只有一个能用不好用的 r8169 驱动，表现就是网速各种上不去
---
# 解决 NUC11 阿斯加特峡谷 ubuntu22.04 RTL8168 网卡驱动问题

网上有两种解决办法，一个是从RTL下载最新的驱动自己编译，然后加载使用，比较繁琐，步骤比较多，我没尝试    
可以参考：https://askubuntu.com/questions/1327697/ubuntu-20-04-ethernet-r8168  

还一个方法比较简单，安装一个包，老驱动直接加到黑名单，重启即可  
原文在这里：https://realtechtalk.com/Ubuntu_Debian_Linux_Mint_r8169_r8168_Network_Driver_Problem_and_Solution-2253-articles
```shell
sudo apt install r8168-dkms
echo "blacklist r8169"  > /etc/modprobe.d/blacklist-r8169.conf
reboot
```

实际效果  
```text
root@nas:~# iperf3 -c 10.0.0.30 -i 1 -t 10
Connecting to host 10.0.0.30, port 5201
[  5] local 10.0.0.2 port 59792 connected to 10.0.0.30 port 5201
[ ID] Interval           Transfer     Bitrate         Retr  Cwnd
[  5]   0.00-1.00   sec   115 MBytes   961 Mbits/sec    0    305 KBytes
[  5]   1.00-2.00   sec   112 MBytes   940 Mbits/sec    0    305 KBytes
[  5]   2.00-3.00   sec   112 MBytes   942 Mbits/sec    0    308 KBytes
[  5]   3.00-4.00   sec   112 MBytes   937 Mbits/sec    2    305 KBytes
[  5]   4.00-5.00   sec   113 MBytes   947 Mbits/sec    2    308 KBytes
[  5]   5.00-6.00   sec   112 MBytes   938 Mbits/sec    2    303 KBytes
[  5]   6.00-7.00   sec   113 MBytes   944 Mbits/sec    3    305 KBytes
[  5]   7.00-8.00   sec   112 MBytes   943 Mbits/sec    4    305 KBytes
[  5]   8.00-9.00   sec   111 MBytes   934 Mbits/sec    3    305 KBytes
[  5]   9.00-10.00  sec   113 MBytes   944 Mbits/sec    3    303 KBytes
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  1.10 GBytes   943 Mbits/sec   19             sender
[  5]   0.00-10.04  sec  1.10 GBytes   938 Mbits/sec                  receiver

iperf Done.
root@nas:~# iperf3 -c 10.0.0.30 -i 1 -t 10 -R
Connecting to host 10.0.0.30, port 5201
Reverse mode, remote host 10.0.0.30 is sending
[  5] local 10.0.0.2 port 50018 connected to 10.0.0.30 port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec   100 MBytes   840 Mbits/sec
[  5]   1.00-2.00   sec   100 MBytes   840 Mbits/sec
[  5]   2.00-3.00   sec  98.7 MBytes   828 Mbits/sec
[  5]   3.00-4.00   sec  98.8 MBytes   829 Mbits/sec
[  5]   4.00-5.00   sec   100 MBytes   840 Mbits/sec
[  5]   5.00-6.00   sec  99.0 MBytes   830 Mbits/sec
[  5]   6.00-7.00   sec  98.7 MBytes   828 Mbits/sec
[  5]   7.00-8.00   sec   100 MBytes   839 Mbits/sec
[  5]   8.00-9.00   sec  99.1 MBytes   831 Mbits/sec
[  5]   9.00-10.00  sec  98.6 MBytes   827 Mbits/sec
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   995 MBytes   831 Mbits/sec    1             sender
[  5]   0.00-10.00  sec   993 MBytes   833 Mbits/sec                  receiver

iperf Done.
```
局域网表现还不是很明显，没换之前上下行700+/700+，换完 940/830，基本到顶了，这个速度经过了光猫和小米路由器    
外网差别挺大的，wget下载也好了，没换驱动之前经常才1M左右的速度 **很奇怪**，换完就能到网速上限了  
