---
title: OpenCV中对图像噪声处理的常用形态学操作
date: 2023-11-06 21:14:39
tags:
top_img: https:/cdn.jsdelivr.net/gh/bee-line/Image_Hosting_Service/background.jpg

---
>
>  介绍了图像处理中的形态学操作，以及如何使用OpenCV库来执行这些操作。括腐蚀、膨胀、开运算、闭运算、梯度运算、顶帽运算和黑帽运算。每种操作都有不同的效果和应用。
# 一、噪声处理的基本操作
## 1.腐蚀
让图像沿着自己边界向内收缩，OpenCV通过核（kernel）来实现收缩计算。

>        在形态学中，可以理解为由N个像素组成的像素块，（每一个像素块，包含一个核（kernel））在图像的边缘移动，移动的过程中，核将会在图像的边缘抹除图像和核（kernel）重合但又没有越过核心（kernel）的像素点抹除。

### 例子一、消除仙人掌的刺
```Python
import cv2
import numpy as np
img =cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\xtz.png")
k=np.ones((3,3),np.uint8)#3*3矩阵定义核的大小
cv2.imshow( "img",img)
dst=cv2.erode(img,k)#腐蚀
cv2.imshow("dst",dst)
cv2.waitKey()
cv2.destroyAllwindows( )
```

```Python
dst=cv2.erode(src,kernel,anchor,iterations,borderType,borderValue)
```
>
>参数说明:
>src原始图像
>kernel腐蚀使用的核
>anchor可选参数  核的锚点位置
>iterations可选参数  腐蚀操作的迭代次数，默认值为1，后面两个参数建议采用默认
## 2.膨胀
>        膨胀操作与腐蚀操作相反，膨胀操作可以让图像沿着自己的边界向内扩张。

 >       同样是通过核来计，当核在图像的边缘移动时，核会将图像边缘填补新的像素
```Python
import cv2
import numpy as np
img=cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\xtz.png")
k=np.ones((9,9),np.uint8)
cv2.imshow( "img",img)
dst=cv2.dilate(img, k)
cv2.imshow( "dst",dst)
cv2.waitKey()
cv2.destroyAllwindows()

```Python
dst=cv2.dilate(src,kernel,anchor,iterations,borderType,borderValue)\
```
参数说明如下
>src原始图像
>kernel膨胀使用的核
>anchor可选参数核的锚点位置
>iterations可选参数膨胀操作的迭代次数  后面两个为可选参数建议取默认值

膨胀可以产生一种“近视眼”的效果。

## 3.开运算
>        开运算是将图像先进行腐蚀操作，再进行膨胀操作。

>开运算可以用来抹除图像**外部**的细节。

```Python
#开运算
import cv2
import numpy as np
img=cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\tzzy.png")
k=np.ones((6,6),np.uint8)#创建5*5的核
cv2.imshow( "img " ,img)
dst=cv2.erode(img,k)#腐蚀操作
dst=cv2.dilate(dst,k)#膨胀操作
cv2.imshow( "dst",dst)
cv2.waitKey()
cv2.destroyAllWindows()
```


## 4.闭运算
>        闭运算是将图像先进行膨胀操作，再进行腐蚀操作。

>闭运算可以抹除图像**内部**的细节。

```PYTHON
#闭运算
import cv2
import numpy as np
img = cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\rabbit.jpg")
img = cv2.resize(img, (900, 900))
k = np.ones((9,9),np.uint8)
cv2.imshow("img",img)
dst = cv2.dilate(img,k)
dst = cv2.erode(dst,k)
cv2.imshow("dst2",dst)
cv2.waitKey()
cv2.destroyAllWindows()
```

---

# 二、形态学其他方法：
>        腐蚀和膨胀都是形态学的基础操作，开运算和闭运算是两种方法的运用。除了这两种方法外，形态学还有集中比较有特点的运算，OpenCV提供了一个morphologyEx方法

>英 [mɔːˈfɒlədʒi]
>美 [mɔːrˈfɑːlədʒi]
```python
morphologyEx(src,op,kernel,anchor)
```

>src 原始图像

>op 操作类型

>kernel 操作过程中使用的核

>anchor 核锚点的位置

操作类型如下：

|参数值	|含义|
| :---: | :---: |
| cv2.MORPH_ERODE	| 腐蚀操作 |
| cv2.MORPH_DILATE	| 膨胀操作 |
| cv2.MORPH_OPEN	| 开运算，先腐蚀后膨胀 |
| cv2.MORPH_CLOSE	| 闭运算，先膨胀后腐蚀 |
| cv2.MORPH_GRADIENT	| 梯度运算，膨胀图减腐蚀图 | 
| cv2.MORPH_TOPHAT	| 顶帽运算，原始图减开运算图 |
| cv2.MORPH_BLACKHAT	| 黑帽运算，闭运算图减原始图 |

## 1.梯度运算
>        梯度是指图像梯度，可以简单理解为像素的变化程度。几个连续的像素，像素的跨度值越大，梯度值就越大。

>        梯度运算就是，膨胀图减去腐蚀图，就是将扩张的膨胀图挖去收缩过的腐蚀图。

梯度运算可以得到原图的轮廓。

```PYTHON
#梯度运算，得到简笔画的轮廓
import cv2
import numpy as np
img=cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\rabbit.jpg")
img = cv2.resize(img,(600,600))
k=np.ones((5,5),np.uint8)#创建5*5的核
cv2.imshow( "img" ,img)
#进行梯度运算
dst=cv2.morphologyEx(img,cv2.MORPH_GRADIENT,k)
cv2.imshow( "dst" ,dst)#显示梯度运算结果
cv2.waitKey()
cv2.destroyAllwindows( )
```

兔子为实心线条，膨胀-腐蚀后，所以会在兔子周围形成两条线。

### 2.顶帽运算
>        原图减去原图的开运算图，就是用有细节的原图挖去去除外部细节的开运算图。也就是只剩下外部细节的图。

>顶帽运算=原图-开运算图形=外部细节图

```PYTHON
#顶帽运算，原图减开运算图
import cv2
import numpy as np
img=cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\xtz.png")
k=np.ones((10,10),np.uint8)
cv2.imshow( "img" ,img)
dst=cv2.morphologyEx(img,cv2.MORPH_TOPHAT,k)
cv2.imshow( "dst" ,dst)
cv2.waitKey()
cv2.destroyAllwindows()
```

## 3.黑帽运算
>        原图的闭运算减去原图，也就是去除内部细节的图挖去有内部细节的原图，只剩内部细节。

>黑帽运算=原图像-闭运算图像=内部细节图

```PYTHON
#黑帽运算
import cv2
import numpy as np
img=cv2.imread(r"D:\Program Files (x86)\PyCharmProject\pythonProject\video-face\rabbit.jpg")
img = cv2.resize(img,(600,600))
k=np.ones((3,3),np.uint8)#创建5*5的核
cv2.imshow( "img" ,img)
#进行黑帽运算
dst=cv2.morphologyEx(img, cv2.MORPH_BLACKHAT,k)
cv2.imshow( "dst",dst)#显示黑帽运算结果
cv2.waitKey()
cv2.destroyAllwindows()
```
---
# 三、总结
腐蚀操作：通过核来缩小图像中的对象，用于去除小细节或分离连接的对象。

膨胀操作：通过核来扩大图像中的对象，用于填充空洞或连接对象。

开运算：先腐蚀后膨胀，用于去除小物体，平滑边界，分离物体。

闭运算：先膨胀后腐蚀，用于填充小孔，连接物体。

梯度运算：膨胀图减腐蚀图，用于提取物体的边界。

顶帽运算：原图减开运算图，用于提取图像中的细节。

黑帽运算：闭运算图减原图，用于提取图像中的内部细节。

>        这些形态学操作可以用于图像增强、去噪、分割和特征提取等应用。通过适当选择和组合这些操作，可以实现多种图像处理效果。
