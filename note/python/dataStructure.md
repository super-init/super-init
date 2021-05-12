---
title: python的数据结构
author: yh
date: '2021-5-12 19:00:00'
categories: python
tags:
    - python
    - 数据结构
---

python有三种常用的储存数据的容器，分别是list,tuple和dict

## 列表 list
列表的功能很强大，我们可以增加，删除，修改，查找里面的元素
列表的常用创建方式是直接用一个中括号表示
```python
a=[1,2,3,4,5]
#往列表里面加元素
a.append(6)
#删除列表元素
a.pop()
#修改列表元素
a[0]=0
#访问列表元素
print(a[0])
```

## 元组 tuple
元组可以看做不可变的列表，也就是在其创建时，里面的元素就定了
不能再进行增删改操作了，只能访问元素
列表的常用创建方式是直接用一个小括号表示
```python
b=('a','b','c')
#查看元素
print(b[0])
```
## 字典 dict
字典是一种key-value类型的数据容器，每对key-value都是一一对应的关系
而且key值必须唯一，列表的常用创建方式是直接用一个大括号表示
```python
#创建字典，下面的字典中有两个键值对
#其中math，Chinese都是key，而98,100则为其对应的value
score={
'math':98,
'chinese':100
}
#访问字典的所有key
print(score.keys())
#访问字典的value
print(score['math'])
```
ps：其实从另一种角度看，列表也可以看做key分别为0,1,2,3的字典
```python
a={
0:0
1:1,
2:2
}
b=[0,1,2,3]
#访问字典的元素
print(a[0])
#访问列表的元素
print(b[0])
```