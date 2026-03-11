---
title: GIT初始化
date: 2024-04-17
tags:
  - status/done
  - pf/专业知识
url: https://blog.csdn.net/u011029104/article/details/131856831?spm=1001.2014.3001.5506
---
## 原因

有时使用http协议连接不上github，所以可以使用ssh连接。

## 步骤

- 进入目录
	- C:\Users\用户名\ssh
- 生成公钥
	- ssh-keygen -t rsa -C "你的GitHub邮箱" -f id_rsa
- 去github上生成一个ssh公钥
	- 将生成的id_rsa.pub的内容复制进去，名称为电脑名称
- 第一次上传
	- 将框内的key输入到下面的输入栏里面，然后的点ok
	- ![image1](Zassets/0f3216e479b9407ba10e17b09a4cec7b.png)
	- ![image2](Zassets/7fae726e9f67429dae5673d9048429f4.png)
