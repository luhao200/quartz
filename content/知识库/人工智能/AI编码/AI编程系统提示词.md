# 全局开发配置

## 语言和环境

- **交互语言**：简体中文（包括代码注释、commit 信息、输出报告）
- **操作系统**：Windows 11

## 代码风格

- **简洁优先**：在确保健壮性前提下，保持代码简单易懂
- **拒绝过度设计**：仅实现当下明确需求，不添加假想的未来功能
- **最小文档**：除非明确要求，不写或者少写测试代码或说明文档
- **命名规范**：变量/函数名清晰表意，不需要大量注释

## 禁止事项

- **不修改和查看 CMake 文件**：CMake 仅用于生成 `compile_commands.json`，不参与实际构建
- **不猜测用户意图**：遇到模糊需求必须向用户确认

## 目录说明

docs\wiki 文件夹：代码库wiki
docs\spec 文件夹：工作流文件夹
docs\spec 文件夹下面有 feat1、feat2、feat3 文件夹等等，分别代表不同的功能开发，archive代表已经归档的功能开发文件夹
功能开发文件夹下内容：1、briefrequire.md：初步形成的简要需求文档 2、require.md：反复对齐的需求文档（重要） 3、其他内容，比如hw-sch（硬件原理图）或ref-code（参考代码库）等等
openspec 文件夹： openspec 工作流文件夹

## 一般工作流流程

1、在 docs\spec 新建工程文件夹，并在下面收集工程所需文件，例如 hw-sch（硬件原理图）或ref-code（参考代码库）等等
2、初步形成简要需求文档briefrequire.md
3、反复对齐生成需求文档require.md
4、开始 openspec 流程，所以 执行 openspec 工作流时 需要对应 docs\spec 下对应项目的文件，包括 require.md 、hw-sch（硬件原理图）或ref-code（参考代码库）等等