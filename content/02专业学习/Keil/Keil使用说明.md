---
date: 2024-08-06
tags:
  - import/pf
  - pf/嵌入式
url: https://www.lxlinux.net/e/stm32/mdk-development-tool-tutorial.html
---
## 2 主界面详解

### 2.1 主界面概述

初学者一打开 MDK 是不是人都傻了，有这么多东西，不过不用担心，今天肯定给大家介绍清楚。先给大家简单介绍一下主界面的各个分区，MDK 主要由 菜单栏、工具栏、编辑窗口、信息窗口 四个分区组成，如下图所示：

![](Zassets/6540680ac458853aef6d5b52.jpg)

下面给大家详细介绍这四个分区的作用都是啥。

### 2.2 菜单栏详解

![](Zassets/3j5ws8q64fdem1syuxmez7t2qhosdrruyhec740si7vjfl8v9g.jpg)

#### 2.2.1 File（文件）

File 菜单主要是文件相关操作，比如新建、打开、关闭、保存等等，相信大家玩了这么久的 Windows 电脑，对这个菜单一定不陌生，几乎所有软件的 File 菜单都大同小异。

![](Zassets/4uy60p7tim3q6c2nmhwqgq4rwkid7kn0ytr3vy0zfa10xblcze.jpg)

#### 2.2.2 Edit（编辑）

![](Zassets/3tvdfrwhxiogu8j2lpuxnvno5kzphcku3tbvydeipa64broxu9.jpg)

#### 2.2.3 View（视图）

![](Zassets/22bhso9dftibvy6lpd3j4s975p6qxvkzi16qxmb6chukqi8qw9.jpg)

#### 2.2.4 Project（工程）

![](Zassets/4ahycjo3lgsqgik5hjwtj9bzwctaashxdg9gd95egqk7ilisgp.jpg)

#### 2.2.5 Flash（烧录）

![](Zassets/3dr3inuhtpo7y2tgkqx72rcgp3oqiaf771fn6sf5phr0e1he61.jpg)

#### 2.2.6 Debug（调试）

![](Zassets/209gdkgks3lncmdyaqjubgg16kckpz2kvzpsbxlphfquqht1m8.jpg)

#### 2.2.7 Peripherals（外部设备）

外部设备是仿真用的，我这里没有连接外部设备，所以没显示。

![](Zassets/25q4hdi5cc9z74vqhs0e4dbtz6h9tqehjh0bzrlctfyccjjrou.jpg)

#### 2.2.8 Tools（工具）

PC-Lint 是一款静态代码检测工具，需要另外安装。

![](Zassets/l9xv8g0h93x7uipfcht740sorzrg14l97vrihpb3m8emromv7.jpg)

#### 2.2.8 SVCS（软件版本管理系统）

SVCS（ softwate version control system ），软件版本管理系统。

![](Zassets/3v1ygrozfffp2v4g1exjwcppmc6xkt09cypdhzsxccjnkmoy6v.jpg)

#### 2.2.9 Windows（窗口）

![](Zassets/1l95odgpafg3gcmdpbw95sozhprddjc48j3losj2dqt05btmbk.jpg)

#### 2.2.10 Help（帮助）

![](Zassets/oix5na780glmgq3tggl5v45515egkasakxzsy7i60h80k6ssv.jpg)

### 2.3 工具栏详解

我将从左到右，从上到下，分区介绍，每个的功能和快捷键。

![](Zassets/3pbsmdh5gdisl0p05l3fd3u200ofoy9g1t50ivlucn952umy5n.jpg)

#### 2.3.1 文件操作

![](Zassets/104m4m0b7q2lylwm93dxll8twu9876vo2yzi8ueh17ygda8ec6.jpg)

新建文件 Ctrl + N 打开文件 Ctrl + O 保存当前文件 Ctrl + S 保存所有文件 没有快捷键 剪切 Ctrl + X 复制 Ctrl + C 粘贴 Ctrl + V

#### 2.3.2 文件编辑与跳转

![](Zassets/4exmu4lir3th0o7hywlb0yywk1g5meq1q0eiddytqymhvk3snd.jpg)

撤销编辑 Ctrl + Z 恢复编辑 Ctrl + Y 跳转到上一步 Ctrl + - 跳转到下一步 Ctrl + Shift + -

#### 2.3.3 书签

![](Zassets/3okrtyxmn7kkzz78264k4j20je8c6wpg89gjiqv5j56zsi8axr.jpg)

添加书签 Ctrl + F2 跳转到上一个书签 Shift + F2 跳转到下一个书签 F2 清空所有书签 Ctrl + Shift + F2

#### 2.3.4 选中行操作

![](Zassets/22qvnwrwkptpp89cciv90ou02aeve4kjmzrd80pd2sntes16at.jpg)

插入缩进（Tab） Tab 取消缩进（Tab） Shift + Tab 注释选中行 没有快捷键 取消注释 没有快捷键

#### 2.3.5 查找操作

![](Zassets/1c0nwsamwl54ubtqhdr50ol6nejtyhnpoqt987x0zt5e95n8yk.jpg)

查找所有文本 Ctrl + Shift + F 查找文本输入框 查找单个文本 Ctrl + F 增加搜索 Ctrl + I

#### 2.3.6 调试

![](Zassets/222pirbg5dooj5eebcm4vnjeaztp2ao3ejgjovpw5kmxxwhdt3.jpg)

打开/关闭调试 Ctrl + F5 插入断点 F9 失能单个断点 Ctrl + F9 失能所有断点 没有快捷键 取消所有断点 Ctrl + Shift + F9

#### 2.3.7 窗口与配置

![](Zassets/2ispinwwg8ix6j9akp8cvdscl4xwup2tfhzsyrtsehhhu1hgzm.jpg)

窗口 没有快捷键 配置 没有快捷键（这个符号也称「扳手」，常用）

#### 2.3.8 编译与下载

![](Zassets/6evjtzmnoum035ikejwssm1qv59i80hel08eay0ngd3ya6wyt.jpg)

编译当前文件（单个） Ctrl + F7 编译目标文件（修改过的） F7 编译所有目标文件（重新编译） 没有快捷键 编译多个工程文件（多工程） 没有快捷键 停止编译 没有快捷键 下载程序 F8

#### 2.3.9 工程选项

![](Zassets/4e1cl9psfo3invlzpbf2gnjyjf4ns1jyurx9que0madm9y1gsu.jpg)

工程目标选择框 工程目标选项（配置） Alt + F7（这个符号也称「魔术棒」，常用）

#### 2.3.10 工程管理

都没有快捷键

![](Zassets/17taano9aw84rhoo53jxwjxwn2f6jzle0thr1o3qpj89lyer0j.jpg)

单工程管理（这个符号也称「品」，常用） 多工程管理 管理运行时环境 选择软件包 安装软件支持包

## 3 工程配置详解

首先点开「魔法棒」![](Zassets/1yxnh9nw726u7yr53tv49w8t9ffhjityq5sdi4c4wpyobpkrbm.jpg)，Options for Target。我会逐个介绍每个配置。

### 3.1 Device（设备）

![](Zassets/2ll5t6f5fkvdfpo403fu5zsggtn9kn3vj84gkj289guagy90zk.jpg)

### 3.2 Target（目标）

![](Zassets/3wegicdxa42ec14y8qwogo9tdaz9zi2lho9ltdyv5fioo8a1kp.jpg)

1：晶振频率。主要用于仿真调试用，一般使用硬件调试可以不用管这个值。

2：操作系统。是否选择 Keil 自带的 RTX 操作系统，一般都不选。

3：系统预览文件。我一般是默认使用系统自带，不选择自己定义的。

4：使用交叉模块优化、使用微库。交叉模块一般我不使用，微库常用于 printf 函数。

5：ROM 存储地址。这里的 ROM 存储指的是程序储存的地址，分片外和片内两种。

6：RAM 存储地址。RAM 存储地址和 ROM 道理一样，可以分片内和片外。常见例子"外部 SRAM 作为运行内存"。

### 3.3 Output（输出）

![](Zassets/337j4rtuds0oab86dhxutr7oi6btkmkww0ui4shmypjpi8rbgl.jpg)

1：输出路径。在编译的过程中，输出这些文件保存的文件夹。Keil V5 一般默认是保存在 Objects 文件夹下面，使用默认路径就好。Objects 文件夹的内容可以全部删除，备份代码的时候就可以删掉。

2：输出可执行文件名。用于定义输出的可执行文件和库的名称。像是我们常见的 HEX 文件。

3：输出可执行文件。它和输出库（4）是二选一，选择了输出可执行文件就不能选择输出库。

- Debug Infomation：输出调试信息。勾这个才能调试。
- Create HEX File：输出可执行 Hex 文件。不勾可就不输出 Hex 文件咯。
- Browse Information：输出浏览信息。勾这个才能用「go to definition of」，定位定义位置，可跳转到 4.2.2 看详细介绍。

tips：默认是只勾前两个，如果不勾第三个输出，编译就会很快，快两到三倍左右，看自己选择了。

4：输出库。输出的是静态库，并非动态库。

### 3.4 Listing（链接）

![](Zassets/2rbqugu3xm8s65qce182krcj5wj3wphup7fbe6ju6cf6jytc0q.jpg)

1：选择列表文件输出的文件夹。可设置文件页面的宽度，长度。

2：勾选上会输出汇编列表信息（产生后缀为 lst 的文件）。如果工程中没有汇编文件，则不会输出。

3：C 编译程序列表选项，勾选上可生成 txt , i 文件。

4：可选择生成或禁止生成 .map 文件。可设置生成代码的详细信息。可选择性的选取输出 MAP 文件。

### 3.5 User（用户）

![](Zassets/3imub5mpr6qi6x6jzjyngx53a2p2jsybqhrhrhrj8lnldvcbzf.jpg)

1：可设置在 Compile 前、Build 前、Build 后要运行的程序。

2：Run 'After-Build' Conditionally：只运行 'After-Build' 。

​ Beep When Complete：编译完成后发出「Beep」。

​ Start Debugging：启动调试程序。

### 3.6 C/C++

![](Zassets/1wsa9z75l03yknwgjbyirujpfuurqzf3abcxojwpab4ua3z40f.jpg)

1：预处理。做预定义，相当于在程序中的 `#define`。

2：语言代码生成。可以理解成 Complie、Build 到最后生成代码，用于优化代码大小和运行速度。

3：可设置包含路径、多功能控件，查看编译器控制字符串。

### 3.7 Asm

![](Zassets/3oqpd77qmi3yhkxn9my3fmfffw0ps3c7acamdrvko0q2pympcv.jpg)

1：有条件地装配控制符号。用于设置汇编条件

2：语言代码生成。

- Read-Only Position Independent：为常量生成独立的代码空间。
- Read-Write Position Independent：为可读写代码生成独立的代码空间。
- Thumb Mode：Thumb 模式。
- No Warnings：不警告。
- Execute-only Code：只执生成行代码。
- Split Load and Store Multiple：加载和存储多个分裂。
- No Auto Includes：不自动添加头文件。

3：可设置包含路径、多功能控件，查看装配控制字符串。

### 3.8 Linker（连接器）

![](Zassets/4clufb63ld7kkt6unkud87hbejskdp6qcsfb90gxxnv9hgalxd.jpg)

1：使用分散文件加载对话框Target页面。

- Make RW Sections Position Independent：使 RW 段独立。
- Make RO Sections Position Independent：使 RO 段独立。
- Don't Search Standard Libraries：不搜索标准库。
- Report 'might fail' Conditions as Errors：报告 'might fail' 条件认为是错误。
- X/O Base：X/O基地址。
- R/O Base：R/O基地址。
- R/W Base：R/W基地址。
- disable Warnings：警用警告。

2：分散文件。可以加载、查看、编辑分散文件。

3：可设置多功能控件，查看连接器控制字符串。

### 3.9 Debug（调试）

![](Zassets/67f30wkenev8ujsvzwdc36o1wdzj0plcsepjaaeq92vdqxaf4l.jpg)

1：配置硬件仿真。选择并配置自己的下载调试器。

2：配置模拟仿真，也叫软件仿真。

​ Limit Speed to Real-Time：将 CPU 模拟的速度限制为实时。此设置仅对模拟速度快于实时的目标有用。

3：Load Application at Startup：将在 Options for Target \> Output \> Name of Executable 名称字段中指定的目标文件加载到 uVision 调试器中。

​ Run to main()：执行指令直到到达 main() 并停止执行。禁用时，应用程序在第一条指令处停止。无论此选项如何，都会执行初始化文件中定义的命令。

​ Initialization File：指定可以包含 Debug Commands,Debug Functions，调试器配置设置和设备初始化命令的文件。

4：Restore Debug Session Settings：恢复在先前调试会话中为断点、观察窗口、性能分析器、内存窗口、工具箱和系统查看器定义的设置。

5：DLL：软件仿真和硬件仿真都需要使用动态库，动态库文件保存在 MDK 安装目录的 ARM\\BIN 下面。

### 3.10 Utilities

![](Zassets/5hdfwewzx1i0tac8fn9kjle4h2d0mkwxry70eufjdh8gipv1r8.jpg)

1：配置 FLASH 菜单。二选一，我一般用上面的 "Update Target Driver for Flash Programming"。

- Use Debug Driver：使用调试驱动。
- Update Target Before Debugging：调试之前更新项目。
- Setting：设置。很多初学者没有勾选 "Setting" 里的 "Reset and Run" （复位并运行），导致烧好的板子要按一下复位才运行。

2：配置图像文件处理。

## 4 使用技巧

给大家介绍一些 MDK5 的使用技巧，希望对大家有帮助，设置好后记得点 OK ，才会生效哦。

### 4.1 文本美化

#### 4.1.1 编辑器设置

将 tab 键设置为 4 个空格，这样代码拷贝代码到其他地方，格式就不会乱，不会出现对不齐的情况。

![](Zassets/2gp7wrwieni2iojt78le6ay5dzz76uih1jnlfw2l8zer1qer5q.jpg)

#### 4.1.2 字体和颜色设置

大家可以按自己的喜好去自定义这些设置，这里是以 C/C++ 文件的数字设置为例。

![](Zassets/3jlws9a2zhguav3don3emd50s17l4efgkgvgf802acsoibw8rj.jpg)

#### 4.1.3 用户关键字设置

设置好关键字后，关键字在代码里会高亮。

![](Zassets/1ydjzgu945fypub0p1lb70nfpu2dzr4tkenubw6udxgntdb4zv.jpg)

#### 4.1.4 代码提示与语法检测

![](Zassets/3g76xpyqwszxuzeswc745nq7p70ie9rg3opruts2f5v9npep3z.jpg)

设置好以后就是这样的效果：

![](Zassets/57wuysxypp9k7ihnqftw6q33tk1bxabbpdml6ph31tyk1a0ec8.jpg)

#### 4.1.5 设置保存

global.prop 文件，用于保存设置，在 "XXX\\UV4\\global.prop" 的路径下。

设置好后，建议把这个文件保存下来，如果你重装 MDK5 或者换了一台电脑，就可以用保存好的 global.prop 文件替换掉新的，就可以恢复原本设置。

### 4.2 代码编辑技巧

#### 4.2.1 tab 键技巧

tab 键刚刚已经设置成了 4 个空格，搭配上 2.3.4 提到的插入缩进、取消缩进，就可以快速规范和整理代码格式。

#### 4.2.2 定位函数或变量被定义位置

这里就要细说 3.3 提到的 Browse Information。

有两种方法定位：

- 选中函数/变量 + 右键 + 选 "Browse Information" 。
- 选中函数/变量 + F12。

![](Zassets/6540c251c458853aef79480c.jpg)

#### 4.2.3 快速注释与取消注释

各有两种方式。

快速注释：

- 选中要注释的代码 + 右键 + 选 Advanced 的 Comment Selection
- 选中要注释的代码 + ![](Zassets/5v2q8o5l40kex2uuu35r0b962yuzi6w3hdid89tf7jie0tpkx0.jpg)

快速取消注释：

- 选中要注释的代码 + 右键 + 选 Advanced 的 Uncomment Selection
- 选中要注释的代码 + ![](Zassets/1y92pmgsre5oiogoihrhumgko7fjzgcjh1u4mzti0cimfgm7nx.jpg)

### 4.3 查找与替换

#### 4.3.1 快速打开头文件

选中要打开的头文件 + 右键 + 选 Open Document "xxx.h"。

![](Zassets/6540cb3ec458853aef927928.jpg)

#### 4.3.2 查找

查找可以用 Find in Files 和 Find。看情况和个人习惯选择即可。

Find in Files：

![](Zassets/3qln4725sonolacsok26pc8w4uplthqdm4v9e3eqdaomkr4lc0.jpg)

查找效果如下：

![](Zassets/6540ce05c458853aef99770c.jpg)

Find：查找范围可以选 Current Document （当前文件）、Selection（选中范围）、Current Project（当前项目，效果就和 Find in Files 差不多了）。

![](Zassets/5glh4jidasipqkvexidsom54bdpra773ju31ovxjlhhh1c6pa7.jpg)

#### 4.3.3 替换

![](Zassets/6540d394c458853aefa8aaf5.jpg)

### 4.4 编译后问题的定位

我们在写代码时，编译后有 error/warning，在 Build Output（信息窗口），双击 error/warning 就可以跳转到问题位置。

![](Zassets/6541f48fc458853aefbfcfb6.jpg)

建议从上到下，一个个解决 error/warning。

### 4.5 窗口视图

对于初学者来说，有时候一不小心把主界面的某个窗口关了，就再也找不到恢复位置了，关了再开窗口也不会恢复。这里教大家怎么恢复默认窗口。

![](Zassets/6541f62ac458853aefc4464b.jpg)

![](Zassets/mszbduqjs5dft395hzlxzzqf3vcpknbg1mpcru3752cpjewsq.jpg)

### 4.6 编辑窗口字体大小

点击编辑窗口： Ctrl + 滚动鼠标，就可以调节字体大小啦。
