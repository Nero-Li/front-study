## JS第三节课

> DOM

### 1. DOM

#### 1.1 概念

```javascript
<script>
 	/*
	* DOM
	* 	文档对象模型
	* 	DOM是关于创建，插入，修改，删除页面元素的标准
	* 	DOM赋予我们操作页面的能力
	* 	
	* 	页面的内容都是字符串，JS会把这些字符串转成DOM树，DOM树会把字符串转成节点，其实我们操作DOM的根本就是操作节点
  */	
  </script>
```

```javascript
<body>
		<div id="box" class="color" style="width: 100px;">
			<p><span></span></p>
			softeem
			<!--这里是注释-->
		</div>
</body>
	<script>
		/*
         * arrtibutes
         * 	属性节点
         * 	返回元素身上的所有属性节点，每个属性都会有一个自己对应的下标
         * 	它有一个length属性，代表元素身上有多少个属性节点
         *
         * childNodes
         * 	元素身上的第一层子节点，返回元素身上的所有子节点的集合（第一层）
         *
         * nodeName
         * 	节点的名称
         *
         * nodeType
         * 	节点的类型
         * 	返回的是一个数字
         *
         */
		// window.onload=function(){
		var box=document.getElementById("box");
		console.log(box)
		var attr=box.attributes;		//元素属性节点的集合
		console.log(attr);
		console.log(attr[0]);		//id="box"
		console.log(attr['class']);		//id="box"

		var child=box.childNodes;	//元素子节点的集合
		console.log(child);

		//元素节点（标签）
		console.log(box.nodeName);		//DIV
		console.log(box.nodeType);		//1

		//属性节点
		console.log(attr[0].nodeName);	//id
		console.log(attr[0].nodeType);	//2

		//文本节点
		console.log(child[0].nodeName);	//#text
		console.log(child[0].nodeType);	//3

		//注释节点
		console.log(child[3].nodeName);	//#comment
		console.log(child[3].nodeType);	//8

		//文档节点
		console.log(document.nodeName);	//#document
		console.log(document.nodeType);	//9
		// }
	</script>
```

#### 1.2 JS的位置

上述的代码,如果js放在div之前,则代码会报错,是因为常规情况下,代码是`从上到下`解析运行的,在页面的元素还没定义之前,就尝试用js获取元素,是拿不到的.所以这种情况限制了js的位置,下面聊聊js的分类和位置

##### 1.2.1 内嵌js

之前接触的在html中直接出现的Script标签中直接写的js,被称为内嵌js

##### 1.2.2 外链js

有专门的js后缀的文件,可以和css文件一样,做外链

```javascript
<body>
		<div id="box" class="color" style="width: 100px;">
			<p><span></span></p>
			softeem
			<!--这里是注释-->
		</div>
    <script src="myjs1.js"></script>
</body>
```