---
date: 2024-05-09
tags:
  - pf/C语言
  - status/done
url: https://www.runoob.com/cprogramming/c-typedef.html
---
C 语言提供了 **typedef** 关键字，您可以使用它来为类型取一个新的名字。

下面的实例为单字节数字定义了一个术语 **BYTE**：

```c
typedef unsigned char BYTE;
```

在这个类型定义之后，标识符 BYTE 可作为类型 **unsigned char** 的缩写，例如：

```c
BYTE  b1, b2;
```

按照惯例，定义时会**大写字母**，以便提醒用户类型名称是一个象征性的缩写

您也可以使用 **typedef** 来为用户自定义的数据类型取一个新的名字。
例如，您可以对[结构体](结构体.md#^f80881)使用 typedef 来定义一个新的数据类型名字，然后使用这个新的数据类型来直接定义结构变量。