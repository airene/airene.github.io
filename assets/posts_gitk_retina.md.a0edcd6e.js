import{_ as t,o as a,c as e,V as s}from"./chunks/framework.4e8ee9d3.js";const g=JSON.parse('{"title":"解决macOS gitk字体retina display","description":"","frontmatter":{"date":"2016-09-26T00:00:00.000Z","title":"解决macOS gitk字体retina display","tags":["macOS"]},"headers":[],"relativePath":"posts/gitk_retina.md","filePath":"posts/gitk_retina.md"}'),i={name:"posts/gitk_retina.md"},r=s('<h1 id="解决macos-gitk字体retina-display" tabindex="-1">解决macOS gitk字体retina display <a class="header-anchor" href="#解决macos-gitk字体retina-display" aria-label="Permalink to &quot;解决macOS gitk字体retina display&quot;">​</a></h1><p>开启SIP;<br> 修改/System/Library/Frameworks/Tk.framework/Versions/Current/Resources/Wish.app/Contents/Info.plist文件;<br> 在最后增加</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;key&gt;NSHighResolutionCapable&lt;/key&gt;&lt;true/&gt;</span></span></code></pre></div><p>修改可能需要sudo 或者复制出来修改在覆盖进去都可;<br> 使修改生效 touch Wish.app 关闭SIP;</p>',4),o=[r];function n(p,c,l,d,_,m){return a(),e("div",null,o)}const h=t(i,[["render",n]]);export{g as __pageData,h as default};
