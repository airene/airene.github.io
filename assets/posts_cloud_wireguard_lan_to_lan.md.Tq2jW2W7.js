import{_ as a,c as e,o,a4 as t}from"./chunks/framework.CZRz7fIf.js";const r="/assets/lan-to-lan.BX7P6wSo.png",g=JSON.parse('{"title":"云厂商不同region之间的wireguard LAN to LAN模式","description":"网上绝大部分教程都是openwrt组各种模式的网，其中也有lan to lan模式，云服务器的方式还是有些不太一样，尤其是正式环境","frontmatter":{"date":"2023-09-26T00:00:00.000Z","title":"云厂商不同region之间的wireguard LAN to LAN模式","tags":["wireguard"],"description":"网上绝大部分教程都是openwrt组各种模式的网，其中也有lan to lan模式，云服务器的方式还是有些不太一样，尤其是正式环境"},"headers":[],"relativePath":"posts/cloud_wireguard_lan_to_lan.md","filePath":"posts/cloud_wireguard_lan_to_lan.md"}'),i={name:"posts/cloud_wireguard_lan_to_lan.md"},n=t('<h1 id="云厂商不同region之间的wireguard-lan-to-lan模式" tabindex="-1">云厂商不同region之间的wireguard LAN to LAN模式 <a class="header-anchor" href="#云厂商不同region之间的wireguard-lan-to-lan模式" aria-label="Permalink to &quot;云厂商不同region之间的wireguard LAN to LAN模式&quot;">​</a></h1><h2 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to &quot;前提&quot;">​</a></h2><p>本文的环境和条件：</p><ul><li>有NAT网关作为出口流量</li><li>至少要有一个NAT要做公网端口映射，或者从LB有一个映射也可以，本文是NAT上映射</li></ul><h2 id="架构图" tabindex="-1">架构图 <a class="header-anchor" href="#架构图" aria-label="Permalink to &quot;架构图&quot;">​</a></h2><p><img src="'+r+'" alt="lan-to-lan"></p><h2 id="实操" tabindex="-1">实操 <a class="header-anchor" href="#实操" aria-label="Permalink to &quot;实操&quot;">​</a></h2><p>1、NAT开启端口映射（教程就开默认端口了，生产自己定），假设开在10.0.0.1/19这个VPC里，那就是DNAT <code>NAT:51820 -&gt; 10.0.0.2:51820</code><br> 2、路由表两个VPC都要增加：A: 10.0.128.0/19 下一跳 10.0.0.2；B: 10.0.0.0/19 下一跳 10.0.128.3<br> 3、allowedips，以10.255.255.1这个节点为例，peer的ip是10.255.255.2 allowedips应为: 10.255.255.1/32,10.0.128.0/19<br> 4、节点启动脚本有MASQUERADE的内容 <code>PostUp=iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT;iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</code><br> 5、<strong>作为wireguard的节点需要开机ip forward，也就是转发功能 <code>/etc/sysctl.conf</code>中的 <code>net.ipv4.ip_forward = 1</code></strong><br> 6、条件还是有些多的，以上都准备好，服务起来基本就通了</p>',8),l=[n];function d(s,_,c,p,u,A){return o(),e("div",null,l)}const w=a(i,[["render",d]]);export{g as __pageData,w as default};