uniCloud是DCloud来联合阿里和腾讯云开发的

基于serverless

uniCloud的底层环境和微信小程序开发，支付宝小程序开发的基础环境相同。支持横夺i笑傲程序

实现前后端的开发，关注业务本身。

### 云函数

在云上的函数，接口给你，本地的计算机上。

```
https://unicloud.dcloud.net.cn/pages/overview/overview?pageid=env-00jxgsnk6x10
```

![image-20240520162145616](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240520162145616.png)



# JQL语法

降低了前端工程师操作数据库的难度，比传统的SQL和MongoDB API更清晰

jql.html详见

jql语法的where查询

```SQL
methods: {
			search(){
				console.log(this.tname)
				// jql语法-get只返回100条，查询会占用资源，不能一次全部取出来
				const db = uniCloud.database()
				
				db.collection("hf-exams")
				.where(`${new RegExp(searchVal, 'i')}.test(name)`)
				.get().then(res => {
					console.log(res.result)
				})
			}
			
```

```
methods: {
			search(){
				console.log(this.tname)
				// jql语法-get只返回100条，查询会占用资源，不能一次全部取出来
				const db = uniCloud.database()
				
				db.collection("hf-exams")
				.where(`${new RegExp(this.tname, 'i')}.test(invigilator)`)
				.get().then(res => {
					console.log(res.result)
				})
			}

		}
```

![image-20240521091427878](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240521091427878.png)

##### 第二个页面显示

navigateTo页面和路由

?id=1来传入

##### 接受

页面的生命周期

onload函数