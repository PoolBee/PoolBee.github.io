创建对象的语法如下：

```java
类名 对象名 = new 类名();
```

比如对 `People`这个类，我想实例化`LiLei`这个人。`LiLei` 的数据类型便是 `People` 这个类型。（类可以看成是我们自己定义的数据类型）

```java
People LiLei = new People();
```

定义类的时候不会为类开辟内存空间，但是一旦创建了对象，系统就会在内存中为对象开辟一块空间，用来存放对象的属性值和方法。新建一个 NewObject.java 文件。

```java
public class NewObject {
    public static void main(String[] args) {
        People LiLei = new People(); //创建一个People对象LiLei

        LiLei.height =170;
        LiLei.age = 20;
        LiLei.sex = 1;

        LiLei.printBaseMes();
    }
}
```

编译运行：

```bash
$ javac NewObject.java People.java
$ java NewObject
我的身高是170.0cm
我的年龄是20岁
我是女性！
```

![为对象分配内存](https://doc.shiyanlou.com/document-uid79144labid1062timestamp1434617083799.png)

创建对象后，我们就要使用对象了，使用对象无非就是对属性和方法进行操作和调用。语法如下

```java
//引用对象属性
对象名.属性

//引用对象方法
对象名.方法
```

例如对 LiLei 的身高（`length`）赋值，并调用 `cry` 这个方法

```java
LiLei.height = 170;
LiLei.cry();
```

刚刚我们引入了成员变量这个概念，那什么是成员变量呢？成员变量就是指的对象的属性，是在类中定义，来描述对象的特性。还有一种变量叫局部变量，它是由类的方法定义，在方法中临时保存数据。

![成员变量和局部变量](https://doc.shiyanlou.com/document-uid79144labid1062timestamp1434619940542.png)

在使用时注意，成员变量可以被本类的所有方法所使用，同时可以被与本类有关的其他类所使用。而局部变量只能在当前的方法中使用。

在这里我们要讲到一个关于作用域的知识了。作用域可以简单地理解为变量的生存期或者作用范围，也就是变量从定义开始到什么时候消亡。

1. 局部变量的作用域仅限于定义它的方法内。而成员变量的作用域在整个类内部都是可见的。
2. 同时在相同的方法中，不能有同名的局部变量；在不同的方法中，可以有同名的局部变量。
3. 成员变量和局部变量同名时，局部变量具有更高的优先级。 大家可以编写代码验证一下。