---
date: 2020-02-20
title: vue 性能优化的 9 个技巧
category: js
tags:
- vue
description: 业务系统可能不太在乎性能，写框架就会要求高不少
---
# vue 性能优化的 9 个技巧

- 无状态的函数式组件 核心就是vnode是普通的还是组件的(状态)
- 组件分离 子组件很耗时的话，还是vue的更新策略决定的(组件粒度)，分离之后相当于缓存了，如果是无状态计算属性也能干这个
- 局部变量 在用计算属性的时候参数是可以用当前可响应的属性或者变量解构进去使用，提升非常明显
- v-if vs v-show 初始化 if快，高频更新 show更好
- keepalive 没什么好说的，特定场景有奇效
- Deferred features 不明觉厉，样例还是很明显的
- Time slicing react好像就用到了这个，名词挺高级的，实际核心是requestAnimationFrame，总的时间变长，界面不卡
- 减少响应式引用，感觉和第二个有点像
- 虚拟滚动 可能大部分需要虚拟滚动的场景，有可能需求可以再提炼一下，总有别的方式可以做到，比如树滚动(按级加载)，表格滚动(数据需求提炼)，

## 资料
[github](https://github.com/Akryum/vue-9-perf-secrets)  
[ppt](https://slides.com/akryum/vueconfus-2019)


