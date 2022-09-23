---
date: 2017-08-07
title: 路径总和问题 - 是否存在满足条件的路径
tags:
- 算法
description: 二叉树相关的算法 
---
# {{ $frontmatter.title }}

## 给定一个二叉树，求证是否有路径满足总和等于给定的值  
**用递归是真的方便啊**


```js

function hasSumPath(root, sum) {
    if (root == null) return false
    if (root.left == null && root.right == null) return root.val == sum
    return hasSumPath(root.left, sum - root.val) || hasSumPath(root.right, sum - root.val)
}

```

## 找出路径 FIXME
