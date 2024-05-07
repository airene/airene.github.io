---
date: 2017-08-01
title: 数据结构 - 二叉搜索树以及常见方法
category: 面试
tags:
- 数据结构
description: 汇总了常见二叉树的操作或者查询方法
---
# 数据结构 - 二叉搜索树以及常见方法

- 前序、中序、后序遍历都是深度优先(DFS)
- 层序遍历是广度优先(BFS)
- 二叉搜索树的特殊结构使得查找元素的时间复杂度提高为O(logn) 而且底数是2

## 完整的代码实现
```js
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    root = null;

    insert(data) {
        let node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (current.data > data) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    };

    find(data) {
        let current = this.root;
        while (true) {
            if (data === current.data) {
                return current;
            }
            current = data < current.data ? current.left : current.right;
            if (current === null) {
                return null;
            }
        }
    }
    // 不是很完整的删除逻辑 FIXME
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    //前序
    preOrderTraverse(node, ret = []) {
        if (node != null) {
            ret.push(node.data)
            this.preOrderTraverse(node.left, ret)
            this.preOrderTraverse(node.right, ret)
        }
        return ret
    }
    //中序
    inOrderTraverse(node, ret = []) {
        if (node != null) {
            this.inOrderTraverse(node.left, ret)
            ret.push(node.data)
            this.inOrderTraverse(node.right, ret)
        }
        return ret
    }
    //后序
    postOrderTraverse(node, ret = []) {
        if (node != null) {
            this.postOrderTraverse(node.left, ret)
            this.postOrderTraverse(node.right, ret)
            ret.push(node.data)
        }
        return ret
    }
    // 层序
    levelOrder(node, step, res = []) {
        if (!node) return [];
        if (!res[step]) res[step] = []
        res[step].push(node.data)
        this.levelOrder(node.left, step + 1, res)
        this.levelOrder(node.right, step + 1, res)
        return res
    }
    //最小节点
    findMinNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.data;
        }
        return null
    }
    //最大节点
    findMaxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.data
        }
        return null
    }
    // 最大深度
    maxDepth(node) {
        if (node == null) {
            return 0
        } else {
            let left = this.maxDepth(node.left)
            let right = this.maxDepth(node.right)
            return Math.max(left, right) + 1
        }
    }
    // 最小深度，不是优雅实现 FIXME
    minDepth(node) {
        if (node == null) {
            return 0
        } else {
            let left = this.minDepth(node.left)
            let right = this.minDepth(node.right)
            return Math.min(left, right) + 1
        }
    }

}
```

## 使用事例
```js
let bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(9);
bst.insert(4);
bst.insert(2);

console.log(bst.minDepth(bst.root));
```
