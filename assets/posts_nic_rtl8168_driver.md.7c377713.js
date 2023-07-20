import{_ as a,o as e,c as t,k as s,a as l,t as p,V as o}from"./chunks/framework.53b228be.js";const M=JSON.parse('{"title":"解决NUC11阿斯加特峡谷 ubuntu22.04 RTL8168网卡驱动问题","description":"即使到ubuntu的22版本，也没有正确安装RTL驱动，unraid的机器也有类似的问题，插资料好像是螃蟹卡的尿性，没有积极往内核集成，所以内核里只有一个能用不好用的r8169驱动，表现就是网速各种上不去","frontmatter":{"date":"2022-10-29T00:00:00.000Z","title":"解决NUC11阿斯加特峡谷 ubuntu22.04 RTL8168网卡驱动问题","tags":["nuc11","RTL8168"],"description":"即使到ubuntu的22版本，也没有正确安装RTL驱动，unraid的机器也有类似的问题，插资料好像是螃蟹卡的尿性，没有积极往内核集成，所以内核里只有一个能用不好用的r8169驱动，表现就是网速各种上不去"},"headers":[],"relativePath":"posts/nic_rtl8168_driver.md","filePath":"posts/nic_rtl8168_driver.md"}'),c={name:"posts/nic_rtl8168_driver.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),C=o(`<p>网上有两种解决办法，一个是从RTL下载最新的驱动自己编译，然后加载使用，比较繁琐，步骤比较多，我没尝试<br> 可以参考：<a href="https://askubuntu.com/questions/1327697/ubuntu-20-04-ethernet-r8168" target="_blank" rel="noreferrer">https://askubuntu.com/questions/1327697/ubuntu-20-04-ethernet-r8168</a></p><p>还一个方法比较简单，安装一个包，老驱动直接加到黑名单，重启即可<br> 原文在这里：<a href="https://realtechtalk.com/Ubuntu_Debian_Linux_Mint_r8169_r8168_Network_Driver_Problem_and_Solution-2253-articles" target="_blank" rel="noreferrer">https://realtechtalk.com/Ubuntu_Debian_Linux_Mint_r8169_r8168_Network_Driver_Problem_and_Solution-2253-articles</a></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">r8168-dkms</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blacklist r8169</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/modprobe.d/blacklist-r8169.conf</span></span>
<span class="line"><span style="color:#FFCB6B;">reboot</span></span></code></pre></div><p>实际效果</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">root@nas:~# iperf3 -c 10.0.0.30 -i 1 -t 10</span></span>
<span class="line"><span style="color:#A6ACCD;">Connecting to host 10.0.0.30, port 5201</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5] local 10.0.0.2 port 59792 connected to 10.0.0.30 port 5201</span></span>
<span class="line"><span style="color:#A6ACCD;">[ ID] Interval           Transfer     Bitrate         Retr  Cwnd</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-1.00   sec   115 MBytes   961 Mbits/sec    0    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   1.00-2.00   sec   112 MBytes   940 Mbits/sec    0    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   2.00-3.00   sec   112 MBytes   942 Mbits/sec    0    308 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   3.00-4.00   sec   112 MBytes   937 Mbits/sec    2    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   4.00-5.00   sec   113 MBytes   947 Mbits/sec    2    308 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   5.00-6.00   sec   112 MBytes   938 Mbits/sec    2    303 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   6.00-7.00   sec   113 MBytes   944 Mbits/sec    3    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   7.00-8.00   sec   112 MBytes   943 Mbits/sec    4    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   8.00-9.00   sec   111 MBytes   934 Mbits/sec    3    305 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   9.00-10.00  sec   113 MBytes   944 Mbits/sec    3    303 KBytes</span></span>
<span class="line"><span style="color:#A6ACCD;">- - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span style="color:#A6ACCD;">[ ID] Interval           Transfer     Bitrate         Retr</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-10.00  sec  1.10 GBytes   943 Mbits/sec   19             sender</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-10.04  sec  1.10 GBytes   938 Mbits/sec                  receiver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">iperf Done.</span></span>
<span class="line"><span style="color:#A6ACCD;">root@nas:~# iperf3 -c 10.0.0.30 -i 1 -t 10 -R</span></span>
<span class="line"><span style="color:#A6ACCD;">Connecting to host 10.0.0.30, port 5201</span></span>
<span class="line"><span style="color:#A6ACCD;">Reverse mode, remote host 10.0.0.30 is sending</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5] local 10.0.0.2 port 50018 connected to 10.0.0.30 port 5201</span></span>
<span class="line"><span style="color:#A6ACCD;">[ ID] Interval           Transfer     Bitrate</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-1.00   sec   100 MBytes   840 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   1.00-2.00   sec   100 MBytes   840 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   2.00-3.00   sec  98.7 MBytes   828 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   3.00-4.00   sec  98.8 MBytes   829 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   4.00-5.00   sec   100 MBytes   840 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   5.00-6.00   sec  99.0 MBytes   830 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   6.00-7.00   sec  98.7 MBytes   828 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   7.00-8.00   sec   100 MBytes   839 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   8.00-9.00   sec  99.1 MBytes   831 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   9.00-10.00  sec  98.6 MBytes   827 Mbits/sec</span></span>
<span class="line"><span style="color:#A6ACCD;">- - - - - - - - - - - - - - - - - - - - - - - - -</span></span>
<span class="line"><span style="color:#A6ACCD;">[ ID] Interval           Transfer     Bitrate         Retr</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-10.04  sec   995 MBytes   831 Mbits/sec    1             sender</span></span>
<span class="line"><span style="color:#A6ACCD;">[  5]   0.00-10.00  sec   993 MBytes   833 Mbits/sec                  receiver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">iperf Done.</span></span></code></pre></div><p>局域网表现还不是很明显，没换之前上下行700+/700+，换完 940/830，基本到顶了，这个速度经过了光猫和小米路由器<br> 外网差别挺大的，wget下载也好了，没换驱动之前经常才1M左右的速度 <strong>很奇怪</strong>，换完就能到网速上限了</p>`,6);function A(n,y,D,_,b,u){return e(),t("div",null,[s("h1",r,[l(p(n.$frontmatter.title)+" ",1),i]),C])}const B=a(c,[["render",A]]);export{M as __pageData,B as default};
