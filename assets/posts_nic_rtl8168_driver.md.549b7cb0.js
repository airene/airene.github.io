import{_ as a,o as e,c as t,d as s,e as l,t as p,f as c}from"./app.ae967307.js";const M=JSON.parse('{"title":"\u89E3\u51B3NUC11\u963F\u65AF\u52A0\u7279\u5CE1\u8C37 ubuntu22.04 RTL8168\u7F51\u5361\u9A71\u52A8\u95EE\u9898","description":"\u5373\u4F7F\u5230ubuntu\u768422\u7248\u672C\uFF0C\u4E5F\u6CA1\u6709\u6B63\u786E\u5B89\u88C5RTL\u9A71\u52A8\uFF0Cunraid\u7684\u673A\u5668\u4E5F\u6709\u7C7B\u4F3C\u7684\u95EE\u9898\uFF0C\u63D2\u8D44\u6599\u597D\u50CF\u662F\u8783\u87F9\u5361\u7684\u5C3F\u6027\uFF0C\u6CA1\u6709\u79EF\u6781\u5F80\u5185\u6838\u96C6\u6210\uFF0C\u6240\u4EE5\u5185\u6838\u91CC\u53EA\u6709\u4E00\u4E2A\u80FD\u7528\u4E0D\u597D\u7528\u7684r8169\u9A71\u52A8\uFF0C\u8868\u73B0\u5C31\u662F\u7F51\u901F\u5404\u79CD\u4E0A\u4E0D\u53BB","frontmatter":{"date":"2022-10-29T00:00:00.000Z","title":"\u89E3\u51B3NUC11\u963F\u65AF\u52A0\u7279\u5CE1\u8C37 ubuntu22.04 RTL8168\u7F51\u5361\u9A71\u52A8\u95EE\u9898","tags":["nuc11","RTL8168"],"description":"\u5373\u4F7F\u5230ubuntu\u768422\u7248\u672C\uFF0C\u4E5F\u6CA1\u6709\u6B63\u786E\u5B89\u88C5RTL\u9A71\u52A8\uFF0Cunraid\u7684\u673A\u5668\u4E5F\u6709\u7C7B\u4F3C\u7684\u95EE\u9898\uFF0C\u63D2\u8D44\u6599\u597D\u50CF\u662F\u8783\u87F9\u5361\u7684\u5C3F\u6027\uFF0C\u6CA1\u6709\u79EF\u6781\u5F80\u5185\u6838\u96C6\u6210\uFF0C\u6240\u4EE5\u5185\u6838\u91CC\u53EA\u6709\u4E00\u4E2A\u80FD\u7528\u4E0D\u597D\u7528\u7684r8169\u9A71\u52A8\uFF0C\u8868\u73B0\u5C31\u662F\u7F51\u901F\u5404\u79CD\u4E0A\u4E0D\u53BB"},"headers":[],"relativePath":"posts/nic_rtl8168_driver.md"}'),o={name:"posts/nic_rtl8168_driver.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),C=c(`<p>\u7F51\u4E0A\u6709\u4E24\u79CD\u89E3\u51B3\u529E\u6CD5\uFF0C\u4E00\u4E2A\u662F\u4ECERTL\u4E0B\u8F7D\u6700\u65B0\u7684\u9A71\u52A8\u81EA\u5DF1\u7F16\u8BD1\uFF0C\u7136\u540E\u52A0\u8F7D\u4F7F\u7528\uFF0C\u6BD4\u8F83\u7E41\u7410\uFF0C\u6B65\u9AA4\u6BD4\u8F83\u591A\uFF0C\u6211\u6CA1\u5C1D\u8BD5<br> \u53EF\u4EE5\u53C2\u8003\uFF1A<a href="https://askubuntu.com/questions/1327697/ubuntu-20-04-ethernet-r8168" target="_blank" rel="noreferrer">https://askubuntu.com/questions/1327697/ubuntu-20-04-ethernet-r8168</a></p><p>\u8FD8\u4E00\u4E2A\u65B9\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B89\u88C5\u4E00\u4E2A\u5305\uFF0C\u8001\u9A71\u52A8\u76F4\u63A5\u52A0\u5230\u9ED1\u540D\u5355\uFF0C\u91CD\u542F\u5373\u53EF<br> \u539F\u6587\u5728\u8FD9\u91CC\uFF1A<a href="https://realtechtalk.com/Ubuntu_Debian_Linux_Mint_r8169_r8168_Network_Driver_Problem_and_Solution-2253-articles" target="_blank" rel="noreferrer">https://realtechtalk.com/Ubuntu_Debian_Linux_Mint_r8169_r8168_Network_Driver_Problem_and_Solution-2253-articles</a></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install r8168-dkms</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blacklist r8169</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /etc/modprobe.d/blacklist-r8169.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">reboot</span></span>
<span class="line"></span></code></pre></div><p>\u5B9E\u9645\u6548\u679C</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">root@nas:~# iperf3 -c 10.0.0.30 -i 1 -t 10</span></span>
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
<span class="line"><span style="color:#A6ACCD;">iperf Done.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C40\u57DF\u7F51\u8868\u73B0\u8FD8\u4E0D\u662F\u5F88\u660E\u663E\uFF0C\u6CA1\u6362\u4E4B\u524D\u4E0A\u4E0B\u884C700+/700+\uFF0C\u6362\u5B8C 940/830\uFF0C\u57FA\u672C\u5230\u9876\u4E86\uFF0C\u8FD9\u4E2A\u901F\u5EA6\u7ECF\u8FC7\u4E86\u5149\u732B\u548C\u5C0F\u7C73\u8DEF\u7531\u5668<br> \u5916\u7F51\u5DEE\u522B\u633A\u5927\u7684\uFF0Cwget\u4E0B\u8F7D\u4E5F\u597D\u4E86\uFF0C\u6CA1\u6362\u9A71\u52A8\u4E4B\u524D\u7ECF\u5E38\u624D1M\u5DE6\u53F3\u7684\u901F\u5EA6 <strong>\u5F88\u5947\u602A</strong>\uFF0C\u6362\u5B8C\u5C31\u80FD\u5230\u7F51\u901F\u4E0A\u9650\u4E86</p>`,6);function A(n,y,D,_,b,u){return e(),t("div",null,[s("h1",r,[l(p(n.$frontmatter.title)+" ",1),i]),C])}const B=a(o,[["render",A]]);export{M as __pageData,B as default};
