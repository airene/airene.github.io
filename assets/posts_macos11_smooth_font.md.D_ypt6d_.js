import{_ as s,c as a,o as t,a3 as i}from"./chunks/framework.ZI2V820u.js";const _=JSON.parse('{"title":"macOS11之后开启平滑字体","description":"从macOS11开始设置里面平滑字体没了，字体明显不舒服","frontmatter":{"date":"2021-11-01T00:00:00.000Z","title":"macOS11之后开启平滑字体","category":"macOS","tags":["macOS"],"description":"从macOS11开始设置里面平滑字体没了，字体明显不舒服"},"headers":[],"relativePath":"posts/macos11_smooth_font.md","filePath":"posts/macos11_smooth_font.md"}'),e={name:"posts/macos11_smooth_font.md"},n=i('<h1 id="macos11之后开启平滑字体" tabindex="-1">macOS11之后开启平滑字体 <a class="header-anchor" href="#macos11之后开启平滑字体" aria-label="Permalink to &quot;macOS11之后开启平滑字体&quot;">​</a></h1><p>嫌弃 big sur 也就是11的 app icon 奇丑无比一直没升级，到12的图片直接复制文字，而且越来越多的软件已经变成方形图标，更新完新app再手动换老图标已经有点麻烦了，所以直接升了12了，上结论(<strong>需要重启</strong>)：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defaults</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -currentHost</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AppleFontSmoothing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -int</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><p>执行上面命令可以完全等效于以前 &#39;设置-通用&#39; 底部的平滑字体选项<br> 如果要重新开启此选项：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defaults</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -currentHost</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -globalDomain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AppleFontSmoothing</span></span></code></pre></div>',5),o=[n];function l(p,h,c,r,d,k){return t(),a("div",null,o)}const g=s(e,[["render",l]]);export{_ as __pageData,g as default};
