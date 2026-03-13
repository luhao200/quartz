## 模板

```CMakeList
cmake_minimum_required(VERSION 3.30)  
project(X13606Update)  
  
set(CMAKE_C_STANDARD 99)  
  
add_definitions(  
        -DUSE_HAL_DRIVER  
        -DSTM32F407xx  
        -DLWIP_NOASSERT
        -D__FPU_PRESENT=1U
        -DARM_MATH_CM4
        -D__CC_ARM
        -D__TARGET_FPU_VFP
#       -DDEBUG  
        -UWIN32)  

include_directories(Drivers/CMSIS)

add_executable(1640_cubemx_stm32f407zet6  
        Drivers/CMSIS/Device/ST/STM32F4xx/Include/stm32f407xx.h
        Src/tim.c  
        Src/usart.c)
```

## 生成方法

1、使用CLion生成
2、使用配置软件生成
3、Keil可根据工程添加`add_definitions`宏定义，和`include_directories`头文件目录
4、set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
