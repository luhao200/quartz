---
date: 2024-04-28
tags:
  - status/todo
  - pf/专业知识
---

- 生成COMPILE_COMMANDS
	- set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
- CMakeLists.txt ^592d1a

- [vscode](../VSCode/VSCode.md) C/C++使用COMPILE_COMMANDS
    - 生成c_cpp_properties.json文件
        - 在vscode中使用ctrl++shift+P，运行 C/Cpp: Edit configurations(JSON)
        - 添加这一项
        - "compileCommands": "${workspaceFolder}/cmake-build-debug-mingw-vscode/compile_commands.json"
