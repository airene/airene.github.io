import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.CZRz7fIf.js";const _=JSON.parse('{"title":"Windows Server 2022在KB5026370更新修复了一个重要的体验问题","description":"这下不用每次手动添加，也不需要启动时候加脚本了","frontmatter":{"date":"2023-05-16T00:00:00.000Z","title":"Windows Server 2022在KB5026370更新修复了一个重要的体验问题","tags":["windows server"],"description":"这下不用每次手动添加，也不需要启动时候加脚本了"},"headers":[],"relativePath":"posts/windows_server_2022_patchKB5026370.md","filePath":"posts/windows_server_2022_patchKB5026370.md"}'),t={name:"posts/windows_server_2022_patchKB5026370.md"},n=e('<h1 id="windows-server-2022在kb5026370更新修复了一个重要的体验问题" tabindex="-1">Windows Server 2022在KB5026370更新修复了一个重要的体验问题 <a class="header-anchor" href="#windows-server-2022在kb5026370更新修复了一个重要的体验问题" aria-label="Permalink to &quot;Windows Server 2022在KB5026370更新修复了一个重要的体验问题&quot;">​</a></h1><p>以前重启系统之后，hyper-v的端口映射信息还在但是并不能正常工作，在KB5026370更新之后，现在没问题了，也可能是之前的补丁就修复了，我不知道，这次重启才发现。 之前网上还有教程教写一个bat文件在启动的时候添加，现在也不用了，Great.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> portproxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v4tov4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listenport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> listenaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">221</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.xxx.xxx.246</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connectaddress=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">192.168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.xxx.30</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connectport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3389</span></span></code></pre></div><h2 id="_2022-07-20-更新累积7月更新上面的又不行了" tabindex="-1">2022-07-20 更新累积7月更新上面的又不行了 <a class="header-anchor" href="#_2022-07-20-更新累积7月更新上面的又不行了" aria-label="Permalink to &quot;2022-07-20 更新累积7月更新上面的又不行了&quot;">​</a></h2><p>需要删了映射，然后再重新建映射才行，更新重启，和主动重启了一次，验证都不行。。。</p>',5),r=[n];function h(p,l,d,o,k,F){return a(),i("div",null,r)}const B=s(t,[["render",h]]);export{_ as __pageData,B as default};
