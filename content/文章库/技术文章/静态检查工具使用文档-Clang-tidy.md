---
date: 2025-02-25
tags:
  - status/doing
  - kw/工具使用
  - pf/C语言
---
## 背景

需求：C/C++的静态检查工具，免费、易用、效果好、能输出报告文档。

经过对比评估（包括Cppcheck、PC-lint、PVS-Studio等），选择Clang-tidy作为静态检查工具，原因如下：

- 开源免费
- 检查规则全面
- 社区活跃
- 易于集成
- 支持自定义检查规则

## 解决方案

### 工具链运行机制

整个工具链的工作流程如下：

1. VSCode作为前端：
   - 提供代码编辑界面
   - 通过Language Server Protocol(LSP)与Clangd通信
   - 显示诊断信息和代码补全

2. Clangd作为语言服务器：
   - 接收VSCode的请求
   - 解析源代码生成AST(抽象语法树)
   - 基于compile_commands.json提供智能提示
   - 运行Clang-tidy进行代码分析

3. CMake的作用：
   - 扫描项目结构
   - 收集编译信息
   - 生成compile_commands.json
   - 提供构建系统支持

### compile_commands.json

这个文件是整个工具链的关键，它包含了每个源文件的编译命令，结构如下：

```json
[
  {
    "directory": "/path/to/project",
    "command": "gcc -c file.c -o file.o",
    "file": "file.c"
  }
]
```

生成方式有以下几种：

1. 在Linux环境下使用bear工具，编译的时候使用命令`bear make`即可
2. 使用Cmake构建的工程可以生成

难点：现在的使用场景比较复杂，一部分代码使用 Keil 编译，一部分代码使用 RealEvo-IDE 编译（在Win虚拟机里，不好装环境），一部分代码使用gcc 编译（在很老旧的虚拟机里，装不上各种环境）。

所以只能使用CMake构建，而我们使用 VSCode 仅仅是修改代码，使用 Clang 仅仅是想使用其代码静态检查的功能，并不是需要用CMake真正的进行构建，所以CMakeList的准确性不需要那么高。

所以考虑使用脚本来生成工程对应的CMakeList。

而生成报告也需要对应的脚本实现。

## 使用环境

### VSCode

VSCode主要的作用为编辑查看代码，为Clang、CMake提供前端。

1、安装过程中注意添加进右键菜单，然后正常安装流程

![](Zassets/Clangd.png)

2、安装一下插件，这些插件只提供前端功能，需要安装真正的Clang和CMake才能运行

![](Zassets/Clangd-10.png)

### Clang

安装 LLVM 工具包，里面包含Clang等各种工具。

1、安装过程中注意添加环境变量

![](Zassets/Clangd-1.png)

### msys2

msys2是一个包管理器，可以帮助我们安装CMake和Mingw（CMake构建需要依靠编译器，Mingw包含GCC）等各种工具

1、安装过程中尽量不要修改其文件夹（因为C盘不够的原因很多人喜欢将软件安装在其他盘，但对于运行环境之类的软件尽量使用默认路径，不然比较难找）

![](Zassets/Clangd-2.png)

2、安装过程中会卡在50%一会儿，等待就好了

3、安装完成后会默认打开一个命令行窗口，通过输入命令来安装

**安装 GCC**

```bash
pacman -S mingw-w64-x86_64-toolchain
```

**安装 CMake**

```bash
pacman -S mingw-w64-x86_64-cmake
```

4、添加环境变量

1. 打开 Windows 系统的“环境变量”设置：
    - 右键点击“此电脑” → “属性” → “高级系统设置” → “环境变量”。
2. 在“系统变量”中找到 `Path`，点击“编辑”。
3. 添加以下路径（根据实际安装路径调整）：
    - 64 位系统：`C:\msys64\mingw64\bin`

5、验证安装

完成上述步骤后，运行以下命令验证 GCC 是否可用：

```c
gcc --version
cmake --version
```

![](Zassets/Clangd-6.png)

### 实际运行

使用VSCode打开工程目录，插件会自动扫描安装的Mingw工具包，选择是

![](Zassets/Clangd-3.png)

给Cmake选择具体的工具包

![](Zassets/Clangd-4.png)

选择刚刚安装的mingw所包含的GCC

![](Zassets/Clangd-5.png)

如果此文件目录下包含CMakeLists（CMakeLists的生成方法请看最后一节），则会自动运行CMake生成对应的`compile_commands.json`

![](Zassets/Clangd-7.png)

配置clangd，使其能找到`compile_commands.json`

![](Zassets/Clangd-8.png)

配置参数`--compile-commands-dir=build`

![](Zassets/Clangd-11.png)

配置完成后，随便打开一个代码文件，就能看到Clang-tidy正常工作了，能提示对应的警告

![](Zassets/Clangd-9.png)

### 常见问题解决

1. CMake配置失败
   - 检查mingw是否正确安装
   - 确认环境变量是否正确配置
   - 检查CMakeLists.txt语法
   - **生成了build文件后，如果更改了项目文件夹名称，需要删除build文件夹，让CMake重新生成，否则会报错！！！**

2. Clang-tidy无法正常工作
   - 确认compile_commands.json位置正确
   - 检查clangd配置参数是否正确
   - 确认源文件编码格式（推荐UTF-8）

## 代码审查

### CMakeLists.txt生成

1、选择好对应的文件夹

![](Zassets/8309-T3配置工具使用说明.png)

2、点击生成CMakeLists.txt，程序会遍历项目文件夹下的所有 .c .h 文件生成来CMakeLists.txt。

![](Zassets/8309-T3配置工具使用说明-1.png)

如果有.gitignore文件，则会排除.gitignore文件里记录的文件夹，同时，对8309平台保护程序和T3平台保护程序有特别的优化，对Keil工程有特别的优化。

### 代码审查

#### 编程过程中代码审查

具体参考《静态检查工具使用文档-Clang-tidy》，使用VSCode打开工程文件，VSCode识别到CMakeLists.txt后，CMake会运行，生成build文件夹，文件夹下会有compile_commands.json文件。

clang-tidy依靠compile_commands.json进行静态检查，会显示在编辑器中，可以根据编辑器的警告来对代码进行优化。

![](Zassets/8309-T3配置工具使用说明-3.png)

#### 阶段性代码审查

1、选择好对应的文件夹

确保工程目录下有VSCode生成的build文件夹。

2、点击代码审查

就会运行代码审查功能，且会显示实时进度报告和进度条。

![](Zassets/8309-T3配置工具使用说明-4.png)

3、生成报告

运行完成后会生成一个excel报告，如下：

![](Zassets/8309-T3配置工具使用说明-5.png)

4、自定义规则

软件目录下有个help目录，里面可以自定义这四个文件：

![](Zassets/8309-T3配置工具使用说明-6.png)

1. generate_cmake_ignore.txt：生成CMakeLists.txt忽略文件夹目录
2. file_ignore.txt：静态检查忽略文件夹目录
3. rule_ignore.txt：静态检查忽略规则
4. .clang-tidy：clang-tidy运行规则
