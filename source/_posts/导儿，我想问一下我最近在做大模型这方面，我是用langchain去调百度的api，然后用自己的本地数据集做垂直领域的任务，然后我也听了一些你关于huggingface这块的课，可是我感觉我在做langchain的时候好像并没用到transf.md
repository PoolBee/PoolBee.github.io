导儿，我想问一下我最近在做大模型这方面，我是用langchain去调百度的api，然后用自己的本地数据集做垂直领域的任务，然后我也听了一些你关于huggingface这块的课，可是我感觉我在做langchain的时候好像并没用到transformers的内容呢，所以我想请教一下transformers这块是属于langchain在训练模型时候的一小部分内容吗，还是说这是一个langchain以外的可以用来训练大模型的库

2024-02-27 22:141回复





Transformers这块应该是你要自己本地跑模型，不是调用api，如果你调用api的话，基本上就用不上这个了



![image-20240515175757386](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240515175757386.png)12.0

安装

切换到transformer

conda activate transformers

import torch

torch.cuda.is_available()



![image-20240515181726926](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240515181726926.png)

vscode切换终端

ctrl+~

![image-20240515182237727](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240515182237727.png)

一定要用cmd终端



修改host文件

，访问github下载模型会有问题

原本

![image-20240515184421262](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240515184421262.png)

现在

185.199.108.133 raw.githubusercontent.com

185.199.109.133 raw.githubusercontent.com

185.199.110.133 raw.githubusercontent.com

185.199.111.133 raw.githubusercontent.com

2606:50c0:8000::154 raw.githubusercontent.com

2606:50c0:8001::154 raw.githubusercontent.com

2606:50c0:8002::154 raw.githubusercontent.com

2606:50c0:8003::154 raw.githubusercontent.com

ok完成



# Pipeline

流水线

tokeninzer预处理——model调用——postprocessing后处理

简化代码

直接输入文本获得答案

不需要关注细节

## Pipeline支持的任务

text-classification 文本分析，情感分析

掩码填充-摘要-文本生成（类似gtp）-文本到文本生成（）

表格问答-0样本分类

——

增加ipywidgets



在anaconda的cmd中实现

pip install -U ipywidgets

更新后不报错了

![image-20240516104740140](C:\Users\anymore\AppData\Roaming\Typora\typora-user-images\image-20240516104740140.png)

https://huggingface.co/models

找模型，方便！！

uer/roberta-base-finetuned-dianping-chinese

复制名称即可

copy到model=''中