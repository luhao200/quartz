---
title: Cat-dog-identification
date: 2024-04-16 22:44:26
tags:
  - kw/博客
  - status/archive
  - kw/专业知识
---

## 摘要

本文介绍了通过 Python 应用卷积神经网络算法和数字图像处理相关技术实现猫狗识别的方法，并利用 Tkinter 模块编写了猫狗图像识别程序的 GUI。通过多次重复测试，反复训练，得到一个较好的模型，识别正确率达到一个可观的程度。本小组在此过程中学习了卷积神经网络算法的原理，了解了计算机视觉处理图片的过程。

## 实验原理

### 卷积神经网络

卷积神经网络是一类包含卷积计算且具有深度结构的前馈神经网络，是深度学习的代表算法之一。仿造生物的视知觉机制构建，可以进行监督学习和非监督学习，其隐含层内的卷积核参数共享和层间连接的稀疏性使得卷积神经网络能够以较小的计算量对像素进行学习、有稳定的效果且对数据没有额外的特征工程要求。
卷积神经网络是在前馈神经网络的隐藏层做的改变，它的隐藏层包括卷积层、池化层、全连接层三部分。

### 输入层：

卷积神经网络的输入特征需要进行标准化处理。在将学习数据输入卷积神经网络前，需将分布于 [0，255] 的原始像素值归一化至 [0，1] 区间。输入特征的标准化有利于提升卷积神经网络的学习效率和表现。

### 卷积层（包含有卷积核、卷积层参数、激励函数）：

卷积层的功能是对输入数据进行特征提取，其内部包含多个卷积核，组成卷积核的每个元素都对应一个权重系数和一个偏差量。卷积核在工作时，会有规律地扫过输入特征，在区域内对输入特征做矩阵元素乘法求和并叠加偏差量。

#### 卷积层参数

包括卷积核大小、步长、填充。卷积核越大，可提取的输入特征越复杂。步长定义了卷积核相邻两次扫过特征图时位置的距离。随着卷积层的堆叠，特征图的尺寸会逐步减小。为此，填充是在特征图通过卷积核之前人为增大其尺寸以抵消计算中尺寸收缩影响的方法。常见的填充方法为按0填充和重复边界值填充。

#### 激励函数

卷积层中包含激励函数以协助表达复杂特征，类似于其它深度学习算法，卷积神经网络通常使用线性整流函数（Rectified Linear Unit, ReLU）。

### 池化层：

在卷积层进行特征提取后，输出的特征图会被传递至池化层进行特征选择和信息过滤。池化层包含预设定的池化函数，其功能是将特征图中单个点的结果替换为其相邻区域的特征图统计量。池化层选取池化区域与卷积核扫描特征图步骤相同，由池化大小、步长和填充控制。两者最大区别在于卷积核的不同（池化是一种特殊的卷积过程）。最大池化层就是在缩放图片，减少参数。

### 全连接层：

卷积神经网络中的全连接层等价于传统前馈神经网络中的隐含层（每个神经元与上一层的所有神经元相连）。全连接层位于卷积神经网络隐含层的最后部分，并只向其它全连接层传递信号。特征图在全连接层中会失去空间拓扑结构，被展开为向量并通过激励函数。全连接层的作用则是对提取的特征进行非线性组合以得到输出，即全连接层本身不被期望具有特征提取能力，而是试图利用现有的高阶特征完成学习目标。

### 输出层：

卷积神经网络中输出层的上游通常是全连接层，因此其结构和工作原理与传统前馈神经网络中的输出层相同。在图像识别中，输出层直接输出识别结果。

## 实验内容

### 导入所需要的各种包

```python
from keras.models import Sequential
from keras.layers import Conv2D
from keras.layers import MaxPool2D
from keras.layers import Dense
from keras.layers import Flatten
from keras.optimizers import SGD
from keras.preprocessing.image import ImageDataGenerator
from keras.models import load_model

import tensorflow as tf

import tkinter
import tkinter.filedialog
import numpy as np
from PIL import Image, ImageTk
```

Keras 是一个由 Python 编写的开源人工神经网络库，可以作为 Tensorflow 的高阶应用程序接口，进行深度学习模型的设计、调试、评估、应用和可视化。
TensorFlow是一个基于数据流编程（dataflow programming）的符号数学系统，被广泛应用于各类机器学习（machine learning）算法的编程实现。
Tkinter 模块("Tk 接口")是 Python 的标准 Tk GUI 工具包的接口。

### 定义并训练网络神经网络模型

#### 模型定义

```python
def define_cnn_model():
    model = Sequential()
    # 卷积层
    model.add(Conv2D(32,
                     (3, 3),
                     activation="relu",
                     padding="same",
                     input_shape=(200, 200, 3)))
    # 最大池化层
    model.add(MaxPool2D((2, 2)))  # 池化窗格
    # Flatten层
    model.add(Flatten())
    # 全连接层
    model.add(Dense(128, activation="relu"))  # 128为神经元的个数
    model.add(Dense(1, activation="sigmoid"))
```

首先创建一个 Sequential 模型（Keras 中的一种神经网络框架，可以被认为是一个容器，其中封装了神经网络的结构）。
添加一个卷积层，卷积核的数量32，大小为3\*3，激活函数类型为线性整流函数，填充模式为0填充，输入图片是200\*200的彩色图片。再添加一个池化层，窗格的大小为2\*2。再添加一个 Flatten 层，将池化后的结果展开；再添加一个全连接层，神经元个数为128；最后再添加一个全连接层输出结果，因为结果只需判断猫狗，神经元个数为1。最后用随机梯度编译模型。

#### 例化模型并训练

```python
def train_cnn_model():
    model = define_cnn_model()
    # 创建图片生成器
    datagen = ImageDataGenerator(rescale=1. / 255)  
    train_it = datagen.flow_from_directory(
        "./train/",
        class_mode="binary",
        batch_size=64,
        target_size=(200, 200))     # 训练模型
    model.fit_generator(train_it,
                        steps_per_epoch=len(train_it),
                        epochs=5,
                        verbose=1)  
    model.save("my_model.h5")
```

首先实例化模型，接着创建图片生成器：将分布于 [0，255] 的原始像素值归一化至 [0，1] 区间，一次传入64张图片，并将图片缩放为200\*200。
然后再训练模型，这里有一个重要参数 epochs，设置为5，说明传入的图片学习5次。这样的重复学习，可以有效提高进度，但是当值比较大时，会非常耗时。最后将训练好的模型保存到项目文件夹下。

### 编写 GUI 代码用来实现猫狗图像识别

#### GUI 主程序

```python
# 生成tk界面 app即主窗口
app = tkinter.Tk()
# 修改窗口titile
app.title("猫狗识别程序")
# 设置主窗口的大小和位置
app.geometry("800x400")
# 选择模型的按钮
buttonSelm = tkinter.Button(app, text='选择模型', command=choosemod, bg='#F9FBFC')  
buttonSelm.place(x=50, y=125, height=50, width=100)
# 选择图片的按钮
buttonSelImage = tkinter.Button(app, text='选择图片', command=choosepic, bg='#F9FBFC')  
buttonSelImage.place(x=50, y=225, height=50, width=100)
# 运行的按钮
buttonSely = tkinter.Button(app, text='运行', command=run, bg='#F9FBFC')  
buttonSely.place(x=50, y=325, height=50, width=100)
# 图片显示框
lableShowImage = tkinter.Label(app, bg='#FAF5E1')  
lableShowImage.place(x=225, y=125, height=250, width=350)
# 结果框
var = tkinter.StringVar()  # 储存文字的类
var.set("等待结果")  # 设置文字
msg = tkinter.Label(app, textvariable=var, relief="sunken", bg='#F9FBFC')  
msg.place(x=650, y=325, height=50, width=100)
```

引用 tkinter 包生成主窗口。
定义三个布局，分别是选择模型按钮，选择图片按钮，运行程序按钮，图片显示框，识别结果显示框和说明。分别定义显示内容的大小和位置。将 GUI 程序置于主循环中，除非用户关闭，否则程序始终处于运行状态。

#### 选择模型和选择图片函数

```python
# 选择并显示图片
def choosepic():
    global patht  
    patht = tkinter.filedialog.askopenfilename()  
    img_open = Image.open(patht)  
    img = ImageTk.PhotoImage(img_open)  
    lableShowImage.config(image=img)  
    lableShowImage.image = img
# 选择模型
def choosemod():
    global pathmod  
    pathmod = tkinter.filedialog.askopenfilename()
```

用 filedialog.askopenfilename 函数选择图片文件地址和模型文件地址，最后图像将其保存到 lableshowimage 类下。

#### 运行图像识别程序

```python
def run():  
    model_path = pathmod  
    model = load_model(model_path)  
    pil_im = Image.open(patht, 'r')
    # 首先更改图片的大小
    pil_im = pil_im.resize((200, 200))
    # 将格式转为numpy array格式
    array_im = np.asarray(pil_im)
    # array_im = array_im.resize((4,4))
    array_im = array_im[np.newaxis, :]
    # 对图像检测
    result = model.predict([[array_im]])
    if result[0][0] > 0.5:  
        var.set("狗")
    else:  
        var.set("猫")
```

首先加载模型，然后读取图片，更改图片的大小并转换为 array 格式，最后用 model 包下的 predict 函数对图像进行检测。

## 系统调试

### 运行程序

由图程序成功运行。

![|675](https://sandox-1304793847.cos.ap-chongqing.myqcloud.com//photo/Cat-dog-identification.png)

### 误差测试

我们运行程序20次，人工判定程序识别的结果正确性，测出正确率为72.3%。更改学习次数为6，重新训练模型得到正确率为82.1%，更改学习次数为7，重新训练模型得到正确率为85.1%。由此可得，卷积神经网络学习次数越多，图片识别正确率越高。

### 总结

因为时间和硬件限制，所以我们训练模型和测试正确率的次数有限。本项目也可以添加卷积层，池化层，和添加学习次数来增加模型精确度。当然测试对象也不限制于猫和狗，如果有其他物体的大数量的测试集（因为猫狗数据集好找，所以只做了猫狗），也可以修改输出层神经元个数，来得到对应的测试程序。最后打包成 exe 文件，得到成品。
