import{o as s,c as t,d as a}from"./app.2f939950.js";const o='{"title":".zsh_history 历史记录优化","description":"历史重复的命令太多了，不用grep都不太好找，好在可以用shell把相同的去掉","frontmatter":{"date":"2021-05-20","title":".zsh_history 历史记录优化","tags":["macOS"],"description":"历史重复的命令太多了，不用grep都不太好找，好在可以用shell把相同的去掉"},"relativePath":"posts/zsh_history.md","lastUpdated":1625202057485}',e={},r=a('<h1 id="zsh-history-历史记录优化"><a class="header-anchor" href="#zsh-history-历史记录优化" aria-hidden="true">#</a> .zsh_history 历史记录优化</h1><p>.zsh_history的存储编码是一个非常特殊的编码,不是常见的utf,gbk什么的，所以里面中文用别的软件打开了就乱码了，想用python把.zsh_history的重复的都去掉，读的时候就报错了，zsh官方有人问特殊字符怎么办，倒是有一个c语言的版本，最后用:</p><div class="language-bash"><pre><code>setopt HIST_IGNORE_ALL_DUPS\n<span class="token function">sort</span> -t <span class="token string">&quot;;&quot;</span> -k <span class="token number">2</span> -u ~/.zsh_history <span class="token operator">|</span> <span class="token function">sort</span> -o ~/.zsh_history\n\n</code></pre></div><p>解决问题，有时候shell真的是神器</p>',4);e.render=function(a,o,e,n,h,p){return s(),t("div",null,[r])};export default e;export{o as __pageData};
