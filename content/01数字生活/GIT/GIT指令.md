---
title: GIT指令
date: 2024-04-16 22:44:26
tags: 
---

|      |      |
|--------|------------------|
|把文件添加到仓库|git add readme.txt|
|全部添加|git add .|
|把文件提交到仓库|git commit -m "创建一个文件"|
|查看仓库信息|git status|
|查看文件变化|git diff|
|查看提交历史记录|git log|
|简洁查看|git log --pretty=oneline|
|回退上一版本|git reset --hard HEAD^|
|跳转指定版本|找到commit id1094adb…<br>git reset --hard 1094a|
|查看操作命令的记录|git reflog|
|丢弃工作区的修改|git checkout -- readme.txt|
