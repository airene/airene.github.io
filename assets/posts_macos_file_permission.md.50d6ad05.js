import{o as n,c as a,d as s}from"./app.afa0f457.js";const p='{"title":"全新安装macOS系统，考回的文件权限变成777修复","description":"大版本升级喜欢全格之后升级，遇到的问题是文件系统权限就全变777了，从网上找到了解决办法","frontmatter":{"date":"2017-03-29","title":"全新安装macOS系统，考回的文件权限变成777修复","description":"大版本升级喜欢全格之后升级，遇到的问题是文件系统权限就全变777了，从网上找到了解决办法","tags":["macOS"]},"relativePath":"posts/macos_file_permission.md","lastUpdated":1625303833999}',t={},e=s('<h1 id="全新安装macos系统，考回备份文件权限变成777修复"><a class="header-anchor" href="#全新安装macos系统，考回备份文件权限变成777修复" aria-hidden="true">#</a> 全新安装macOS系统，考回备份文件权限变成777修复</h1><p>从macOS 10.11.6 U盘全新安装升级到 10.12.4(到第四版应该是没什么坑了吧);<br> 备份方式为用路由器与Time Machine全量备份45个G的内容+手动备份有用的个人文件到U盘;<br> 没什么特别的,就一个地方比较不好,复制出去的文件,在复制回来权限全变成了777了,网上找到命令解决;</p><div class="language-bash"><pre><code><span class="token function">find</span> <span class="token builtin class-name">.</span> -type d -exec <span class="token function">chmod</span> <span class="token number">755</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">find</span> <span class="token builtin class-name">.</span> -type d <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">chmod</span> <span class="token number">755</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">755</span> <span class="token variable"><span class="token variable">`</span><span class="token function">find</span> -type d<span class="token variable">`</span></span>\n<span class="token function">find</span> <span class="token builtin class-name">.</span> -type f -exec <span class="token function">chmod</span> <span class="token number">644</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">find</span> <span class="token builtin class-name">.</span> -type f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">chmod</span> <span class="token number">644</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">644</span> <span class="token variable"><span class="token variable">`</span><span class="token function">find</span> -type f<span class="token variable">`</span></span>\n</code></pre></div><p>文件是 644,文件夹是755 为新建文件或文件夹的默认权限.</p>',4);t.render=function(s,p,t,o,c,l){return n(),a("div",null,[e])};export default t;export{p as __pageData};
