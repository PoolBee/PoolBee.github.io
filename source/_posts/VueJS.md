vue.js

33k

1.高的运行效率

2.虚拟dom技术,预处理操作——提高渲染效率

3.不去操作dom对象，精力投入到业务逻辑上

4.入门容易



数据传输协议json，备份容灾



原生编译

宏编译

npm是从nodejs来的，vue可以安装第三方的库



## 新页面

![image-20240520100832642](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520100832642.png)



![image-20240520100921098](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520100921098.png)配置路由

勾选否则打不开

标题和下拉刷新

## 自动创建了demo的json路由配置文件

![image-20240520101805745](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520101805745.png)

# 注册DCloud

[应用列表 (dcloud.net.cn)](https://dev.dcloud.net.cn/pages/app/list)



```html
<template>
	<view>
		<view class="box" hover-class="boxHover">view布局标签页</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.box{
	width:200px;
	height:200px;
	background: #ccc;
.boxHover{
	background: orange;
}
</style>

```

```html
<template>
	<!-- 2的话要有个最外面的view -->
	<view class="layout">
		<view calss ="box1">box1</view>
		<view class="box2">box2</view>
		<!-- view.box2 -->
		<view class="box2"></view>
		
	</view>
	<!-- 组件
	view增加了其他属性 
	移入事件——手指按下去的事件-->
	
</template>

<script setup>
	// 逻辑部分
	//2选项式api
	//3集合式api
</script>

<!-- 内置scss -->
<style lang ="scss">
	/* css */
	.layout{
		border:1px solid red;
		.box1{
			border:1px solid green;
		}
		.box2{
			border:1px solid blue;
		}
	}
.box{
	width:200px;
	height:200px;
	background: #ccc;
	
}
	
</style>

```



触摸变色

变长

```HTML
<template>
	<view>
		<view class="box" hover-class="boxHover" hover-stay-time="0">请点击我</view>
	</view>
</template>

<script setup>

</script>

<style>
.box{
	width:300px;
	height:300px;
	
	background: #ccc;
}
.boxHover{
	background: orange;
	width: 500px;
}

</style>

```

点击子元素-父元素也改变

```html
<template>
	<view>
		<view class="box" hover-class="boxHover" >请点击我
		<view class="inner">内部元素</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style>
.box{
	width:200px;
	height:200px;
	background: #ccc;
}
.boxHover{
	background: orange;
	width: 300px;
}
.inner{
	width:150px;
	height:150px;
	background: green;
}
</style>

```

增加innerHover让子元素改变父元素也改变——冒泡

```
<template>
	<view>
		<view class="box" hover-class="boxHover" >请点击我
		<view class="inner" hover-class="innerHover">内部元素</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style>
.box{
	width:200px;
	height:200px;
	background: #ccc;
}
.boxHover{
	background: orange;
	width: 300px;
}
.inner{
	width:150px;
	height:150px;
	background: green;
}
.innerHover{
	background: greenyellow;
}
</style>

```

​		<view class="inner" hover-class="innerHover" hover-stop-propagation>内部元素</view>

增加stop只支持微信小程序，h5不支持



text类似于span标签



显示天气和f12调试

console



### 选中文字，验证码选中

​	<text selectable>文本标签</text>

拷贝只能text

<text selectable space="emsp">文本      标签</text>

空格

# 高德的key

![image-20240520112055791](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520112055791.png)

## scroll-view

```HTML
<scroll-view scroll-y="true" class="scrollView">
		<view></view>
	</scroll-view>
```



直接使用标签名也可以

```
<scroll-view scroll-y class="scrollView">
		<view>123</view>
		<view>123</view>
		<view>123</view>
		<view>123</view>
		<view>123</view><view>123</view>
		<view>123</view>
		<view>123</view>
		<view>123</view>
		<view>123</view><view>123</view>
		<view>123</view>
```

scroll-y 纵向

如果横向，

1.改为scrool-x

![image-20240520115108053](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520115108053.png)

然后每个view增加box这个class然后style标签中

增加display:inline-block;这时候会自动换行

![image-20240520114918622](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520114918622.png)

不换行则

在父级style标签中添加

white-space:nowrap;

一行显示了，横向滑动的效果



## swiper滑块

轮播图



### vw单位



![image-20240520115632517](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520115632517.png)

### vh

#### 屏幕可视区域

50vh屏幕可视区域高度的一半



# 获取天气和地区

![image-20240520145456500](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520145456500.png)



```手动轮播
<template>
	<view>
		<swiper>
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;

}

</style>

```

swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
}

	//尾类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
```HTML
<template>
	<view>
		<swiper>
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//尾类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
}

</style>

```

```
<template>
	<view>
		<swiper indicator-dots="true">
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
	//指示点
	
}

</style>

```

点的颜色

```
<template>
	<view>
		<swiper indicator-dots indicator-color="blue">
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
	//指示点
	
}

</style>

```

传统后端服务搭建-有uniCloud就不需要这些



serverless

```
<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255)" indicator-active-color="#fff" circular>
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
	//指示点
	
}

</style>

```

循环播放+自动播放

```
<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255)" indicator-active-color="#fff" circular
		autoplay="3000">
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item>
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
</template>

<script>

</script>

<style lang="scss">
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
	//指示点
	
}

</style>

```

## image组件

![image-20240520160306110](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520160306110.png)

```HTML
<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255)" indicator-active-color="#fff" circular
		autoplay="3000" vertical >
			<swiper-item>111</swiper-item>
			<swiper-item>221</swiper-item>
			<swiper-item>331</swiper-item>
			<swiper-item>441</swiper-item>
			<swiper-item>551</swiper-item>
			<swiper-item>661</swiper-item>
			<swiper-item>771</swiper-item> 
			<swiper-item>881</swiper-item>
			<swiper-item>991</swiper-item>
		</swiper>
	</view>
	<view>
		<!-- 默认的scaleToFill -->
		<image src="../../static/logo.png" mode="" class ="pic1"></image>
		<!-- 最长的边显示完全 -->
		<image src="../../static/logo1.png" mode="aspectFit" class ="pic2"></image>
		<!-- 保持中心区域不裁剪 常用aspectFill-->
		<!-- 宽度固定，高度原有比例 -->
		<!-- height同理 -->
		<image src="../../static/logo1.png" mode="widthFix" class ="pic3"></image>
		<!-- 网络图片地址也可 -->
		<!-- <image src="https://picsum.photos/150px/150px"></image> -->
	</view>
</template>

<script>

</script>

<style lang="scss">
	// 图片的大小
.pic1{
	width:150px;
	height:150px;
}
.pic2{
	width:200px;
	height:200px;
	
}
.pic3{
	width:300px;
	
}
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
}

</style>

```

轮播的图片固定的属性



```HTML
<template>
	<view>
		<swiper indicator-dots indicator-color="rgba(255,255,255)" indicator-active-color="#fff" circular
		autoplay="3000" vertical >
			
			<swiper-item><image src="../../static/logo.png" mode="aspectFill" class ="pic1"></image></swiper-item>
			<swiper-item><image src="../../static/logo1.png" mode="aspectFill" class ="pic2"></image></swiper-item> 
			<swiper-item><image src="../../static/logo1.png" mode="aspectFill" class ="pic3"></image></swiper-item>
		</swiper>
	</view>
	<view>

	</view>
</template>

<script>

</script>

<style lang="scss">
	// 图片的大小
// .pic1{
// 	width:150px;
// 	height:150px;
// }
// .pic2{
// 	width:200px;
// 	height:200px;
	
// }
// .pic3{
// 	width:300px;
	
// }
// 这里直接用了组件名
swiper{
	width:100vw;
	// 宽度
	height:200px;
	border:1px solid green;
	swiper-item{
		width:100%;
		background: pink;
		// 在item标签内部的image
		image{
			width:100%;
			height:100%;
		}
	}
	//类选择器、二倍关系显示不同颜色
	swiper-item:nth-child(2n){
		background: orange;
	}
	
}

</style>

```

最终的轮播图

存档1

```HTML
<template>
		<view class="box" hover-class="boxHover" >请点击我</view>
		<view class="inner" hover-class="innerHover" hover-stop-propagation>内部元素</view>
	<view>-----</view>
	
	<text selectable space="emsp">文本      标签</text>
	
	<scroll-view scroll-y class="scrollView">
		<view class="box11">123</view>
		
		
	</scroll-view>
</template>

<script setup>

</script>


<style lang="scss">
.scrollView{
	width:80%;
	height:220px;
	border:1px solid red;
}
.box11{
	
}
</style>

```

INDEX界面

## 超链接跳转

页面路由

```HTML
<navigator url="/pages/demo2/demo2">点击我跳转demo2</navigator>
```



navigator图片跳转，包围在image标签外即可

opentype

跳转方式，销毁relanch，没有返回箭头

target——实现小程序之间跳转





# 导航栏

```
{  
		  "tabBar": {  
			  "color":"#646566",
			  "selectedColor":"#ff6700"
			  },
			  
		    "list": [  
		      {  
		        "pagePath": "pages/search/search",  
		        "text": "搜索",  
		        "iconPath": "static/icons/sousuo.png",  
		        "selectedIconPath": "static/icons/sousuo.png"  
		      },  
		      {  
		        "pagePath": "pages/order/order",  
		        "text": "订单",  
		        "iconPath": "static/icons/order.png",  
		        "selectedIconPath": "static/icons/order2.png"  
		      },  
		      {  
		        "pagePath": "pages/shopping/shopping",  
		        "text": "购物车",  
		        "iconPath": "static/icons/shopping.png",  
		        "selectedIconPath": "static/icons/shopping2.png"  
		      }
		     
		    ]  
		},
```

{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		},
		{
			"path" : "pages/order/order",
			"style" : 
			{
				"navigationBarTitleText" : ""
			}
		},
		{
			"path" : "pages/search/search",
			"style" : 
			{
				"navigationBarTitleText" : ""
			}
		},
		{
			"path" : "pages/shopping/shopping",
			"style" : 
			{
				"navigationBarTitleText" : ""
			}
		}

```
<template>  
  <view>  
    <!-- 页面内容区域，根据value1的值动态显示不同的内容 -->  
    <view v-if="value1 === 0" class="content">  
      首页内容  
    </view>  
    <view v-else-if="value1 === 1" class="content">  
      放映厅内容  
    </view>  
    <view v-else-if="value1 === 2" class="content">  
      直播内容  
    </view>  
    <view v-else class="content">  
      我的内容  
    </view>  
  
    <!-- 底部导航栏 -->  
    <up-tabbar  
      :value="value1"  
      @change="change1"  
      :fixed="false"  
      :placeholder="false"  
      :safeAreaInsetBottom="false"  
    >  
      <up-tabbar-item text="首页" icon="home" @click="navigateTo('index')"></up-tabbar-item>  
      <up-tabbar-item text="放映厅" icon="photo" @click="click1(1)"></up-tabbar-item>  
      <up-tabbar-item text="直播" icon="play-right" @click="click1(2)"></up-tabbar-item>  
      <up-tabbar-item text="我的" icon="account" @click="click1(3)"></up-tabbar-item>  
    </up-tabbar>  
  </view>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
      value1: 0, // 初始选中索引为0，对应“首页”  
      // 其他数据...  
    };  
  },  
  methods: {  
	  
    click1(index) {  
      // 当点击tabbar项时，更新value1的值  
      this.value1 = index;  
      console.log('click1', index);  
      // 这里可以添加页面跳转或内容切换的逻辑  
    },  
    change1(newValue) {  
      // 当value改变时触发的方法（可选）  
      this.value1 = newValue;  
      console.log('change1', newValue);  
      // 这里可以添加value改变后的处理逻辑  
    },  
    // 其他方法...  
  },  
  // 其他选项，如computed, watch, components等...  
};  
</script>  
  
<style>  
/* 样式定义 */  
.content {  
  /* 页面内容区域的样式 */  
  padding: 20px;  
}  
/* 其他样式... */  
</style>
```

这个是原本显示view的界面





兼容

[Uniapp+Vue3+Ts 解决setup语法糖不能export问题＜script＞ and ＜script setup＞ must have the same language type_ and <script setup> must have the same lan-CSDN博客](https://blog.csdn.net/veloi/article/details/134907438)



### 轮播图的请求

P5没看了

1404*527

什么设备

定义函数自动计算图片高度

上面时间处理25px

官网搜索跨端兼容

小程序右上角胶囊是100px

![image-20240522034758605](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240522034758605.png)





### 重要

在`uniCloud`中，虽然你通常不会直接使用HTTP GET请求来从数据库中获取数据（因为`uniCloud`提供了自己的数据库访问API），但你可以通过编写云函数来封装数据库查询逻辑，并通过HTTP请求触发这个云函数来间接实现这一目的。

以下是一个简化的步骤说明：

1. **编写云函数**：在`uniCloud`中，你可以编写云函数来执行数据库查询。云函数通常使用JavaScript（或TypeScript）编写，并可以访问`uniCloud`提供的数据库API。

    

   例如，假设你有一个名为`getProductsByCategory`的云函数，它接受一个`category_id`参数并返回该类别下的产品列表：

   ```javascript
   // 在云函数文件夹中创建 getProductsByCategory/index.js  
   exports.main = async (event, context) => {  
     const db = uniCloud.database();  
     const collection = db.collection('product'); // 假设产品数据存储在名为 'product' 的集合中  
     const categoryId = event.category_id; // 从请求中获取 category_id  
    
     // 执行查询  
     const res = await collection.where({  
       category_id: categoryId  
     }).get();  
    
     // 返回查询结果  
     return res.data;  
   };
   ```

2. **触发云函数**：为了触发这个云函数并获取数据，你可以通过HTTP请求来调用它。这通常是通过`uniCloud.callFunction`方法（在客户端）或通过HTTP客户端库（如`axios`或`node-fetch`，在服务器端或另一个云函数中）来实现的。

    

   如果你想要通过HTTP GET请求来触发这个云函数，你可能需要配置一个HTTP触发器或API网关来将GET请求映射到你的云函数。但请注意，`uniCloud`本身可能不提供直接的HTTP触发器配置，你可能需要结合使用其他服务或中间件来实现这一点。

    

   然而，在`uniCloud`的客户端SDK中，你可以直接使用`uniCloud.callFunction`来调用云函数，而无需设置HTTP触发器：

   ```javascript
   // 在客户端调用云函数  
   uniCloud.callFunction({  
     name: 'getProductsByCategory',  
     data: {  
       category_id: 'your_category_id'  
     }  
   }).then(res => {  
     // 处理返回的产品列表  
     console.log(res.result);  
   }).catch(err => {  
     // 处理错误  
     console.error(err);  
   });
   ```

3. **安全性考虑**：当你通过HTTP请求暴露数据库查询功能时，务必注意安全性。确保你的云函数验证请求者的身份和权限，以防止未经授权的访问和数据泄露。

总的来说，虽然`uniCloud`本身可能不提供直接的HTTP GET请求来获取数据库数据的功能，但你可以通过编写云函数并调用它们来间接实现这一目的。

![文心大模型3.5生成](https://nlp-eb.cdn.bcebos.com/static/eb/asset/normal-model-sign.fc891495.png)

重新生成







![头像](https://himg.bdimg.com/sys/portrait/item/public.1.4679940.UaZ4HYS8NsKV9Xd4iyb-Og?tt=1716284574330)









# Vue

### 	<!-- 单文件组件 -->应用.vue文件

script标签即是使用了vue

![image-20240522084522805](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240522084522805.png)

创建成功





```
<up-grid :border="false" col="4">
		<up-grid-item v-for="(item,index) in 10" :key="index">
			<!-- <view class="item">
				<image :src="base_url+item.film_picture"></image>
				<view class="name">{{item.film_name}}</view>
				<view class="score">{{item.film_score}}</view>
			</view> -->
		</up-grid-item>
	</up-grid>
```

正正显示天气

```
<template>
<view class="u-page__item">
			<up-navbar
				:safeAreaInsetTop="false"
				title="电影信息查询"
				:fixed="false"
				left-text="返回"
				rightIcon="map"
				fixed
				right-click
				autoBack 
			>
			</up-navbar>
		</view>
	<view class="content">


		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<!-- <view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影名称" v-model="tname" />
		</view> -->
		<!-- <view>
			<button size="default" type="primary" @click="search()">电影名称查询</button>
		</view> -->


		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的时间" v-model="time" />
		</view>
		<view>
			<button size="default" type="primary" @click="search1()">电影时间查询</button>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影类型" v-model="type" />
		</view>
		<view>
			<button size="default" type="primary" @click="search2()">电影类型查询</button>
		</view>
		<view>
			<text>今天天气：{{text1}}</text>
		</view>
	</view>

	<!-- 底部导航栏 -->
	<up-tabbar class="bottomBar" v-model="currentTab" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false"
		activeColor="red" :border="false">
		<up-tabbar-item text="首页" icon="home" name="home" @click="navigateTo('index')"></up-tabbar-item>
		<up-tabbar-item text="放映厅" icon='/static/icons/ticket3.png' name="ticket"
			@click="navigateTo('index1')"></up-tabbar-item>
		<up-tabbar-item text="我的" icon="account" @click="navigateTo('my')"></up-tabbar-item>
	</up-tabbar>



</template>

<script>
	export default {
		data() {
			return {
				title: '请选择您想查询的电影信息？ ',
				time: '',
				
				
			}
		},
		onLoad() {
			uni.request({
				url: 'https://restapi.amap.com/v3/ip', //ip定位
				data: {
					key: '5ce353df38dba293891e6e95c2811a21'
				},
				success: (res) => {
					console.log(res.data)
					console.log("getaddr")
					this.text1 = res.data.adcode //adcode城市的编码
					uni.request({ //网络请求  	//获取编码之后在获取天气
						url: 'https://restapi.amap.com/v3/weather/weatherInfo', //key里有的设置
						data: {
							key: '5ce353df38dba293891e6e95c2811a21',
							city: '130600' //res.data.adcode
						},
						success: (res) => { //处理函数
							console.log(res.data.lives); //lives为data的具体
							console.log("getweather")
							this.text1 = res.data.lives[0].city + "," +
								res.data.lives[0].weather + "," +
								res.data.lives[0].temperature;
						}
					})
				}
			})
		},
		methods: {
			search1() {
				if (this.time.trim() !== '') {
					uni.navigateTo({
						url: '/pages/films/films?time=' + this.time
					})
				} else {
					uni.showToast({
						title: '请输入观影时间',
						icon: 'none'
					});
				}
			},
			// search() {
			// 	uni.navigateTo({
			// 		url: '/pages/filmname/filmname?tname=' + this.tname
			// 	})
			// },
			search2() {
				// if (this.type.trim() !== '') {
				uni.navigateTo({
					url: '/pages/film/film?type=' + this.type
				})
				// } else {
				// 	uni.showToast({
				// 		title: '请输入电影类型',
				// 		icon: 'none'
				// 	});
				// }
			},
			navigateTo(pageName) {
				// 使用uni.navigateTo进行页面跳转  
				console.log(`跳转到页面：${pageName}`);  
				uni.navigateTo({  
					url: `/pages/${pageName}/${pageName}` // 假设你的页面路径是这样的  
				});  
			}, 
		}
	}
</script>

<style>
	.nav-top{
	
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
```





正确

​			```

​	```

```
<template>
<view class="u-page__item">
			<up-navbar
				:safeAreaInsetTop="false"
				title="电影信息查询"
				:fixed="false"
				left-text="返回"
				rightIcon="map"
				fixed
				 @right-click="getWeather"  
				autoBack 
			>
			</up-navbar>
		</view>
	<view class="content">


		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<!-- <view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影名称" v-model="tname" />
		</view> -->
		<!-- <view>
			<button size="default" type="primary" @click="search()">电影名称查询</button>
		</view> -->


		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的时间" v-model="time" />
		</view>
		
		emplate>
			<view class="">
				<u-dropdown>
					<u-dropdown-item v-model="value1" title="距离" :options="options1"></u-dropdown-item>
					<u-dropdown-item v-model="value2" title="温度" :options="options2"></u-dropdown-item>
				</u-dropdown>
			</view>
		
		
		
		
		<view>
			<button size="default" type="primary" @click="search1()">电影时间查询</button>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影类型" v-model="type" />
		</view>
		<view>
			<button size="default" type="primary" @click="search2()">电影类型查询</button>
		</view>
		
		<view>
			
			 <text>天气：{{this.weatherInfo}}</text> 
		</view>
	</view>

	<!-- 底部导航栏 -->
	<up-tabbar class="bottomBar" v-model="currentTab" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false"
		activeColor="red" :border="false">
		<up-tabbar-item text="首页" icon="home" name="home" @click="navigateTo('index')"></up-tabbar-item>
		<up-tabbar-item text="放映厅" icon='/static/icons/ticket3.png' name="ticket"
			@click="navigateTo('index1')"></up-tabbar-item>
		<up-tabbar-item text="我的" icon="account" @click="navigateTo('my')"></up-tabbar-item>
	</up-tabbar>



</template>

<script>
	export default {
		data() {
			return {
				title: '请选择您想查询的电影信息？ ',
				time: '',
				
				weatherInfo: '',
				
			}
		},
		onLoad() {
			
		},
		methods: {
			search1() {
				if (this.time.trim() !== '') {
					uni.navigateTo({
						url: '/pages/films/films?time=' + this.time
					})
				} else {
					uni.showToast({
						title: '请输入观影时间',
						icon: 'none'
					});
				}
			},
			// search() {
			// 	uni.navigateTo({
			// 		url: '/pages/filmname/filmname?tname=' + this.tname
			// 	})
			// },
			search2() {
				// if (this.type.trim() !== '') {
				uni.navigateTo({
					url: '/pages/film/film?type=' + this.type
				})
				// } else {
				// 	uni.showToast({
				// 		title: '请输入电影类型',
				// 		icon: 'none'
				// 	});
				// }
			},
			navigateTo(pageName) {
				// 使用uni.navigateTo进行页面跳转  
				console.log(`跳转到页面：${pageName}`);  
				uni.navigateTo({  
					url: `/pages/${pageName}/${pageName}` // 假设你的页面路径是这样的  
				});  
			}, 
			getWeather(){
				uni.request({
					url: 'https://restapi.amap.com/v3/ip', //ip定位
					data: {
						key: '5ce353df38dba293891e6e95c2811a21'
					},
					success: (res) => {
						console.log(res.data)
						console.log("getaddr")
						this.text1 = res.data.adcode //adcode城市的编码
						uni.request({ //网络请求  	//获取编码之后在获取天气
							url: 'https://restapi.amap.com/v3/weather/weatherInfo', //key里有的设置
							data: {
								key: '5ce353df38dba293891e6e95c2811a21',
								city: '130600' //res.data.adcode
							},
							success: (res) => { //处理函数
							//点击后显示保定天气
								 const weatherData = res.data.lives[0]; 
								 this.weatherInfo = `${weatherData.city},${weatherData.weather},${weatherData.temperature}`;
							}
						})
					}
				})
			}
			
		}
	}
</script>

<style>
	.nav-top{
	
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
```

# 目前正常

​	```

```
<template>
<view class="u-page__item">
			<up-navbar
				:safeAreaInsetTop="false"
				title="电影信息查询"
				:fixed="false"
				left-text="返回"
				rightIcon="map"
				fixed
				 @right-click="getWeather"  
				autoBack 
			>
			</up-navbar>
		</view>
	<view class="content">


		<image class="logo" src="/static/logo1.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<!-- <view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影名称" v-model="tname" />
		</view> -->
		<!-- <view>
			<button size="default" type="primary" @click="search()">电影名称查询</button>
		</view> -->


		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的时间" v-model="time" />
		</view>
		
		
		
		
		
		<view>
			<button size="default" type="primary" @click="search1()">电影时间查询</button>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" focus placeholder="请输入您想观看的电影类型" v-model="type" />
		</view>
		<view>
			<button size="default" type="primary" @click="search2()">电影类型查询</button>
		</view>
		
		
		<!-- 下拉栏 -->
		<u-dropdown>
			<u-dropdown-item v-model="value1" title="距离" :options="options1"
			close="search2()"
			></u-dropdown-item>
		</u-dropdown>
		
		<view>
			
			 <text>天气：{{this.weatherInfo}}</text> 
		</view>
	</view>

	<!-- 底部导航栏 -->
	<up-tabbar class="bottomBar" v-model="currentTab" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false"
		activeColor="red" :border="false">
		<up-tabbar-item text="首页" icon="home" name="home" @click="navigateTo('index')"></up-tabbar-item>
		<up-tabbar-item text="放映厅" icon='/static/icons/ticket3.png' name="ticket"
			@click="navigateTo('index1')"></up-tabbar-item>
		<up-tabbar-item text="我的" icon="account" @click="navigateTo('my')"></up-tabbar-item>
	</up-tabbar>



</template>

<script>
	export default {
		data() {
			return {
				title: '请选择您想查询的电影信息？ ',
				time: '',
				
				weatherInfo: '',
				value1: 1,
								value2: 2,
								options1: [{
										label: '犯罪',
										value: 1,
									},
									{
										label: '喜剧',
										value: 2,
									},
									{
										label: '科幻',
										value: 3,
									}
								],
								
				
				
				
			}
		},
		onLoad() {
			
		},
		methods: {
			search1() {
				if (this.time.trim() !== '') {
					uni.navigateTo({
						url: '/pages/films/films?time=' + this.time
					})
				} else {
					uni.showToast({
						title: '请输入观影时间',
						icon: 'none'
					});
				}
			},
			// search() {
			// 	uni.navigateTo({
			// 		url: '/pages/filmname/filmname?tname=' + this.tname
			// 	})
			// },
			search2() {
				// if (this.type.trim() !== '') {
				uni.navigateTo({
					url: '/pages/film/film?type=' + this.type
				})
				// } else {
				// 	uni.showToast({
				// 		title: '请输入电影类型',
				// 		icon: 'none'
				// 	});
				// }
			},
			navigateTo(pageName) {
				// 使用uni.navigateTo进行页面跳转  
				console.log(`跳转到页面：${pageName}`);  
				uni.navigateTo({  
					url: `/pages/${pageName}/${pageName}` // 假设你的页面路径是这样的  
				});  
			}, 
			getWeather(){
				uni.request({
					url: 'https://restapi.amap.com/v3/ip', //ip定位
					data: {
						key: '5ce353df38dba293891e6e95c2811a21'
					},
					success: (res) => {
						console.log(res.data)
						console.log("getaddr")
						this.text1 = res.data.adcode //adcode城市的编码
						uni.request({ //网络请求  	//获取编码之后在获取天气
							url: 'https://restapi.amap.com/v3/weather/weatherInfo', //key里有的设置
							data: {
								key: '5ce353df38dba293891e6e95c2811a21',
								city: '130600' //res.data.adcode
							},
							success: (res) => { //处理函数
							//点击后显示保定天气
								 const weatherData = res.data.lives[0]; 
								 this.weatherInfo = `${weatherData.city},${weatherData.weather},${weatherData.temperature}`;
							}
						})
					}
				})
			}
			
		}
	}
</script>

<style>
	.nav-top{
	
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 180px;
		width: 180px;
		margin-top: 0px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
```

