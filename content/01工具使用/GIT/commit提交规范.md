---
date: 2024-06-03
tags:
  - pf/xsj
  - status/done
  - pf/专业知识
---

commit提交信息包括以下四点：

1. 提交类型（Commit Type）：（粗体代表建议类型，其他类型可选择是否使用）
	- **init：新建工程**
	- **feat：新增功能（feature）**
	- **fix：修复bug**
	- **revert：回退**
	- **test：增加或修改测试代码**
	- **base：平台和方案修改**
	- docs：文档修改
	- style：代码样式调整，不影响代码逻辑
	- refactor：代码重构，既不修复bug也不添加新功能
	- perf：性能优化
	- chore：构建过程或辅助工具的变动
2. 提交范围（Scope）：
	标明本次提交涉及的模块、组件、文件、分支等具体范围。
3. 提交主题（Subject）：
	简明扼要地描述本次提交的内容，避免使用过长或不清晰的描述。
4. 提交正文（Body）：
	可选项，可以提供更详细的信息，如问题原因、解决方案等。

例子如下：

```
init(main.c): 新建工程
feat(autoReclose): 修改重合闸充电时间
```
