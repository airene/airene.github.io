import{_ as o,o as p,c as l,d as s,e,t,a as c,f as r,r as F}from"./app.fc5e7cd3.js";const E=JSON.parse('{"title":"PSD\u6587\u4EF6\u51CF\u5C0F\u4F53\u79EF","description":"\u6709\u65F6\u5019\u4E00\u4E2Apsd\u6587\u4EF6\u6709\u7528\u7684\u4FE1\u606F\u57FA\u672C\u4E0A\u6CA1\u6709\uFF0C\u4F46\u662F\u6587\u4EF6\u4F53\u79EF\u90FD\u5230\u5927\u51E0\u5341M\uFF0C\u641C\u4E86\u5F88\u591A\u65B9\u6CD5\u624D\u627E\u5230\u8FD9\u4E2A\u795E\u5947\u7684\u51FD\u6570","frontmatter":{"date":"2017-03-31T00:00:00.000Z","title":"PSD\u6587\u4EF6\u51CF\u5C0F\u4F53\u79EF","tags":["photoshop"],"description":"\u6709\u65F6\u5019\u4E00\u4E2Apsd\u6587\u4EF6\u6709\u7528\u7684\u4FE1\u606F\u57FA\u672C\u4E0A\u6CA1\u6709\uFF0C\u4F46\u662F\u6587\u4EF6\u4F53\u79EF\u90FD\u5230\u5927\u51E0\u5341M\uFF0C\u641C\u4E86\u5F88\u591A\u65B9\u6CD5\u624D\u627E\u5230\u8FD9\u4E2A\u795E\u5947\u7684\u51FD\u6570"},"headers":[],"relativePath":"posts/psd_size_reduce.md"}'),y={name:"posts/psd_size_reduce.md"},D={id:"frontmatter-title",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=r(`<p>\u6709\u65F6\u5019\u4E00\u4E2Apsd\u6587\u4EF6\u6709\u7528\u7684\u4FE1\u606F\u57FA\u672C\u4E0A\u6CA1\u6709\uFF0C\u4F46\u662F\u6587\u4EF6\u4F53\u79EF\u90FD\u5230\u5927\u51E0\u5341M\uFF0C\u641C\u4E86\u5F88\u591A\u65B9\u6CD5\u624D\u627E\u5230\u8FD9\u4E2A\u795E\u5947\u7684\u51FD\u6570</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deleteDocumentAncestorsMetadata</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">whatApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//String version of the app name</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">whatApp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Photoshop</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)  </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//Check for photoshop specifically, or this will cause errors</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//Function Scrubs Document Ancestors from Files</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">documents</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">There are no open documents. Please open a file to run this script.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">ExternalObject</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AdobeXMPScript</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">ExternalObject</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AdobeXMPScript</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ExternalObject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lib:AdobeXMPScript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xmp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">XMPMeta</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">activeDocument</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xmpMetadata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rawData</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// Begone foul Document Ancestors!</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">xmp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deleteProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">XMPConst</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NS_PHOTOSHOP</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DocumentAncestors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">activeDocument</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xmpMetadata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rawData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xmp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">serialize</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">//Now run the function to remove the document ancestors</span></span>
<span class="line"><span style="color:#82AAFF;">deleteDocumentAncestorsMetadata</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,2);function C(n,d,u,_,m,h){const a=F("Comment");return p(),l("div",null,[s("h1",D,[e(t(n.$frontmatter.title)+" ",1),A]),i,c(a)])}const S=o(y,[["render",C]]);export{E as __pageData,S as default};