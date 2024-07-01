NAN和任何数字比较为flase

+'好奇代码'结果是NAN因为String类型里面的字符无法转为var类型

NAN：not a number

在JavaScript中，`NaN`与任何值比较（包括它自身）都会返回`false`。







&& NAN结果会是NAN



!result就是转化为布尔值，

NAN转为boolean为false

![image-20240627204756714](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240627204756714.png)

在逻辑或`||`操作中，如果左侧为`false`，则整个表达式的结果为右侧的值，即`b`（在这里是`100`）。所以，`result`在这个表达式后会被赋值为`100`。



!result是先转为boolean然后取反，也就是NAN转为boolean是flase然后取反是true。

这会失败并返回`NaN`。在逻辑与操作中，如果左侧为`true`但右侧为`false`或“假值”（如`NaN`），返回false或nan



# 一、什么是DOM

用js和数组的形式来表示。

html文件的数据通过js的对象数组来表现的数据。

按照层级结构画出来。

![image-20240627212518239](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240627212518239.png)

像一种树的结构。

- 经常看到一个文档的结构
- 树形图：![](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240627212542895.png)

 根对象被各种数据进行树一样使用。

浏览器会将html和css代码转化为数组和对象的形式。

## 引擎：1.js编译器，js引擎

## 2.渲染引擎

渲染引擎就是在做这件事。

然后读取转化为数组和对象的形式，就是渲染引擎在做的事情。

浏览器定义了很多类型例如HTMLDivElement或者HTMLHeadElement的实例就是我们用的对象和属性。

只要页面中的实例发生变化，那么渲染出来的画面就会变化。

获取到root根对象，就能对其他对象引用了

### root对象生成后，会被window.document的对象指向/引用的，

conxole.log(window.document)就能看到整个文件的结构了，其实在内存中是数组和对象的形式。

其实在代码中window.document的时候，直接

console.los(document)就会显示页面的代码，其实在内存中是数组和对象的形式。

### 浏览器的渲染引擎，是如何知道该定义什么类型，每个类型要定义哪些原型方法和属性的呢？

# **DOM**

document object model

## 文档对象模型

也就是把html文档变成了对象的形式，只不过这个对象是自定义对象的形式

#### 1.dom是个对象

内存中经过转化，内存中的root对象就是dom。

#### 2.dom是个标准

需要去定义那些类型，原型方法和实例属性，和继承方法，背后是如何通过某种结构构成根对象的过程定义标准。

每个浏览器的渲染引擎和标准不一样。用这种标准化的对象和方法实现对页面的改变。

DOM标准提供定义的方法就可以改变页面中的元素了。

DOM标准也是浏览器厂家需要尊崇和内部去实现的。

# DOM

是由W3C组织去管理的，html css dom

转化为内存中的对象

还有xml html svg

## svg

是矢量图的一种格式，拷贝下来粘贴是<svg>的样子。

也有svg文档也可以直接当做文档进行引用的。

## xml

Extensible markup language

hyper text markuo language

<title>121232133<title>
    
</title>
</title>

xml一个自己的标签也没有，都是自己定义的。

<obj>

<name>Hello</name>

<gender>男</gender>

</obj>

![image-20240627215627538](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240627215627538.png)

### html显示信息

### xml主要用来传输和保存数据

### 用的不是很多，而是json格式



整体也分为了DOM、html、xml

svg

html和svg有点像定制版的xml了

## DOM接口

Interface

### UI

：user interface：

用户界面

### API

：APP programming interface

应用程序接口

所以interface就是连接、相互联系

### 所以看到interface就是交互的方式

本质上都是方法函数，

说法：访问网页，访问api本质上都是作为方法函数的方式。

所以DOM接口就是函数，方法。或者是可以访问的网址。



