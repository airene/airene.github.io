import{_ as n,o as l,c as p,d as s,e as o,t as e,f as t}from"./app.fc5e7cd3.js";const F=JSON.parse('{"title":"Unraid \u5B9E\u73B0\u80FD\u4EE3\u7406\u7684\u65F6\u95F4\u8DEF\u7EBF\u56FE","description":"\u5BF9\u4E8E\u6709\\"\u6D01\u7656\\"\uFF0C\u6216\u8005\u5BB6\u91CC\\"\u6761\u4EF6\\"\u4E0D\u597D\u7684\uFF0C\u6BD4\u5982\u6CA1\u6709\u65C1\u8DEF\u7531\u6216\u8005\u4E3B\u8DEF\u7531\u65E0\u6CD5\u5F00\u9B54\u6CD5\u7684\u4EBA\u53EF\u4EE5\u770B\u4E00\u4E0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u957F\u65F6\u95F4\u7684\u6709\u70B9\u50CF\u6D41\u6C34\u8D26\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u4FDD\u59C6\u7EA7\u6559\u7A0B","frontmatter":{"date":"2022-10-22T00:00:00.000Z","title":"Unraid \u5B9E\u73B0\u80FD\u4EE3\u7406\u7684\u65F6\u95F4\u8DEF\u7EBF\u56FE","tags":["unraid"],"description":"\u5BF9\u4E8E\u6709\\"\u6D01\u7656\\"\uFF0C\u6216\u8005\u5BB6\u91CC\\"\u6761\u4EF6\\"\u4E0D\u597D\u7684\uFF0C\u6BD4\u5982\u6CA1\u6709\u65C1\u8DEF\u7531\u6216\u8005\u4E3B\u8DEF\u7531\u65E0\u6CD5\u5F00\u9B54\u6CD5\u7684\u4EBA\u53EF\u4EE5\u770B\u4E00\u4E0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u957F\u65F6\u95F4\u7684\u6709\u70B9\u50CF\u6D41\u6C34\u8D26\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u4FDD\u59C6\u7EA7\u6559\u7A0B"},"headers":[{"level":2,"title":"\u7B2C\u4E00\u9636\u6BB5\uFF1A\u521A\u5F00\u59CB\u73A9 unraid \u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0","slug":"\u7B2C\u4E00\u9636\u6BB5-\u521A\u5F00\u59CB\u73A9-unraid-\u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0","link":"#\u7B2C\u4E00\u9636\u6BB5-\u521A\u5F00\u59CB\u73A9-unraid-\u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0","children":[]},{"level":2,"title":"\u7B2C\u4E8C\u9636\u6BB5\uFF1A\u5347\u7EA7\u52306.11.x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86","slug":"\u7B2C\u4E8C\u9636\u6BB5-\u5347\u7EA7\u52306-11-x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86","link":"#\u7B2C\u4E8C\u9636\u6BB5-\u5347\u7EA7\u52306-11-x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86","children":[]},{"level":2,"title":"\u5907\u4EFD\u4E00\u4E0B go file \u7684\u5185\u5BB9","slug":"\u5907\u4EFD\u4E00\u4E0B-go-file-\u7684\u5185\u5BB9","link":"#\u5907\u4EFD\u4E00\u4E0B-go-file-\u7684\u5185\u5BB9","children":[]}],"relativePath":"posts/unraid_proxy_map.md"}'),r={name:"posts/unraid_proxy_map.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=t(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>1\u3001\u4EE5\u4E0B\u6240\u6709\u573A\u666F\u90FD\u662F\u4E3B\u673A\u4E3A\u5355\u7F51\u5361\u573A\u666F<br> 2\u3001CA = community.applications</p></div><h2 id="\u7B2C\u4E00\u9636\u6BB5-\u521A\u5F00\u59CB\u73A9-unraid-\u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0" tabindex="-1">\u7B2C\u4E00\u9636\u6BB5\uFF1A\u521A\u5F00\u59CB\u73A9 unraid \u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0 <a class="header-anchor" href="#\u7B2C\u4E00\u9636\u6BB5-\u521A\u5F00\u59CB\u73A9-unraid-\u53D1\u73B0\u7CFB\u7EDF\u548C\u63D2\u4EF6\u90FD\u65E0\u6CD5\u66F4\u65B0" aria-hidden="true">#</a></h2><p><strong>\u56E0\u4E3A\u540C\u65F6\u4E5F\u662F\u5728\u6B63\u5F0F\u5B66\u4E60 docker</strong>\uFF0C\u6240\u4EE5\u4E0D\u60F3\u7528 vm openwrt \u7684\u65B9\u5F0F\u5B89\u88C5\u5C0F\u732B\u54AA\uFF0C\u5C1D\u8BD5\u65B9\u6CD5\uFF1A</p><ul><li>unraid \u81EA\u8EAB\u5B89\u88C5\u5C0F\u732B\u54AA\uFF0C\u624B\u52A8\u5728\u547D\u4EE4\u884C export\uFF0C \u7EC8\u7AEF\u80FD proxy\uFF0C\u66F4\u65B0\u7CFB\u7EDF\u548CCA\u4F9D\u7136\u4E0D\u884C</li><li>docker \u5B89\u88C5 openwrt \uFF0C\u56E0\u4E3A\u5728 unraid \u7684\u7F51\u5361\u662F\u5426 bond \u548C bridge \u548C docker \u7684 macvlan \u4E0A\u6726\u6726\u80E7\u80E7\uFF0C\u82B1\u4E86\u5F88\u957F\u65F6\u95F4\u624D\u5728\u4E0D\u6865\u63A5\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7 docker openwrt \u80FD\u6B63\u5E38\u66F4\u65B0\u3002</li><li>\u968F\u5373\u53D1\u73B0\uFF0Copenwrt \u53EF\u4EE5\uFF0C\u90A3\u76F4\u63A5\u5B89\u88C5\u4E00\u4E2A docker \u7248\u7684 \u5C0F\u732B\u54AA \u4E5F\u53EF\u4EE5\uFF0C\u5C1D\u8BD5\u53D1\u73B0ok\uFF0C\u6700\u7EC8\u5C31\u662F\u8FD9\u4E2A\u65B9\u6848\uFF0C\u5B8C\u5168\u9760\u81EA\u8EAB\u80FD\u529B\u4E0D\u4F9D\u8D56\u5916\u90E8\uFF0C\u6EE1\u610F</li></ul><p>\u6838\u5FC3\u5B9E\u73B0\u6216\u8005\u539F\u7406\u5C31\u662F\uFF1A</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># /boot/config/go</span></span>
<span class="line"><span style="color:#A6ACCD;">http_proxy=http://192.168.1.2:7890 https_proxy=http://192.168.1.2:7890 /usr/local/sbin/emhttp </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u53E5</p><p>\u5176\u5B9E\u8FD8\u6709\u4E00\u4E2A\u53D8\u79CD\u5B9E\u73B0\uFF0C\u6BD4\u5982\u5C40\u57DF\u7F51\u6709\u4E00\u4E2A\u957F\u5F00\u7684\u7269\u7406windows\uFF0C\u90A3\u8FD9\u4E2Awin\u5728\u5C0F\u732B\u54AA\uFF08\u5141\u8BB8\u5C40\u57DF\u7F51\uFF09\u5F00\u4E86\u4E4B\u540E\u901A\u8FC7\u5207\u6362\u76F4\u8FDE\u8FD8\u662F\u4EE3\u7406\u65B9\u5F0F\u8FBE\u5230\u76EE\u7684\uFF0C\u4E5F\u80FD\u63A5\u53D7\uFF0C\u53EA\u662F\u4E0D\u5728\u672C\u673A\u4E5F\u8FD8\u662F\u6709\u70B9\u7455\u75B5\u800C\u5DF2\u3002</p><h2 id="\u7B2C\u4E8C\u9636\u6BB5-\u5347\u7EA7\u52306-11-x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86" tabindex="-1">\u7B2C\u4E8C\u9636\u6BB5\uFF1A\u5347\u7EA7\u52306.11.x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86 <a class="header-anchor" href="#\u7B2C\u4E8C\u9636\u6BB5-\u5347\u7EA7\u52306-11-x\u4E4B\u540E\u53D1\u73B0\u8FD9\u79CD\u65B9\u5F0F\u65E0\u6CD5\u6B63\u5E38\u66F4\u65B0\u4E86" aria-hidden="true">#</a></h2><p>\u95EE\u4E86\u5927\u4F6C(\u5927\u4F6C\u90FD\u662F\u4E0A\u5C42\u6709\u4E3B\u8DEF\u7531\u5E76\u652F\u6301\u9B54\u6CD5\u6216\u8005\u65C1\u8DEF\u7531)\uFF0C\u5B98\u65B9\u8BBA\u575B\uFF08\u65E0\u4EBA\u56DE\uFF09\uFF0C\u5D4C\u5165\u53CD\u9988\u6E20\u9053\uFF08balabala\u65E0\u89E3\uFF09\u90FD\u8BD5\u4E86\u4E00\u4E0B\uFF0C\u6CA1\u6709\u4E00\u4E2A\u7ED9\u51FA\u76F4\u63A5\u7B54\u6848\u7684\u3002</p><p><a href="https://post.smzdm.com/p/all247de/" target="_blank" rel="noreferrer">https://post.smzdm.com/p/all247de/</a> \u8FD9\u7BC7\u6587\u7AE0\u5199\u7684\u6BD4\u8F83\u5168\uFF0C\u65B9\u65B9\u9762\u9762\u90FD\u6709\uFF0C\u603B\u7ED3\u4E00\u4E0B\uFF0C\u7ECF\u8FC7\u5927\u4F53\u6D4B\u8BD5\u548C\u89C2\u5BDF\uFF08\u5E94\u8BE5\u5B9E\u9645\u5C31\u662F\u4E0B\u9762\u7684\u7ED3\u8BBA\uFF09\uFF1A</p><ul><li>go file \u7684 \u4E24\u4E2A export \u4F1A\u5F71\u54CD docker pull \u8FD9\u79CD\u64CD\u4F5C\u548C\u8BA4\u8BC6&quot;\u73AF\u5883\u53D8\u91CF&quot;\u7684\u7A0B\u5E8F</li><li>go file \u5199\u5728 emhttp \u524D\u9762\u7684\u53EF\u80FD\u662F 6.10.x \u751F\u6548\uFF08<strong>\u61D2\uFF0C\u6CA1\u6709\u56DE\u9000\u7248\u672C\u6D4B\u8BD5</strong>\uFF09\uFF0C\u5230 6.11.x \u4E0D\u597D\u7528\u4E86</li><li>proxy.cfg \u6587\u4EF6\u786E\u8BA4\u53EA\u5F71\u54CD CA \u9875\u9762\u672C\u8EAB\u7684\u52A0\u8F7D\uFF0C\u548C\u4E0B\u8F7D\u91CC\u9762\u7684\u5404\u79CD\u5185\u5BB9\u6CA1\u5173\u7CFB\uFF0C\u4E0B\u8F7D\u5185\u5BB9\u662F\u9760 unraid <code>\u81EA\u8EAB\u7684</code> dynamix.plugin.manager\u6765\u7BA1\u7406\u7684\uFF0C\u7EAF\u5B98\u65B9\uFF0C\u81F3\u5C11\u4E0D\u5728 CA \u7684\u5305\u91CC</li></ul><p>\u7ECF\u8FC7\u5228\u7956\u575F\u4E4B\u540E\u53D1\u73B0 CA \u5185\u4E0B\u8F7D\u5185\u5BB9\u5B9E\u9645\u65B9\u6CD5\u662F\uFF1A</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// /usr/local/emhttp/plugins/dynamix.plugin.manager/scripts/plugin \u8FD9\u4E2A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">popen</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wget --compression=auto --no-cache --progress=dot --retry-connrefused --timeout=30 --tries=5 --waitretry=5 -O </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">url</span><span style="color:#C3E88D;"> 2&gt;&amp;1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...}</span></span>
<span class="line"></span></code></pre></div><p>\u5F97\u77E5\u7528\u7684 wget \u5C31\u597D\u529E\u4E86\uFF0C\u76F4\u63A5\u5728 /root \u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># /root/.wgetrc</span></span>
<span class="line"><span style="color:#A6ACCD;">use_proxy=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">http_proxy=http://10.0.0.2:7890</span></span>
<span class="line"><span style="color:#A6ACCD;">https_proxy=http://10.0.0.2:7890</span></span>
<span class="line"><span style="color:#A6ACCD;">wait=10</span></span>
<span class="line"></span></code></pre></div><p><strong>\u91CD\u542F\u90FD\u4E0D\u7528\u76F4\u63A5\u751F\u6548\uFF01\uFF01\uFF01</strong></p><p>\u5230\u76EE\u524D\u8FD8\u6CA1\u6709\u6D4B\u8BD5\u7CFB\u7EDF\u66F4\u65B0\uFF08\u4E0B\u6B21\u6709\u7CFB\u7EDF\u66F4\u65B0\u7684\u65F6\u5019\u6D4B\u8BD5\uFF09\uFF0C\u5228\u7956\u575F\u65F6\u5019\u53D1\u73B0\u8FD8\u6709\u5F88\u591A curl \u6CA1\u8D70 proxy \u914D\u7F6E\uFF0C\u4E0D\u77E5\u9053\u5F71\u54CD\u4EC0\u4E48</p><h2 id="\u5907\u4EFD\u4E00\u4E0B-go-file-\u7684\u5185\u5BB9" tabindex="-1">\u5907\u4EFD\u4E00\u4E0B go file \u7684\u5185\u5BB9 <a class="header-anchor" href="#\u5907\u4EFD\u4E00\u4E0B-go-file-\u7684\u5185\u5BB9" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">/root/.bash_profile </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"><span style="color:#C3E88D;">alias ll=&quot;ls -lh&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">alias l=&quot;ls -lah&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">export TIME_STYLE=long-iso</span></span>
<span class="line"><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">/root/.wgetrc </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"><span style="color:#C3E88D;">use_proxy=yes</span></span>
<span class="line"><span style="color:#C3E88D;">http_proxy=http://10.0.0.2:7890</span></span>
<span class="line"><span style="color:#C3E88D;">https_proxy=http://10.0.0.2:7890</span></span>
<span class="line"><span style="color:#C3E88D;">wait=10</span></span>
<span class="line"><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">/etc/sysctl.conf </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"><span style="color:#C3E88D;">net.ipv6.conf.all.disable_ipv6 = 1</span></span>
<span class="line"><span style="color:#89DDFF;">__EOF__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/sysctl -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ip link add myvlan-shim link br0 </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> macvlan  mode bridge</span></span>
<span class="line"><span style="color:#A6ACCD;">ip addr add 10.0.0.63/32 dev myvlan-shim</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> dev myvlan-shim address 8a:b1:0f:00:50:64</span></span>
<span class="line"><span style="color:#A6ACCD;">ip link </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> myvlan-shim up</span></span>
<span class="line"><span style="color:#A6ACCD;">ip route add 10.0.0.32/27 dev myvlan-shim</span></span>
<span class="line"></span></code></pre></div><p>\u76EE\u524D\u53EA\u6709\u4E00\u7EA7\u5B50\u7F51\uFF08\u4E5F\u4E0D\u9700\u8981\u4E8C\u7EA7\uFF09\uFF1A</p><ul><li>2 ~ 31 \u9884\u7559\u7ED9\u865A\u62DF\u673A\u6216\u8005\u5176\u4ED6\u8BBE\u5907</li><li>32 ~ 63 \u662F docker macvlan\u7F51\u6BB5\uFF0C\u5176\u4E2D63\u662F\u5BBF\u4E3B\u8BBF\u95EE docker macvlan \u7684<strong>hack</strong>\u7684\u53E6\u4E00\u4E2Amacvlan</li><li>65 ~ 230 ap\u6C60</li><li>231 ~ 253 \u9884\u7559</li></ul>`,22);function y(a,D,C,h,u,A){return l(),p("div",null,[s("h1",c,[o(e(a.$frontmatter.title)+" ",1),i]),d])}const g=n(r,[["render",y]]);export{F as __pageData,g as default};