import{_ as i,G as a,c as h,J as t,a4 as k,o as n}from"./chunks/framework.CZRz7fIf.js";const c=JSON.parse('{"title":"全新安装macOS系统考回的文件权限变成777修复","description":"大版本升级喜欢全格之后升级，遇到的问题是文件系统权限就全变777了，从网上找到了解决办法","frontmatter":{"date":"2017-03-29T00:00:00.000Z","title":"全新安装macOS系统考回的文件权限变成777修复","description":"大版本升级喜欢全格之后升级，遇到的问题是文件系统权限就全变777了，从网上找到了解决办法","tags":["macOS"]},"headers":[],"relativePath":"posts/macos_file_permission.md","filePath":"posts/macos_file_permission.md"}'),p={name:"posts/macos_file_permission.md"},e=k('<h1 id="全新安装macos系统考回的文件权限变成777修复" tabindex="-1">全新安装macOS系统考回的文件权限变成777修复 <a class="header-anchor" href="#全新安装macos系统考回的文件权限变成777修复" aria-label="Permalink to &quot;全新安装macOS系统考回的文件权限变成777修复&quot;">​</a></h1><p>从macOS 10.11.6 U盘全新安装升级到 10.12.4(到第四版应该是没什么坑了吧);<br> 备份方式为用路由器与Time Machine全量备份45个G的内容+手动备份有用的个人文件到U盘;<br> 没什么特别的,就一个地方比较不好,复制出去的文件,在复制回来权限全变成了777了,网上找到命令解决;</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d`</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 644</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f`</span></span></code></pre></div><p>文件是 644,文件夹是755 为新建文件或文件夹的默认权限.</p>',4);function l(F,d,r,C,o,g){const s=a("Comment");return n(),h("div",null,[e,t(s)])}const m=i(p,[["render",l]]);export{c as __pageData,m as default};
