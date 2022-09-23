import{_ as n,o,c as t,d as s,e as p,t as l,a as c,f as r,r as i}from"./app.165d2400.js";const u=JSON.parse('{"title":"\u5168\u65B0\u5B89\u88C5macOS\u7CFB\u7EDF\u8003\u56DE\u7684\u6587\u4EF6\u6743\u9650\u53D8\u6210777\u4FEE\u590D","description":"\u5927\u7248\u672C\u5347\u7EA7\u559C\u6B22\u5168\u683C\u4E4B\u540E\u5347\u7EA7\uFF0C\u9047\u5230\u7684\u95EE\u9898\u662F\u6587\u4EF6\u7CFB\u7EDF\u6743\u9650\u5C31\u5168\u53D8777\u4E86\uFF0C\u4ECE\u7F51\u4E0A\u627E\u5230\u4E86\u89E3\u51B3\u529E\u6CD5","frontmatter":{"date":"2017-03-29T00:00:00.000Z","title":"\u5168\u65B0\u5B89\u88C5macOS\u7CFB\u7EDF\u8003\u56DE\u7684\u6587\u4EF6\u6743\u9650\u53D8\u6210777\u4FEE\u590D","description":"\u5927\u7248\u672C\u5347\u7EA7\u559C\u6B22\u5168\u683C\u4E4B\u540E\u5347\u7EA7\uFF0C\u9047\u5230\u7684\u95EE\u9898\u662F\u6587\u4EF6\u7CFB\u7EDF\u6743\u9650\u5C31\u5168\u53D8777\u4E86\uFF0C\u4ECE\u7F51\u4E0A\u627E\u5230\u4E86\u89E3\u51B3\u529E\u6CD5","tags":["macOS"]},"headers":[],"relativePath":"posts/macos_file_permission.md"}'),d={name:"posts/macos_file_permission.md"},m={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=r('<p>\u4ECEmacOS 10.11.6 U\u76D8\u5168\u65B0\u5B89\u88C5\u5347\u7EA7\u5230 10.12.4(\u5230\u7B2C\u56DB\u7248\u5E94\u8BE5\u662F\u6CA1\u4EC0\u4E48\u5751\u4E86\u5427);<br> \u5907\u4EFD\u65B9\u5F0F\u4E3A\u7528\u8DEF\u7531\u5668\u4E0ETime Machine\u5168\u91CF\u5907\u4EFD45\u4E2AG\u7684\u5185\u5BB9+\u624B\u52A8\u5907\u4EFD\u6709\u7528\u7684\u4E2A\u4EBA\u6587\u4EF6\u5230U\u76D8;<br> \u6CA1\u4EC0\u4E48\u7279\u522B\u7684,\u5C31\u4E00\u4E2A\u5730\u65B9\u6BD4\u8F83\u4E0D\u597D,\u590D\u5236\u51FA\u53BB\u7684\u6587\u4EF6,\u5728\u590D\u5236\u56DE\u6765\u6743\u9650\u5168\u53D8\u6210\u4E86777\u4E86,\u7F51\u4E0A\u627E\u5230\u547D\u4EE4\u89E3\u51B3;</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">find </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> -type d -exec chmod 755{} \\; </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> find </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> -type d </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> xargs chmod 755 </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> chmod 755 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">find -type d</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#A6ACCD;">find </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> -type f -exec chmod 644 {} \\; </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> find </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> -type f </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> xargs chmod 644 </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> chmod 644 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">find -type f</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"></span></code></pre></div><p>\u6587\u4EF6\u662F 644,\u6587\u4EF6\u5939\u662F755 \u4E3A\u65B0\u5EFA\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u7684\u9ED8\u8BA4\u6743\u9650.</p>',3);function _(a,A,C,F,f,h){const e=i("Comment");return o(),t("div",null,[s("h1",m,[p(l(a.$frontmatter.title)+" ",1),D]),y,c(e)])}const T=n(d,[["render",_]]);export{u as __pageData,T as default};
