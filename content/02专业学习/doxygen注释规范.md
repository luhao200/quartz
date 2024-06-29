---
date: 2024-05-09
tags:
  - kw/专业知识
  - status/done
url: https://blog.csdn.net/itworld123/article/details/127744143
---
## 一、注释模板

### 1、头文件模板

```
/** 
* @brief 摘要
* @file 文件名
* @author 作者
* @version 版本号
* @date 你啥时候搞的
* @note 注解
* @since 自从
*/
```

### 2、函数的注释

```
/**
* @brief 这里写这个函数是干什么用的
* @param i1[in] 输入参数1
* @param i2[in] 输入参数2
* @param o3[out] 输出参数1
* @return 返回值解释一下
* @warning 警告: 例如: 参数不能为空
* @note 注解
* @see 相当于是请参考xxoo函数之类的
*/
```

关于返回值也可以这样写：

```
@retval 1 成功
@retval 0 失败
```

还有几个你可能用上的东东：

```
@todo //我觉得这个描述算法比较好
@exception // 这个应该是用来说明你这个函数会抛出什么异常
@deprecated //这个函数可能在以后的版本中取消 所谓的什么过时列表
```

## 二、常用关键字列表

```
@author 作者的信息。
@brief 用于class 或 function 的简易说明。 
eg：@brief 本函数负责打印错误信息串。
@bug 被标记的代码会在 Bug 列表中出现。
@class 类名。
@date 日期。
@file 文件名，可以默认为空，DoxyGen 会自己加。
@param 主要用于函数说明中，后面接参数的名字，然后再接关于该参数的说明。
@return 描述该函数的返回值情况。
eg: @return 本函数返回执行结果，若成功则返回 TRUE，否则返回 FLASE。
@retval 描述返回值类型。
eg: 
@retval NULL 空字符串。
@retval !NULL 非空字符串。
@note 注解。
@attention 注意。
@name 分组名。
@warning 警告信息。
@enum 引用了某个枚举，Doxygen 会在该枚举处产生一个链接。 
eg：@enum CTest::MyEnum
@var 引用了某个变量，Doxygen 会在该枚举处产生一个链接。
eg：@var CTest::m_FileKey。
@class 引用某个类，格式：@class [] [] 
eg:@class CTest "inc/class.h"
@exception 可能产生的异常描述。 
eg: @exception 本函数执行可能会产生超出范围的异常。
@todo 对将要做的事情进行注释。
@see see also 字段。
@relates 通常用做把非成员函数的注释文档包含在类的说明文档中。。
@since 从哪个版本后开始有这个函数的。
@code 在注释中开始说明一段代码，直到 @endcode 命令。
@endcode 在注释中代码段的结束。
@remarks 备注。
@pre 用来说明代码项的前提条件。
@post 用来说明代码项之后的使用条件。
@deprecated 这个函数可能会在将来的版本中取消。
@defgroup 模块名。
@{ 模块开始。
@} 模块结束。
@class 声明一个类。
@version 版本号。
@fn 声明一个函数。
@par 开始一个段落，段落名称描述由你自己指定，比如可以写一段示例代码。
- 一级项目符号
-# 二级项目符号
```
