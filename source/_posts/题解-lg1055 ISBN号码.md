---
title: "洛谷题解 P1055 【(2008年普及组第一题)ISBN号码】"
categories: 题解
tags: 
	- 题解
	- C++

thumbnail: https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_imgans.jpg

date: 2019-08-12 20:03:18
---

[lg1055传送门](https://www.luogu.org/problem/P1055)

<!-- more -->

这是一道~~非常水~~的题！~~(毕竟第一题)~~

### 算法可能就是模拟和字符串吧!

代码如下:

```cpp
#include <bits/stdc++.h>
using namespace std;
char c[14];  //储存字符
int a[10],ans;  //a储存数字
char tot;
int main()
{
	freopen("isbn.in","r",stdin);  //流输入输出
	freopen("isbn.out","w",stdout);
	for(int i=1;i<=13;i++) //从1开始
		cin>>c[i];
	a[1]=c[1]-'0';  //以下为字符转整形
	a[2]=c[3]-'0';
	a[3]=c[4]-'0';
	a[4]=c[5]-'0';
	a[5]=c[7]-'0';
	a[6]=c[8]-'0';
	a[7]=c[9]-'0';
	a[8]=c[10]-'0';
	a[9]=c[11]-'0';
	tot=c[13]; //13为判断依据单独存(以字符存储)
	for(int i=1;i<=9;i++)
		ans=a[i]*i+ans;  //按题意计算出第13位
	ans=ans%11;  
	if(ans!=10) //判断是否余数为10
	{
		if(ans==tot-'0') //如果相等直接输出RIGHT
			cout<<"Right";
		else //错误则输出正确的ISBN号码
		{
			cout<<a[1]<<'-';
			for(int i=2;i<=4;i++)
				cout<<a[i];
			cout<<'-';
			for(int i=5;i<=9;i++)
				cout<<a[i];
			cout<<'-'<<ans;
		}
	}
	else //为10
	{
		if(tot=='X') //是X
			cout<<"Right";
		else  //不是X
		{
			cout<<a[1]<<'-';
			for(int i=2;i<=4;i++)
				cout<<a[i];
			cout<<'-';
			for(int i=5;i<=9;i++)
				cout<<a[i];
			cout<<'-'<<'X';
		}
	}
}
```

~~所以又水了一篇题解！~~

## emmm...