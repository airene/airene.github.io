import{_ as n,C as a,o as p,c as o,H as l,Q as e}from"./chunks/framework.027d2da0.js";const h=JSON.parse('{"title":"PSD文件减小体积","description":"有时候一个psd文件有用的信息基本上没有，但是文件体积都到大几十M，搜了很多方法才找到这个神奇的函数","frontmatter":{"date":"2017-03-31T00:00:00.000Z","title":"PSD文件减小体积","tags":["photoshop"],"description":"有时候一个psd文件有用的信息基本上没有，但是文件体积都到大几十M，搜了很多方法才找到这个神奇的函数"},"headers":[],"relativePath":"posts/psd_size_reduce.md","filePath":"posts/psd_size_reduce.md"}'),t={name:"posts/psd_size_reduce.md"},c=e(`<h1 id="psd文件减小体积" tabindex="-1">PSD文件减小体积 <a class="header-anchor" href="#psd文件减小体积" aria-label="Permalink to &quot;PSD文件减小体积&quot;">​</a></h1><p>有时候一个psd文件有用的信息基本上没有，但是文件体积都到大几十M，搜了很多方法才找到这个神奇的函数</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleteDocumentAncestorsMetadata</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    whatApp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(app.name);</span><span style="color:#6A737D;">//String version of the app name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(whatApp.</span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Photoshop&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)  { </span><span style="color:#6A737D;">//Check for photoshop specifically, or this will cause errors</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//Function Scrubs Document Ancestors from Files</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">documents.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;There are no open documents. Please open a file to run this script.&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (ExternalObject.AdobeXMPScript </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) ExternalObject.AdobeXMPScript </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ExternalObject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;lib:AdobeXMPScript&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> xmp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">XMPMeta</span><span style="color:#E1E4E8;">( activeDocument.xmpMetadata.rawData);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// Begone foul Document Ancestors!</span></span>
<span class="line"><span style="color:#E1E4E8;">            xmp.</span><span style="color:#B392F0;">deleteProperty</span><span style="color:#E1E4E8;">(XMPConst.</span><span style="color:#79B8FF;">NS_PHOTOSHOP</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;DocumentAncestors&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            app.activeDocument.xmpMetadata.rawData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> xmp.</span><span style="color:#B392F0;">serialize</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">//Now run the function to remove the document ancestors</span></span>
<span class="line"><span style="color:#B392F0;">deleteDocumentAncestorsMetadata</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteDocumentAncestorsMetadata</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    whatApp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(app.name);</span><span style="color:#6A737D;">//String version of the app name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(whatApp.</span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Photoshop&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)  { </span><span style="color:#6A737D;">//Check for photoshop specifically, or this will cause errors</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//Function Scrubs Document Ancestors from Files</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">documents.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;There are no open documents. Please open a file to run this script.&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (ExternalObject.AdobeXMPScript </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) ExternalObject.AdobeXMPScript </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ExternalObject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;lib:AdobeXMPScript&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> xmp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">XMPMeta</span><span style="color:#24292E;">( activeDocument.xmpMetadata.rawData);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// Begone foul Document Ancestors!</span></span>
<span class="line"><span style="color:#24292E;">            xmp.</span><span style="color:#6F42C1;">deleteProperty</span><span style="color:#24292E;">(XMPConst.</span><span style="color:#005CC5;">NS_PHOTOSHOP</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;DocumentAncestors&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            app.activeDocument.xmpMetadata.rawData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> xmp.</span><span style="color:#6F42C1;">serialize</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//Now run the function to remove the document ancestors</span></span>
<span class="line"><span style="color:#6F42C1;">deleteDocumentAncestorsMetadata</span><span style="color:#24292E;">();</span></span></code></pre></div>`,3);function r(E,y,i,d,u,F){const s=a("Comment");return p(),o("div",null,[c,l(s)])}const D=n(t,[["render",r]]);export{h as __pageData,D as default};
