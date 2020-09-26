---
title: Hyper-V的安装及使用
date: 2020-02-28 9:13:27
categories: 教程
tags:
	- 教程
	- 虚拟机
	- Hyper-V
thumbnail: https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting/mcmohen_imgmcmohen_imgteacher.jpg
---

### Hyper-V，一款win10自带的虚拟机平台，你确定不看看？

<!--more-->

~~不是windows系统的可以byebye了！~~

> 声明：本文参考了[《win10 家庭中文版没有Hyper-V，这样安装一步搞定》](https://blog.csdn.net/weixin_37695006/article/details/91589895)

1. ### Hyper-V的安装

   首先呢，你要确定你的windows有没有自带Hyper-V

   打开控制面板-点击程序-启用或关闭Windows功能

   ![微信图片_20200228102600.png](https://i.loli.net/2020/02/28/yFLTG9p1RJbPBwh.png)

   找到虚拟机平台或虚拟机平台的英文~~(什么vitual platform)~~并打上勾！

   ![微信图片_20200228102648.png](https://i.loli.net/2020/02/28/tXUwEkNMgridzLu.png)

   然后看一下有没有Hyper-V文件夹，如果有就打上勾并**点击确定**（跳过以下安装Hyper-V的教程）

   如果没有则直接**点击确定**（通常家庭版windows是没有的）

   ![微信图片_20200228102723.png](https://i.loli.net/2020/02/28/uXEA4m3yk2LFMCd.png)

   如果没有自带Hyper-V请看这里（如果有Hyper-V的则立即重启后看第二步教程）

   在桌面右键新建一个文本文档，将以下代码复制进去：

   ```
   pushd "%~dp0"
   dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
   for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
   del hyper-v.txt
   Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
   ```

   保存并退出，重命名为Hyper-V.cmd文件(其实把后缀改为cmd就好了)

   然后右键选择**以管理员身份运行**

   ![微信图片_20200228112337.png](https://i.loli.net/2020/02/28/1HZuiACFejXaQJ6.png)

   如果弹出一个 用户帐户控制 - Windows命令处理程序 的对话框，我们点击：是

   然后系统自动进行Windows命令处理，我们等待处理完成以后，**【这个过程中不要关闭窗口或者关机】**在最末处输入：Y，电脑自动重启，进行配置更新（大概要等个5到10分钟左右）

   ![微信截图_20200228112407.png](https://i.loli.net/2020/02/28/tR9vHlfUVEGFaAx.png)

   电脑重启之后，在window管理工具中可以看到已经成功安装了Hyper-V。这样就可以在不用重装专业版系统的情况下，使用Hyper-V虚拟机了

   ![微信截图_20200228112422.png](https://i.loli.net/2020/02/28/iryPhScakbRCgFA.png)

   如果还是没有Hyper-V,请回到启用或关闭Windows功能里面找到Hyper-V并打上勾点击确定（然后重启电脑）

   ![微信图片_20200228102723.png](https://i.loli.net/2020/02/28/uXEA4m3yk2LFMCd.png)

2. ### Hyper-V的配置

   看到这里想必你们都已经安装好Hyper-V了

   那就开始配置一个虚拟机出来吧！

   打开Hyper-V，在左边栏右键你的计算机（我的是LAPTOP-xxxxxx），选择新建-虚拟机

   ![无标题.png](https://i.loli.net/2020/02/28/V5ZiEblNP4GOKwd.png)

   ![微信截图_20200228113758.png](https://i.loli.net/2020/02/28/By9st4kl3poSadj.png)

   第二步建议把虚拟机放在非系统盘（要不你C盘爆炸了别找我），名称随意

   ![微信截图_20200228113857.png](https://i.loli.net/2020/02/28/aFArpE7LsciHJRO.png)

   此处选择第一代（选第二代会出现奇奇怪怪的问题）

   ![微信截图_20200228113914.png](https://i.loli.net/2020/02/28/xOBt8cGYEh1uH9U.png)

   因为我电脑是8G内存，所以我分配了2G给虚拟机

   ![微信截图_20200228113936.png](https://i.loli.net/2020/02/28/5Ae3RnDX2BFHhNl.png)

   网络配置下面会讲，先下一步！

   ![微信截图_20200228113947.png](https://i.loli.net/2020/02/28/CNqjibtrIZBdaUw.png)

   这一部不用动，直接进行下一步！

   ![微信截图_20200228114002.png](https://i.loli.net/2020/02/28/lMSJBnhUHOi759Z.png)

   这时候你要有iso镜像文件（也就是你选择的系统，网上随便都可以下载，我选择的是win10 64位镜像）

   没有的可以用我的-->[win10 64位镜像](https://share.mcmohen.top/?/iso%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6/win10-64%E4%BD%8D-2019.iso)

   ![微信截图_20200228114035.png](https://i.loli.net/2020/02/28/EA4x98nCslwbMeP.png)

   点击完成，完成虚拟机的创建

   ![微信截图_20200228114047.png](https://i.loli.net/2020/02/28/wqVX6tuAfg8LdzU.png)

   这时候你就可以启动你的虚拟机了（现在你的虚拟机是没有网络的）

   ![微信截图_20200228115032.png](https://i.loli.net/2020/02/28/KNo6UAtSTezPMr8.png)

   第一次开机会比较漫长，请耐心等待。。。

3. ### Hyper-V的网络配置

   终于到了激动人心的网络配置环节
   
   点击右边的虚拟交换机管理器
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/192e31c9b551012d1731094b7ca70201.jpg)
   
   选择新建虚拟网络交换机-选择内部-点击**创建虚拟交换机**（图中圈错了QAQ）
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信图片_20200228150038.png)
   
   名字随意，点击确定
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228160902.png)
   
   此时，在控制面板-网络和Internet-网络和共享中心中，可以看到如下未识别的链接（我开了两个，你们应该只有一个）：
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228161215.png)
   
   点击你已连接的网络
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228161256.png)
   
   选择属性-共享，勾选“允许其他网络用户通过此计算机的Internet连接来连接”并在下方“家庭网络连接”中选择刚刚创建的虚拟交换机——vEthernet (新建虚拟交换机)，点击“确定”。
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228161339.png)
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信图片_20200228161432.png)
   
   回到Hyper-V，点击设置-网络适配器-选择你创建的虚拟交换机-点击确定
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228161701.png)
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信图片_20200228162210.png)
   
   **最后一步啦！**启动你的虚拟机，打开网络和共享中心，在对应的网络连接下面的TCP/IP协议中设置为“自动获取IP地址”和“自动获取DNS服务器”，则可进行网络连接。（其实默认就是这么设置的，应该启动虚拟机就已经连上网络了）
   
   ![ass](https://cdn.jsdelivr.net/gh/mcmohen/ImageHosting2/微信截图_20200228162605.png)

### END完结散花