---
date: 2021-08-08
title: Typescirpt 之协变逆变
category: js
description: 深入学习Typescript的关键特性之 Covariance and contravariance
tags:
- ts
---
# Typescirpt 之协变逆变
typescript除了静态类型检查，其实还有一各特点说的很恰当，就是`类型编程`，这点与java对比的话，比java灵活的多。
如果有面向对象编程基础的话，看泛型并不难，从教程中看到协变、逆变这两个词就有点高大上，再看wiki定义
> 协变与逆变(Covariance and contravariance )是在计算机科学中，描述具有父/子型别关系的多个型别通过型别构造器、构造出的多个复杂型别之间是否有父/子型别关系的用语。

懵不懵？

白话版：具有父子关系的多个类型，在通过某种构造关系构造成的新的类型，如果还具有父子关系则是协变的，而关系逆转了就是逆变的

## 协变的例子  
和java类似的，从对象的角度来讲，Animal 是父类，Dog是子类，子类更具象，属性或者方法更多，向上赋值没问题，可以理解为`砍掉`了多余的属性
```js
interface Animal {
  name: string;
}

interface Dog extends Animal {
  wangwang(): void;
}

let animal1: Animal;
let dog1: Dog;
animal1 = dog1;

let arrAnimal: Array<Animal>
let arrDog: Array<Dog>
// 兼容，可以赋值，这个就是协变，也就是Array衍生后的类型是协变
arrAnimal = arrDog
```

## 逆变的例子  
具有父子关系的类型，如果用在函数参数的时候，与原始类型项目，赋值兼容性相反了，就是逆变，`从函数调用来讲，成员属性和方法要全乎的才能调用，不然如果实现里面用到了没有的属性就操作了呀`
```js
interface Animal {
  name: string;
}

interface Dog extends Animal {
  wangwang(): void;
}

type AnimalFn = (arg: Animal) => void
type DogFn = (arg: Dog) => void

let animalFn: AnimalFn;
let dogFn: DogFn;
// 这样不行
animalFn = dogFn;
// 这样可以 也就是放在函数参数上的话 函数之间的关系逆变了
dogFn = animalFn;
```

## 双向协变

Ts在函数参数的比较中实际上默认采取的策略是双向协变：只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。

如果害怕调用出问题，可以通过`tsconfig.js`中修改`strictFunctionType`属性来严格控制协变和逆变。
