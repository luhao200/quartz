---
title: define const typedef
date: 2024-04-16 22:44:26
tags: 
---

定义常量
把==常量定义为大写字母==形式，是一个很好的编程习惯。
<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 44%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr class="header">
<th></th>
<th>#define 预处理器</th>
<th>const 关键字</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>作用</td>
<td>在程序中定义一个常量，它在编译时会被替换为其对应的值</td>
<td>用于声明一个<mark>只读变量</mark>，即该变量的值不能在程序运行时修改</td>
</tr>
<tr class="even">
<td>使用</td>
<td>#define 常量名 常量值</td>
<td>const 数据类型 常量名 = 常量值;</td>
</tr>
<tr class="odd">
<td>注意</td>
<td><p>#define N 2+3</p>
<p>double a;</p>
<p>a = (float)N/(float)2;</p>
<p>在编译时我们预想 a=2.5，实际打印结果是 3.5 原因是在预处理阶段，编译器将 a=N/2 处理成 a=2+3/2，这就是 define 宏的边缘效应，所以我们应该写成 #define N (2+3)</p></td>
<td><p>const int var;X</p>
<p>const int var;</p>
<p>var = 5;X</p>
<p>const int var = 5;</p></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>替换机制</td>
<td>定义的常量在编译时会被直接替换为其对应的值</td>
<td>声明一个具有类型的常量。此常量在程序运行时会分配内存，并且具有类型信息</td>
</tr>
<tr class="even">
<td>类型检查</td>
<td>不进行类型检查，只是进行简单的文本替换</td>
<td>具有类型信息，编译器可以对其进行类型检查。这可以帮助捕获一些潜在的类型错误</td>
</tr>
<tr class="odd">
<td>作用域</td>
<td>没有作用域限制，它在定义之后的整个代码中都有效</td>
<td>具有块级作用域，只在其定义所在的作用域内有效</td>
</tr>
<tr class="even">
<td>调试和符号表</td>
<td>在符号表中不会有相应的条目，只是进行文本替换</td>
<td>会在符号表中有相应的条目，有助于调试和可读性</td>
</tr>
<tr class="odd">
<td>空间占用</td>
<td>给出的是立即数，在内存中有若干个拷贝</td>
<td>const 可以节省空间，避免不必要的内存分配，<br />
从汇编的角度来看，只是给出了对应的内存地址，<br />
在程序运行过程中只有一份拷贝（因为是全局的只读变量，存在静态区）</td>
</tr>
</tbody>
</table>
通常情况下，==建议使用 const 关键字来定义常量==

\#define NUM 3.14159 //常量宏

const doulbe Num = 3.14159; //此时并未将Pi放入ROM中 ......

double i = Num; //此时为Pi分配内存，以后不再分配！

double I= NUM; //编译期间进行宏替换，分配内存

double j = Num; //没有内存分配

double J = NUM; //再进行宏替换，又一次分配内存！
volatile 关键字
遇到这个关键字声明的变量，编译器对访问该变量的代码就==不再进行优化==，从而可以提供对==特殊地址的稳定访问==。

当要求使用 volatile 声明的变量的值的时候，系统总是重新从它所在的内存读取数据，即使它前面的指令刚刚从该处读取过数据。而且读取的数据立刻被保存。

volatile int i=10;

int a = i;

...

// 其他代码，并未明确告诉编译器，对 i 进行过操作

int b = i;

volatile 指出 i 是随时可能发生变化的，每次使用它的时候必须从 i的地址中读取，因而编译器生成的汇编代码会重新从i的地址读取数据放在 b 中。

而优化做法是，由于编译器发现两次从 i读数据的代码之间的代码没有对 i 进行过操作，它会自动把上次读的数据放在 b 中。而不是重新从 i 里面读。

这样以来，==如果 i是一个寄存器变量或者表示一个端口数据就容易出错==，所以说 volatile 可以保证对特殊地址的稳定访问。
typedef
为类型取一个新的名字。下面的实例为单字节数字定义了一个术语 BYTE：

typedef unsigned char BYTE;

在这个类型定义之后，标识符 BYTE 可作为类型 unsigned char 的缩写，例如：

BYTE b1, b2;

按照惯例，定义时会==大写字母==，以便提醒用户类型名称是一个象征性的缩写，但您也可以使用小写字母

可以使用 typedef 来为用户自定义的数据类型取一个新的名字，实例：

typedef struct Books

{

char title\[50\];

char author\[50\];

char subject\[100\];

int book_id;

} Book;

int main( )

{

Book book;

strcpy( book.title, "C 教程");

strcpy( book.author, "Runoob");

strcpy( book.subject, "编程语言");

book.book_id = 12345;

return 0;

}

typedef vs \#define

typedef 仅限于为类型定义符号名称

\#define 不仅可以为类型定义别名，也能为数值定义别名

typedef 是由编译器执行解释的

\#define 语句是由预编译器进行处理的
