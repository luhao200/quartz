---
tags: [嵌入式, STM32, 内存管理, RAM, ROM]
created: 2025-12-23
updated: 2025-12-23
source: Claude对话
type: reference
status: complete
aliases: [嵌入式内存, MCU内存布局]
---
## 内存区域划分

### 基本概念

| 术语          | 全称                    | 说明                                                             |
| ----------- | --------------------- | -------------------------------------------------------------- |
| **Code**    | Code                  | 可执行代码段，存放程序指令                                                  |
| **RO Data** | Read-Only Data        | 只读数据，如 [const](../../C语言/关键字/const.md) 常量、[字符串](../../C语言/字符串.md)字面量 |
| **RW Data** | Read-Write Data       | 已初始化的可读写全局/静态变量                                                |
| **ZI Data** | Zero-Initialized Data | 零初始化数据，未初始化或初始化为 0 的全局/静态变量                                    |

### 汇总项

| 术语            | 计算公式                     | 存放位置        |
| ------------- | ------------------------ | ----------- |
| **Total RO**  | Code + RO Data           | Flash（只读区域） |
| **Total RW**  | RW Data + ZI Data        | RAM（运行时）    |
| **Total ROM** | Code + RO Data + RW Data | Flash 占用总量  |

---

## 内存布局

### Flash/ROM 布局

```c
┌─────────────────┐
│     Code        │  ← 程序指令
├─────────────────┤
│    RO Data      │  ← 常量数据
├─────────────────┤
│ RW Data *初始值* │  ← 启动时复制到 RAM
└─────────────────┘
```

### RAM 布局

```c
高地址 ┌─────────────────┐ ← 栈底（初始 SP）
       │     Stack       │ ← 向下增长
       │       ↓         │
       │                 │
       │       ↑         │
       │      Heap       │ ← 向上增长
       ├─────────────────┤
       │    ZI Data      │ ← 启动时清零
       ├─────────────────┤
       │    RW Data      │ ← 从 Flash 复制而来
低地址 └─────────────────┘
```

---

## Stack（栈）与 Heap（堆）

### 核心区别

| 特性 | Stack（栈） | Heap（堆） |
|------|-------------|------------|
| **分配方式** | 自动分配/释放 | 手动分配/释放 |
| **增长方向** | 高地址 → 低地址 | 低地址 → 高地址 |
| **分配速度** | 极快（移动栈指针） | 较慢（查找空闲块） |
| **大小限制** | 固定，较小（KB 级） | 灵活，较大 |
| **生命周期** | 函数返回即释放 | 手动 `free` 或程序结束 |
| **碎片问题** | 无 | 有 |

### 存储内容

```c
void example(int param) {          // param → 栈
    int local = 10;                 // local → 栈
    static int s = 5;               // s → RW Data（不在栈）
    
    int *p = malloc(100);           // p 本身 → 栈
                                    // p 指向的 100 字节 → 堆
    free(p);
}
```

| 位置 | 存储内容 |
|------|----------|
| **栈** | 函数参数、局部变量、返回地址、寄存器备份 |
| **堆** | `malloc`/`calloc`/`realloc` 分配的内存 |

### Stack_Size 与 Heap_Size

在启动文件（如 `startup_stm32xxx.s`）中定义：

```asm
Stack_Size  EQU  0x400   ; 1KB 栈
Heap_Size   EQU  0x200   ; 512B 堆
```

- **Stack_Size**：栈空间的==固定上限==，运行时无法扩展
- **Heap_Size**：`malloc` 可用的内存池总大小，设为 0 则禁用动态分配

> [!warning] 栈溢出
> 超出 Stack_Size 会导致栈溢出：
> - 无硬件保护：覆盖相邻内存，导致不可预测行为
> - 有 MPU 保护：触发 HardFault 异常

---

## STM32 特殊 RAM 区域

以 STM32F429 为例：

| 区域 | 大小 | 特点 |
|------|------|------|
| **SRAM1** | 192KB | 通用，DMA 可访问 |
| **CCM** | 64KB | 仅 CPU 可访问，==DMA 不可用== |

```c
// 将变量放入 CCM（适合纯 CPU 计算的大数组）
__attribute__((section(".ccmram"))) uint8_t buffer[1024];
```

---

## const 的正确使用

```c
// 存 ROM（正确）
const uint8_t table[] = {1, 2, 3};

// 存 RAM（指针本身可变）
const uint8_t *p = table;

// 存 ROM（指针和数据都不可变）
const uint8_t * const p = table;

const uint8_t *p：数据不可改，指针可改
uint8_t * const p：数据可改，指针不可改
const uint8_t * const p：两者都不可改
```

> [!tip] 经验
> 忘记加 `const` 会导致常量表占用宝贵的 RAM 空间

---

## 启动时内存初始化

```c
上电 → Reset_Handler → __main（C库初始化）
                          ├── 复制 RW Data：ROM → RAM
                          ├── 清零 ZI Data
                          └── 调用 main()
```

> [!note] 注意
> 在 `main()` 之前访问全局变量可能未初始化

---

## 常见陷阱与解决

| 问题 | 原因 | 解决 |
|------|------|------|
| 局部大数组导致崩溃 | 栈溢出 | 改为 `static` 或全局 |
| DMA 传输失败 | 缓冲区在 CCM | 移到 SRAM |
| `malloc` 返回 NULL | 堆耗尽或 `Heap_Size=0` | 增大堆或改用静态分配 |
| 常量表占用 RAM | 忘记加 `const` | 确保使用 `const` |
| 非对齐访问效率低 | 结构体成员未对齐 | 合理排列成员顺序 |

---

## 容量规划

### 查看实际占用

编译后查看 `.map` 文件末尾：

```c
Total RO  Size (Code + RO Data)    xxxxx (xx.xxKB)
Total RW  Size (RW Data + ZI Data) xxxxx (xx.xxKB)
Total ROM Size (Code + RO Data + RW Data) xxxxx (xx.xxKB)
```

### RAM 实际占用计算

$$
RAM_{total} = RW\ Data + ZI\ Data + Stack\_Size + Heap\_Size
$$

### 规划建议

- [ ] ROM/RAM 占用预留 10%-20% 余量
- [ ] 优先关注 RAM（嵌入式稀缺资源）
- [ ] 不用动态分配时，`Heap_Size` 设为 0
- [ ] 栈大小预留 20%-50% 安全余量

---

## 最佳实践

1. **优先使用栈**：局部变量、小型临时缓冲区
2. **避免堆**：如必须使用，考虑内存池或一次性分配
3. **监控栈使用**：用特定模式填充栈区，运行后检查水位线
4. **合理使用 const**：确保只读数据存放在 Flash
5. **注意特殊 RAM**：DMA 缓冲区不要放在 CCM
