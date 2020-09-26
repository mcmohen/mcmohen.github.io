---
title: Markdown的使用-基础
date: 2019-08-17 16:33:34
categories: 教程
tags: 
    - 教程
    - Markdown

thumbnail: https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_imgmcmohen_imgteacher.jpg
---

# 基础篇

<!-- more -->

# 标题

### 格式:

n个‘#’号+空格+标题名称 **(此处标题字体黑度和我的博客设置有关,与Markdown无关)**

```
# 一级标题名称
## 二级标题名称
### 三级标题名称
#### 四级标题名称
##### 五级标题名称
###### 六级标题名称
```

### 效果:



# 一级标题名称

## 二级标题名称
### 三级标题名称
#### 四级标题名称
##### 五级标题名称
###### 六级标题名称



# 正文

在正文中,Markdown提供了许多特殊效果,例如:

可以使用
```
**文字**
```
来使文字变成粗体字;

### 格式:

```
**我很粗**
**abcdefghijklmnopqrstuvwxyz**
**0123456789**
```

### 效果:

**我很粗**
**abcdefghijklmnopqrstuvwxyz**
**0123456789**



可以使用
```
*文字*
```
来使得文字变为斜体字;

### 格式:

```
*我是斜体*
*abcdefghijklmnopqrstuvwxyz*
*0123456789*
```

### 效果:

*我是斜体*
*abcdefghijklmnopqrstuvwxyz*
*0123456789*



可以使用
```
***文字***
```
来使得文字变为加粗斜体字;

### 格式:

```
***我是加粗斜体字***
***abcdefghijklmnopqrstuvwxyz***
***0123456789***
```

### 效果:

***我是加粗斜体字***
***abcdefghijklmnopqrstuvwxyz***
***0123456789***



可以使用
```
~~文字~~
```
来使得文字带有删除线;

### 格式:

```
~~我是带有删除线的文字~~
~~abcdefghijklmnopqrstuvwxyz~~
~~0123456789~~
```

### 效果:

~~我是带有删除线的文字~~
~~abcdefghijklmnopqrstuvwxyz~~
~~0123456789~~



# 代码块

## 文中代码块

### 格式:

```
我是文字```我是代码```我是文字。
我喜欢像```puts("I love luogu forever!");```这样的代码。
```

### 效果:

我是文字
```
我是代码
```
我是文字。
我喜欢像
```
puts("I love luogu forever!");
```
这样的代码。



## 代码段落

### 格式:  注意:三个`号之间没有空格

```
` ` `
我是代码。
` ` `

` ` `cpp
#include<stdio.h>
int main(void){
    puts("I love luogu forever!");
    return 0;
}
` ` `
```

### 效果:

```
我是代码
```

```cpp
#include<stdio.h>
int main(void){
    puts("I love luogu forever!");
    return 0;
}
```



# 列表

## 无序列表

### 格式:

```
- 项1
- 项2
- 项3
```

### 效果:

- 项1
- 项2
- 项3

## 有序列表

### 格式: 注意.后有空格

```
1. 项1
2. 项2
3. 项3
```

### 效果:

1. 项1

2. 项2

3. 项3

## 列表的嵌套

### 格式:

```
1. 项1
    - 项11
    - 项12
2. 项2
    1. 项21
3. 项3
    - 项31
    - 项32
    - 项33
    - 项34

- 项1
    - 项11
    - 项12
- 项2
    - 项21
- 项3
    1. 项31
    2. 项32
    3. 项33
    4. 项34
```

### 效果:

1. 项1
    - 项11
    - 项12
2. 项2
    1. 项21
3. 项3
    - 项31
    - 项32
    - 项33
    - 项34

- 项1
    - 项11
    - 项12
- 项2
    - 项21
- 项3
    1. 项31
    2. 项32
    3. 项33
    4. 项34



## 注意事项

有序排列自动按照**升序排列**，且**序号仅仅与序列的第一项的序号有关**

### 源代码:

```
2. 项
1. 项
3. 项
```

### 效果:

2. 项
1. 项
3. 项



# 超链接与图片

## 超链接

### 格式:

```
[链接描述](链接地址)

[墨痕博客](https://mcmohen.top/)
```

### 效果:

[链接描述](链接地址)

[墨痕博客](https://mcmohen.top/)

## 图片

### 格式:

```
![图片描述（选填）](图片地址)
注意!是半角字符，ASCII(!)=33
![作者头像](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_img/90133cbc21b46c765beb08a89ec4bc45194d5b.jpg)
```

### 效果:

![图片描述（选填）](图片地址)
注意!是半角字符，ASCII(!)=33
![作者头像](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_img/90133cbc21b46c765beb08a89ec4bc45194d5b.jpg)



## 图片&链接

### 格式:

```
[![图片描述（选填）](图片地址)](链接地址)
[![作者头像](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_img/90133cbc21b46c765beb08a89ec4bc45194d5b.jpg)](https://mcmohen.top/)
点击以进入墨痕的博客
```

### 效果:

[![图片描述（选填）](图片地址)](链接地址)
[![作者头像](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_img/90133cbc21b46c765beb08a89ec4bc45194d5b.jpg)](https://mcmohen.top/)
点击以进入墨痕的博客



## 注意事项(特别重要)

在Markdown将图片转化为`HTML`元素时，对于

```
![图片描述](图片地址)
```

会转化为:

```
<p>
    <img src="图片地址" alt="图片描述">
</p>
```

这将会导致用户在不知情的情况下打开图片对应的链接

## 特此声明:
#### 任何利用此漏洞制造恶意程序（如自动关注机space/show?uid=xxx&amp;follow=1）（ 自动注销机login/logout?uid=xxx）或实施恶意行为造成的后果与本文作者无关


## 
