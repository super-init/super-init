---
title: kotlin的安全调用
author: yh
date: '2021-5-12 16:00:00'
categories: kotlin
tags:
    - kotlin
    - 函数
---
## java的痛点
长期以来，一直困扰java的是空指针异常，有时候突然就会提示
```$java
java.lang.Exception.NullPointException
```

## kotlin的解决方式
这在kotlin中得到了很好的解决，kotlin的任何对象都不能为空
除非在定义时在类型后面加?,代表对象可为空，同样的在调用方法时也有安全调用
```$kotlin
person?.dog?.name
```
上面代码表示，如果java对象里面的dog变量不为空就调用dog对象里面的name变量，
如果dog对象或name变量为空则返回null值

<Vssue />