---
title: GIT-SVN
date: 2024-04-16 22:44:26
tags: 
---

创建仓库
git svn clone <https://192.168.1.241:8443/svn/222_工作过程检查文件/卢浩/EDCS-8110-3242/EDCS-8110-3242/>

更新SVN代码
git svn rebase

提交git库中文件到SVN版本库
本地开发完后git commit到本地git库，之后可用如下命令提交文件到SVN:
git svn dcommit
