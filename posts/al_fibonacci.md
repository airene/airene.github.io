---
date: 2017-04-26
title: 斐波那契数列的 JS 实现
category: 面试
tags:
- 算法
description: 斐波那契数列的几种实现
---
# 斐波那契数列的 JS 实现

## 普通实现
复杂度O(2**n)
```js
function fibo1(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibo1(n - 2) + fibo(n - 1)
}
```
## 尾调用优化 - call stack 持续复用， 复杂度O(n)
```js
function fibo2(n, current = 0, next = 1) {
    if (n === 0) return 0;
    if (n === 1) return next;
    return fibo2(n - 1, next, current + next)
}
```

## 动态规划 实际执行效率和尾调用一样，复杂度O(n)
```js
function fibo3(n) {
    let n1 = 1;
    let n2 = 1;
    if (n===0) return 0;
    if (n === 1 || n === 2) {
        return 1;
    }
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}

```
## 通项公式就算了 记不住
