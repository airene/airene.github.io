import{_ as a,c as n,a2 as t,G as e,C as p,o as l}from"./chunks/framework.DiPJMjA6.js";const y=JSON.parse('{"title":"travis_ci 自动部署 vitepress","description":"这个是vitepress官方的配置加了些优化，主要是能提升构建速度","frontmatter":{"date":"2021-07-04T00:00:00.000Z","title":"travis_ci 自动部署 vitepress","category":"cicd","tags":["travis"],"description":"这个是vitepress官方的配置加了些优化，主要是能提升构建速度"},"headers":[],"relativePath":"posts/travis_ci.md","filePath":"posts/travis_ci.md"}'),h={name:"posts/travis_ci.md"};function k(r,s,E,d,c,o){const i=p("Comment");return l(),n("div",null,[s[0]||(s[0]=t(`<h1 id="travis-ci-自动部署-vitepress" tabindex="-1">travis_ci 自动部署 vitepress <a class="header-anchor" href="#travis-ci-自动部署-vitepress" aria-label="Permalink to &quot;travis_ci 自动部署 vitepress&quot;">​</a></h1><p>这个是vitepress官方的配置加了些优化，主要是能提升构建速度</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_js</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">node_js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lts/*</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yarn install</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yarn build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    skip_cleanup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    local_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.vitepress/dist</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    github_token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$travis_ci</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    keep_history</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    apt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    yarn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    directories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules</span></span></code></pre></div><p>其实以上配置忽略了一个重要的配置信息就是target_branch，默认是gh-pages,也就是自动提交到本工程的这个分支。一开始以为是和deploy.sh一套配合使用的，想推到哪里推哪里，其实就这个yml文件就够了，花了不少时间总是构建成功，部署不成功。具体travis支持的所有配置项 <a href="https://docs.travis-ci.com/user/deployment/pages/" target="_blank" rel="noreferrer">github pages config</a></p><p>正常用户的情况应该就一个网站，而且希望域名是短的，比如 <code>xxx.github.io</code> 而不是再增加一个/repo/，变成 <code>xxx.github.io/repo/</code></p><p>GitHub pages 对这两个的支持都很好了，用前者的话，一般还会加一个自定义的域名，https成熟，域名现在很多也不贵。</p><h2 id="几个注意点" tabindex="-1">几个注意点 <a class="header-anchor" href="#几个注意点" aria-label="Permalink to &quot;几个注意点&quot;">​</a></h2><ul><li>$travis_ci变量的值是在github平台生成的token，在github随便起名字自己记忆用的，权限也不用开太大，但是变量名是要和travis_ci官网的environment一致，也就是在travis网站上填的是 travis_ci</li><li>travis 有10000的构建信用分，用完了不知道会怎么样，也是为了体验，实际上用完了可以切换到github action</li><li>如果需要绑定域名而且是apex型，顶域名，而不是二级域名， 也就是 <code>xxx.xxx</code> or <code>www.xxx.xxx</code> 单独加cname好像还不行，验证不了，还需要加到 Github pages的A记录才能顺利验证，本来生效就慢，配置完如果没问题，可以过几个小时再回来看</li><li>怎么配置travis, GitHub token网上好的文章一大堆就没必要写了</li></ul>`,9)),e(i)])}const v=a(h,[["render",k]]);export{y as __pageData,v as default};
