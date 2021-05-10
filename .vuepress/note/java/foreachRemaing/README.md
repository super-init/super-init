---
title:forEachRemaining的用法
---
forEachRemaining()是java1.8新增的Iterator接口中的默认方法
对于这个方法，官方文档是这么描述的：
Performs the given action for each remaining element until all elements have been processed or the action throws an exception. Actions are performed in the order of iteration, if that order is specified. Exceptions thrown by the action are relayed to the caller.
简单来说，就是对集合中剩余的元素进行操作，直到元素完毕或者抛出异常。这里重要的是剩余元素，怎么理解呢，下面就来用代码解释一下：

import java.util.*;
public class Test
{
	public static void main(String[] args)
	{
		//创建一个元素类型为Integer的集合
		Collection<Integer> collection =  new HashSet<>();
		for (int i=0;i<10 ;i++ )
		{
			//向集合中添加元素
			collection.add(i);
		}
		//获取该集合的迭代器
		Iterator<Integer> iterator= collection.iterator();
		//调用forEachRemaining()方法遍历集合元素
		iterator.forEachRemaining(ele -> System.out.println(ele));
	}
}
输出为：
0
1
2
3
4
5
6
7
8
9
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
这是预料之中的结果。
那继续看下面代码：

import java.util.*;
public class Test
{
	public static void main(String[] args)
	{
		//创建一个元素类型为Integer的集合
		Collection<Integer> collection =  new HashSet<>();
		for (int i=0;i<10 ;i++ )
		{
			//向集合中添加元素
			collection.add(i);
		}
		//获取该集合的迭代器
		Iterator<Integer> iterator= collection.iterator();
		//调用迭代器的经过集合实现的抽象方法遍历集合元素
		while(iterator.hasNext())
		{
			System.out.println(iterator.next());
		}
		System.out.println("--------------");
		//调用forEachRemaining()方法遍历集合元素
		iterator.forEachRemaining(ele -> System.out.println(ele));
		
	}
}

这时输出为：
0
1
2
3
4
5
6
7
8
9
--------------
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
明明调用了迭代器两个遍历方法，怎么会只遍历一次呢？
问题就出在剩余里，当第一次调用迭代器的经过集合实现的抽象方法遍历集合元素时，迭代器就已经将元素遍历完毕，也就是说迭代器中已经没有剩余元素了，因此这时调用forEachRemaining()方法，就什么也不输出了，为了验证，再来看下面代码：

import java.util.*;
public class Test
{
	public static void main(String[] args)
	{
		//创建一个元素类型为Integer的集合
		Collection<Integer> collection =  new HashSet<>();
		for (int i=0;i<10 ;i++ )
		{
			//向集合中添加元素
			collection.add(i);
		}
		//获取该集合的迭代器
		Iterator<Integer> iterator= collection.iterator();
		//调用forEachRemaining()方法遍历集合元素
		int i=0;
		while(iterator.hasNext())
		{
			System.out.println(iterator.next());
			i++;
			if (i==5)
			{
				break;
			}
		}
		System.out.println("--------------");
		//调用forEachRemaining()方法遍历集合元素
		iterator.forEachRemaining(ele -> System.out.println(ele));
		
	}
}
这时输出：
0
1
2
3
4
--------------
5
6
7
8
9
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
可以看到，当我们第一次用迭代器遍历时，只让它遍历五次就跳出循环，那么就还剩下五个元素，再调用forEachRemaining()方法，就可以看到输出后五个元素了
