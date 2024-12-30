import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.B84USXyd.js";const d=JSON.parse('{"title":"macOS下实现wireguard的access to lan和ddns都变成开机启动的服务","description":"有了mac mini m4，小米主机2022的1240p已经不香了，功耗还凑合，不是很大，但是风扇总是会时不时的转一会，风扇声音还挺大","frontmatter":{"date":"2024-12-30T00:00:00.000Z","title":"macOS下实现wireguard的access to lan和ddns都变成开机启动的服务","category":"macOS","tags":["macOS","wireguard","ddns"],"description":"有了mac mini m4，小米主机2022的1240p已经不香了，功耗还凑合，不是很大，但是风扇总是会时不时的转一会，风扇声音还挺大"},"headers":[],"relativePath":"posts/macOS_wireguard_server_dnspod.md","filePath":"posts/macOS_wireguard_server_dnspod.md"}'),h={name:"posts/macOS_wireguard_server_dnspod.md"};function l(k,s,p,e,E,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="macos下实现wireguard的access-to-lan和ddns都变成开机启动的服务" tabindex="-1">macOS下实现wireguard的access to lan和ddns都变成开机启动的服务 <a class="header-anchor" href="#macos下实现wireguard的access-to-lan和ddns都变成开机启动的服务" aria-label="Permalink to &quot;macOS下实现wireguard的access to lan和ddns都变成开机启动的服务&quot;">​</a></h1><h2 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to &quot;前提&quot;">​</a></h2><p>小米迷你主机 ≈ intel nuc 12，一开始装的unraid，后来装的fnOS, 主要就是fnOS的开放性，很容易能安装wg和ddns常驻。</p><h2 id="问题和收益" tabindex="-1">问题和收益 <a class="header-anchor" href="#问题和收益" aria-label="Permalink to &quot;问题和收益&quot;">​</a></h2><p>有了mac mini m4 万兆版，小米nuc就不香了，再加上macOS休眠调了很多参数之后还是1个小时深度唤醒一次（需要留着womp能局域网唤醒） 干脆直接让mac mini一直开机，小米nuc按需开，需要解决的问题或者收益：</p><ul><li>让wireguard的access to lan（&#39;server&#39;模式 - 其实没有server模式，只是变成稳定peer且能连到peer下的局域网）能在mini使用，且开机启动，且能同时连接多个wg，app store的app不能同时启用多个</li><li>让ddns作为开机启动服务</li><li>让小米nuc按需开机，减少功耗，减少噪音</li></ul><h2 id="具体办法" tabindex="-1">具体办法 <a class="header-anchor" href="#具体办法" aria-label="Permalink to &quot;具体办法&quot;">​</a></h2><h3 id="wireguard开机启动-和-access-to-lan模式" tabindex="-1">wireguard开机启动 和 access to lan模式 <a class="header-anchor" href="#wireguard开机启动-和-access-to-lan模式" aria-label="Permalink to &quot;wireguard开机启动 和 access to lan模式&quot;">​</a></h3><p>如果只是单纯的一个peer的话，非常方便，不涉及防火墙的问题。在能转发和NAT上好不容找到一个高质量的文章。<br> 想多开wg 就 <code>brew install wireguard-tools</code> 正常用即可，重点来了，让macOS能转发和NAT的方法（去掉了ipv6，参考文档里有）：</p><p>1、准备postup脚本</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/sbin/sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net.inet.ip.forwarding=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/var/run/wireguard</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 700</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/var/run/wireguard</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#最重要的就是这里是wireguard的ip段</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;nat on en0 from 10.0.3.0/24 to any -&gt; (en0)&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> \\</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pfctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple/wireguard_ipv4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Ef</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Token&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s%Token : \\(.*\\)%\\1%&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IPV4_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt\`</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Added PF IPv4 NAT traffic routing rule with token: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IPV4_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;\`\`\`</span></span></code></pre></div><p>2、postdown脚本</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /usr/sbin/sysctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net.inet.ip.forwarding=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANCHOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.apple/wireguard_ipv4&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pfctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${ANCHOR} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Removed IPv4 rule with anchor: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ANCHOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IPV4_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pfctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${IPV4_TOKEN} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Removed reference for token: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IPV4_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Deleted IPv4 token file&quot;</span></span></code></pre></div><p>3、正常的wireguard配置中增加两条,开启和关闭时候执行动作</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PostUp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/wireguard/postup.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PostDown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/wireguard/postdown.sh</span></span></code></pre></div><p>4、开机启动脚本和设置步骤<br> 脚本：<br> 路径 <code>/Library/LaunchDaemons/</code> 这个是不需要你的常用用户登录，直接开机就有</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Label&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.wireguard.server&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ProgramArguments&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ProgramArguments&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/bin/wg-quick&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;up&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/etc/wireguard/home.conf&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;KeepAlive&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;RunAtLoad&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;StandardErrorPath&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/var/log/wireguard.err&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;EnvironmentVariables&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;PATH&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/sbin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>5、修改权限和启动</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root:wheel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/LaunchDaemons/com.wireguard.server.plist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> launchctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system/com.wireguard.server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> launchctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bootstrap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/LaunchDaemons/com.wireguard.server.plist</span></span></code></pre></div><p>最终就设置好了</p><p>另外自己实现的ddns的开机启动脚本的plist为：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DOCTYPE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Label&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.dnspod.server&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ProgramArguments&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/Users/airene/system/dnspod&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;-c&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/Users/airene/system/.dnspod_go_config.yaml&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;KeepAlive&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;RunAtLoad&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;StandardErrorPath&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/var/log/dnspod.err&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;EnvironmentVariables&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;PATH&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;/opt/homebrew/sbin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://barrowclift.me/articles/wireguard-server-on-macos" target="_blank" rel="noreferrer">https://barrowclift.me/articles/wireguard-server-on-macos</a></p>`,24)]))}const y=i(h,[["render",l]]);export{d as __pageData,y as default};
