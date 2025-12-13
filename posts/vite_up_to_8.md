---
date: 2025-12-14
title: Vite 8 发布 beta 版本了，升级体验一下 Rolldown
category: js
tags:
- fe
- vite
description: 用自己的一个很小的 web 项目体验一下 rolldown , 因为项目很小编译时间虽然快几倍（原地第一次之后），但是可以忽略，主要检查一下 rolldown 生产是否可用
---
# Vite 8 发布 beta 版本了，升级体验一下 Rolldown

## 编译时间
当前是用 beta.2 版本，因为测试项目非常的小（真实项目），编译时间是从大概 260ms 到 80ms 的量级 🐶，**这可能是个不公平的对比**，因为发现 rolldown 第一次也是 260+ms，然后原地再编译才是前面的结果，也就是 rollup 始终差不多的速度，不区分第一次，原地编译 rolldown 区分是不是第一次。

## vite.config 的变化
我有一个特殊的需求，就是每个页面都非常小，而且页面不多，希望是不要生成那么多 js 文件，所以之前的做法是 rollup 的选项。
```js
rollupOptions: {
    output: {
        manualChunks(id) {
            if (id.includes('pages')) {
                return 'pages'
            }
        }
    }
}
// 之前的结果 vite7 rollup
// dist/index.html                  0.45 kB │ gzip:  0.30 kB
// dist/assets/style-D2W9t87U.css   5.50 kB │ gzip:  1.58 kB
// dist/assets/index-D5uKrQyu.js   28.56 kB │ gzip: 11.05 kB
// dist/assets/pages-BL4EWsDv.js   83.42 kB │ gzip: 32.14 kB
```
rolldown 没有这个概念，对等的是 `advancedChunks`，折腾半天 `advancedChunks` 达不到想要的效果（可能是针对 node_modules 比较强，可能是没找对方法），找了半天找到一个方法可以做到，这个做法对我的项目有用，但是大项目应该不行，所有项目文件都生成一个文件了。
```js
rolldownOptions: {
    output: {
        inlineDynamicImports: true
    }
}
// rolldown的输出内容多了一个 rolldown-runtime
// dist/index.html                           0.54 kB │ gzip:  0.31 kB
// dist/assets/style-Bac8aBaN.css            5.46 kB │ gzip:  1.56 kB
// dist/assets/rolldown-runtime-BcdYIZKG.js  0.19 kB │ gzip:  0.17 kB
// dist/assets/index-pOi5csA0.js             25.03 kB │ gzip:  9.38 kB
// dist/assets/vendor-p3Su3_y3.js            85.17 kB │ gzip: 33.12 kB
```
不加上面选项的结果
```text
// 文件很多 vite 8 & rolldown， vite 7 类似
dist/index.html                     0.45 kB │ gzip:  0.29 kB
dist/assets/style-Bac8aBaN.css      5.46 kB │ gzip:  1.56 kB
dist/assets/not-found-DAToitwy.js   0.12 kB │ gzip:  0.13 kB
dist/assets/api-Br4_g19J.js         0.42 kB │ gzip:  0.17 kB
dist/assets/home-BSTox8wn.js        0.59 kB │ gzip:  0.38 kB
dist/assets/things-BUk3p1b5.js      0.83 kB │ gzip:  0.53 kB
dist/assets/eol-WmdroNCa.js         1.88 kB │ gzip:  0.97 kB
dist/assets/angling-Bh7xqOUY.js     1.92 kB │ gzip:  0.78 kB
dist/assets/fin-5dWvAvtB.js         1.97 kB │ gzip:  0.87 kB
dist/assets/genuine-DKX79-2_.js     2.40 kB │ gzip:  1.01 kB
dist/assets/frame-main-CGg78mi8.js  2.41 kB │ gzip:  1.27 kB
dist/assets/pc-hLrRv_Pv.js          2.55 kB │ gzip:  0.68 kB
dist/assets/vers-COZW8I_8.js        2.90 kB │ gzip:  1.15 kB
dist/assets/index-CbFw2-HB.js       3.76 kB │ gzip:  1.60 kB
dist/assets/about-BcSEGuXl.js       4.18 kB │ gzip:  2.39 kB
dist/assets/vendor-BMuo1oit.js      84.70 kB │ gzip: 32.75 kB
```
## 结论
- 只依赖 vue, vue-router 的项目没问题，生产可用。
- rolldown 的 node_modules 大小居然比 vite7 的 esbuild 和 rollup 的还大了一点 47.5MB > 35.2MB 🫨
```json
"dependencies": {
    "vue": "^3.5.25",
    "vue-router": "^4.6.4"
},
"devDependencies": {
    "@vitejs/plugin-vue": "^6.0.3",
    "vite": "^8.0.0-beta.2"
}
```
