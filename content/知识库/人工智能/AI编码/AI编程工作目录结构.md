---
date: 2024-11-29
tags:
  - pf/xsj
  - import/xsj
  - status/done
---
## 工作目录文件结构

- 装置型号
    - 项目名称
        - code
        - input
            - 项目输入源代码压缩包
            - 项目输入配置文件压缩包
        - doc
            - 方案、说明书
            - 硬件原理图
            - 会议纪要
            - 通信点表
        - output
            - 项目归档输出
            - 项目过程性输出
            - **软件修改记录及测试范围说明**
            - **自测试记录表**
        - reference
        - tool

## code目录结构

- code
    - .git
    - .gitignore
    - .claude
    - .codex
    - .idea
    - docs
        - spec
            - feat1
                - briefrequire.md（简要需求文档
                - require.md（需求文档
                - hw-sch（原理图
                - ref-code（其他仓库相关的代码，通过软连接实现（mklink /D 目标目录 源目录
                - 一些其他类型资料，如方案、等等
            - feat2
        - wiki
    - openspec
    - README.md
