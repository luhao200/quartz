---
title: TranslateGUI
date: 2024-04-16 22:44:26
tags:
  - status/doing
  - type/markdown笔记
  - kw/专业知识
---

# 1、功能说明

本工具主要用于配置文件和CID的翻译。
翻译文件模式分三种：35kv配置文件，110kv配置文件，CID。
翻译语言模式分两种：英文，英文和俄文。
程序会自动识别表格的中文，英文，英文缩写，简洁缩写（英文简写），俄文，俄文缩写，俄文简写这些列下面的内容。
程序会根据各列的内容进行优先级判断，如果有英文缩写列且英文缩写列下面有内容，则先用英文缩写列优先翻译。
优先级如下：
简洁缩写（英文简写） > 英文缩写 > 英文
俄文简写 > 俄文缩写 > 俄文

# 2、使用说明

## 2.1、打开软件

1.解压压缩包，双击文件目录下的main.exe。

![image-20240401111614172](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401111614172.png)

也可创建快捷方式到桌面打开。

![image-20240401111947282](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401111947282.png)

## 2.2、导入文件

1.点击按钮打开文件选择框。

![image-20240401112056959](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401112056959.png)

2.选择词条对照表，点击打开。

![image-20240401112422177](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401112422177.png)

3.此时报告框显示日志，即选择成功。

![image-20240401112550091](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401112550091.png)

4.同理选择其他文件。

- 如果翻译35kv：
    - ​表格选择：语言词条对照表.xlsx
    - ​文件1选择：language.txt
- 如果翻译CID：
    - ​表格选择：语言词条对照表.xlsx
    - ​文件1选择：device.cid
- 如果翻译110kv：
    - ​表格选择：语言词条对照表.xlsx
    - ​文件1选择：appdict.xml
    - ​文件2选择：sysdict.xml

## 2.3、开始翻译

1.选择完毕后。点击开始翻译按钮。

![image-20240401131319339](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401131319339.png)

2.翻译完毕后会生成结果。

35kv配置文件和110kv配置文件：
在原词条对照表目录下生成一个未翻译.xlsx，且会猜测其未翻译原因，内容如图：

![image-20240401132008571](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401132008571.png)

且会在原表标记：

![image-20240401132445249](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/image-20240401132445249.png)

CID文件：
在device.cid目录下生成目标文件：device-en.cid。
和一个未翻译词条文件（也是device-en.cid中残留的中文词条）：device-en未翻译.txt。

## 2.4、最后处理

未翻译词条可以新建一个表并将其加进去，重新运行程序或者手动翻译。
翻译完后对比前后翻译文件，下载到装置自测试。

# 3、TODO

1.检查CID表格和其他表格的差异。
