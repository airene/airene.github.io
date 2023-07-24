---
date: 2017-05-21
title: 三十六进制转换
tags:
- 手撕
---
# 三十六进制转换
```js
function arr36() {
    let ret = []
    for (let i = 0; i < 36; i++) {
        i <= 9 ? ret.push(i) : ret.push(String.fromCharCode(i + 87)) //ascii码
    }
    return ret
}

function convert36(n) {
    let ret = []
    let arr = arr36()
    while (n) {
        let res = n % 36
        ret.unshift(arr[res]) //核心就是一直往前一位放
        n = parseInt(n / 36)
    }
    return ret.join('')
}
```
