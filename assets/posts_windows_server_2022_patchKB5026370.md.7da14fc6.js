import{_ as a,o as t,c as o,C as s,a as n,t as r,V as l}from"./chunks/framework.8fa89dcc.js";const m=JSON.parse('{"title":"Windows Server 2022在KB5026370更新修复了一个重要的体验问题","description":"这下不用每次手动添加，也不需要启动时候加脚本了","frontmatter":{"date":"2023-05-16T00:00:00.000Z","title":"Windows Server 2022在KB5026370更新修复了一个重要的体验问题","tags":["windows server"],"description":"这下不用每次手动添加，也不需要启动时候加脚本了"},"headers":[],"relativePath":"posts/windows_server_2022_patchKB5026370.md","filePath":"posts/windows_server_2022_patchKB5026370.md"}'),p={name:"posts/windows_server_2022_patchKB5026370.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),C=l('<p>以前重启系统之后，hyper-v的端口映射信息还在但是并不能正常工作，在KB5026370更新之后，现在没问题了，也可能是之前的补丁就修复了，我不知道，这次重启才发现。 之前网上还有教程教写一个bat文件在启动的时候添加，现在也不用了，Great.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">netsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">portproxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v4tov4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listenport=</span><span style="color:#F78C6C;">65</span><span style="color:#C3E88D;">xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listenaddress=</span><span style="color:#F78C6C;">221</span><span style="color:#C3E88D;">.xxx.xxx.246</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connectaddress=</span><span style="color:#F78C6C;">192.168</span><span style="color:#C3E88D;">.xxx.30</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connectport=</span><span style="color:#F78C6C;">3389</span></span></code></pre></div>',2);function _(e,d,y,h,D,A){return t(),o("div",null,[s("h1",c,[n(r(e.$frontmatter.title)+" ",1),i]),C])}const f=a(p,[["render",_]]);export{m as __pageData,f as default};