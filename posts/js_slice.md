---
date: 2021-09-04
title: 类数组的 [].slice.call 和 Array.prototype.slice.call
category: js
tags:
- js
- 性能
description: 测试一下 [].slice.call 和 Array.prototype.slice.call 比较
---
# 类数组的 [].slice.call 和 Array.prototype.slice.call

做一个不是很全面的测试，先说结论
- 两者是同一个东西 比如 [].slice===Array.prototype.slice //true
- 写法不一样，会对性能有多大的影响， 毕竟[]是要初始化一个对象
- 如果担心第二条 完全一个保存在一个变量里面 let slicee = [].slice
- 写法的不同基本不可能成为你的程序的性能瓶颈
- **github上面[].slice的写法数量远大于proto的写法**
- 怎么写的爽就怎么写，肯定是前者写的更快

## 简单测试
```js
let o = {0: "node", 1: "ts", 2: "java", 3: "js", 4: "python", length: 5}

console.time()
for (let i = 0; i < 2; i++) {
    [].slice.call(o, 1)
}
console.timeEnd()

console.time()
for (let i = 0; i < 1000000; i++) {
    Array.prototype.slice.call(o, 1)
}
console.timeEnd()
```
在node环境和chrome的控制台，两个都不分伯仲；  
另一个有意思的发现是单独执行平均值基本一致  
两个在一起执行，谁在后面谁慢

## 资料
将近10年前的文章，可能现在V8 优化的更好，更没必要纠结了  有一个jsrf的文章被到处引用，可惜这个网站已经挂掉了，不知道里面写了什么
[https://stackoverflow.com/questions/9006553/slice-or-array-prototype-slice](https://stackoverflow.com/questions/9006553/slice-or-array-prototype-slice)

