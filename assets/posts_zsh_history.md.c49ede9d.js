import{_ as a,o as e,c as t,a as n,f as o,r}from"./app.af42795b.js";const f='{"title":".zsh_history \u5386\u53F2\u8BB0\u5F55\u4F18\u5316","description":"\u5386\u53F2\u91CD\u590D\u7684\u547D\u4EE4\u592A\u591A\u4E86\uFF0C\u4E0D\u7528grep\u90FD\u4E0D\u592A\u597D\u627E\uFF0C\u597D\u5728\u53EF\u4EE5\u7528shell\u628A\u76F8\u540C\u7684\u53BB\u6389","frontmatter":{"date":"2021-05-20T00:00:00.000Z","title":".zsh_history \u5386\u53F2\u8BB0\u5F55\u4F18\u5316","tags":["macOS"],"description":"\u5386\u53F2\u91CD\u590D\u7684\u547D\u4EE4\u592A\u591A\u4E86\uFF0C\u4E0D\u7528grep\u90FD\u4E0D\u592A\u597D\u627E\uFF0C\u597D\u5728\u53EF\u4EE5\u7528shell\u628A\u76F8\u540C\u7684\u53BB\u6389"},"headers":[],"relativePath":"posts/zsh_history.md"}',p={},c=o(`<h1 id="zsh-history-\u5386\u53F2\u8BB0\u5F55\u4F18\u5316" tabindex="-1">.zsh_history \u5386\u53F2\u8BB0\u5F55\u4F18\u5316 <a class="header-anchor" href="#zsh-history-\u5386\u53F2\u8BB0\u5F55\u4F18\u5316" aria-hidden="true">#</a></h1><p>.zsh_history\u7684\u5B58\u50A8\u7F16\u7801\u662F\u4E00\u4E2A\u975E\u5E38\u7279\u6B8A\u7684\u7F16\u7801,\u4E0D\u662F\u5E38\u89C1\u7684utf,gbk\u4EC0\u4E48\u7684\uFF0C\u6240\u4EE5\u91CC\u9762\u4E2D\u6587\u7528\u522B\u7684\u8F6F\u4EF6\u6253\u5F00\u4E86\u5C31\u4E71\u7801\u4E86\uFF0C\u60F3\u7528python\u628A.zsh_history\u7684\u91CD\u590D\u7684\u90FD\u53BB\u6389\uFF0C\u8BFB\u7684\u65F6\u5019\u5C31\u62A5\u9519\u4E86\uFF0Czsh\u5B98\u65B9\u6709\u4EBA\u95EE\u7279\u6B8A\u5B57\u7B26\u600E\u4E48\u529E\uFF0C\u5012\u662F\u6709\u4E00\u4E2Ac\u8BED\u8A00\u7684\u7248\u672C\uFF0C\u6700\u540E\u7528:</p><div class="language-bash"><pre><code>setopt HIST_IGNORE_ALL_DUPS
<span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token string">&quot;;&quot;</span> <span class="token parameter variable">-k</span> <span class="token number">2</span> <span class="token parameter variable">-u</span> ~/.zsh_history <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-o</span> ~/.zsh_history

</code></pre></div><p>\u89E3\u51B3\u95EE\u9898\uFF0C\u6709\u65F6\u5019shell\u771F\u7684\u662F\u795E\u5668</p>`,4);function _(h,i,l,d,m,u){const s=r("Comment");return e(),t("div",null,[c,n(s)])}var y=a(p,[["render",_]]);export{f as __pageData,y as default};
