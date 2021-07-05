---
date: 2021-07-04
title: travis_ci部署vitepress
tags:
- travis
description: 这个是vitepress官方的配置加了些优化，主要是能提升构建速度
---

# travis_ci自动部署vitepress

这个是vitepress官方的配置加了些优化，主要是能提升构建速度

## 配置

```yaml
language: node_js
node_js:
    - lts/*
install:
    - yarn install
script:
    - yarn build
branches:
    only:
        - master
deploy:
    provider: pages
    skip_cleanup: true
    local_dir: .vitepress/dist
    github_token: $travis_ci
    keep_history: true
    on:
        branch: master
cache:
    apt: true
    yarn: true
    directories:
        - node_modules

```

其实以上配置忽略了一个重要的配置信息就是target_branch，默认是gh-pages,也就是自动提交到本工程的这个分支。一开始以为是和deploy.sh一套配合使用的，想推到哪里推哪里，其实就这个yml文件就够了，花了不少时间总是构建成功，部署不成功。具体travis支持的所有配置项 [github pages config](https://docs.travis-ci.com/user/deployment/pages/)

正常用户的情况应该就一个网站，而且希望域名是短的，比如 `xxx.github.io` 而不是再增加一个/repo/，变成 `xxx.github.io/repo/` 

GitHub pages 对这两个的支持都很好了，用前者的话，一般还会加一个自定义的域名，https成熟，域名现在很多也不贵。

## 几个注意点：

* $travis_ci变量的值是在github平台生成的token，在github随便起名字自己记忆用的，权限也不用开太大，但是变量名是要和travis_ci官网的environment一致，也就是在travis网站上填的是 travis_ci
* travis 有10000的构建信用分，用完了不知道会怎么样，也是为了体验，实际上用完了可以切换到github action
* 如果需要绑定域名而且是apex型，顶域名，而不是二级域名， 也就是 `xxx.xxx` or  `www.xxx.xxx` 单独加cname好像还不行，验证不了，还需要加到 Github pages的A记录才能顺利验证，本来生效就慢，配置完如果没问题，可以过几个小时再回来看
* 怎么配置travis, GitHub token网上好的文章一大堆就没必要写了