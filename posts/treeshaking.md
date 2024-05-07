---
date: 2021-08-02
title: 你以为的 treeshaking 可能不是你以为的 treeshaking
category: js
tags:
- treeshaking
- esm
description: treeshaking最早由rollup实现，但是因为js语言本身的关系，和想象中差别还是挺大的
---

# 你以为的 treeshaking 可能不是你以为的 treeshaking

一个ui库的打包过程避免少不了treeshaking的内容，因为对于全局引入，组件库本身越大shake的优势越明显，

最近看了antdv，naiveui，nutui的实现，当前的基本上就两种：

- 基于插件的导入转换，比如antdv
- 基于 package.json的sideEffects=false

至于打包方式的话， webpack，rollup，**不打包**(naiveui)，vite的lib模式打包(nutui，treeshaking效果特别不好)

**当前即使到了webpack5**，对于esm的打包支持依然不好。

关于treeshaking的一篇很不错的文章:

[链接](https://github.com/wuomzfx/tree-shaking-test)
