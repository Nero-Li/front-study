## JS第二节课

> 1. 流程控制
> 2. 内置对象

### 1. 流程控制

#### 1.1 if/if...else/if...else if...else

```javascript
    //1. 和Java的if一样的用法,小括号中的判断条件判定为true就执行大括号中的内容
   if(1<2){
      //当1<2这个条件成立，这里的代码才会执行
      console.log('1<2成立')
   }
   console.log(1<2);  //true
   console.log(1<0);  //false
   //2. 特别的,如果判断的条件为具体数值,也认为是true
   if (1) {
      console.log('1')
   }
   //变量也一样
   var i = 1
   if (i) {
      console.log(i)
   }
   var str = 'string'
   if (str) {
      console.log(str)
   }

   // 对象也一样
   var student = {name:'木子'};
   if (student) {
      console.log(student+"成立")
   }
   if (student.name) {
      console.log(student.name+"成立")
   }

   //3. undefined/null/NaN 作为判断条件,都被认为是false
   if (undefined) {
      console.log("undefined认为是true")
   }
   if (null) {
      console.log("null认为是true")
   }
   if (NaN) {
      console.log("NaN认为是true")
   }

   //4. 特别的,对象类型,即便没有属性,也认为是true,因为它不是undefined,也不是null
   //相当于java中的调用了new 对象,但是没有赋值,这个对象也是存在的
   var obj = {}
   if (obj) {
      console.log('没有属性的对象也认为是true')
   }
   //在js中可以直接对没有属性的对象加属性
   console.log(obj.name); //undefined
   obj.name = '木子'
   console.log(obj.name) //木子


		//5.if...else
    if(1>2){
      //条件满足了，这里的代码执行了（只有当条件成立的时候，才走这里的代码）
      console.log('1>2成立');
    }else{
      //当条件不成立的时候，执行这里的代码
      console.log('1>2不成立');
    }

		//6.if..else if..else
		var n=12;
			
		if(n<10){
    	//这个条件成立，说明n是小于10的
      console.log('n小于10');
    }else if(n==10){
      //这个条件成立，说明n是等于10
      console.log('n等于10');
		}else{
      //以上条件都不成立，才会走这里的代码，代表n大于10
      console.log('n大于10');
		}

</script>
```

#### 1.2 for

```javascript
    //for循环也和Java一样,
    for (var i = 0; i < 10; i++) {
        //0 1 2 3 4 5 6 7 8 9
        console.log(i, '木子');
    }
    //当i的值9的话，是最后一次循环，但是需要把循环走完。第四步要走完，走完后i++了，变成10。所以在循环外面，i的值为10
    console.log('for循环之后自增一次:' + i);   //10


    console.log('遍历数组')
    console.log('------------------')
    var arr = [6, 5, 4, 3, 2, 1]
    //1. 对数组进行遍历
    //1.1 for循环
    console.log('for循环')
    for (var i = 0; i < arr.length; i++) {
        console.log("遍历数组:" + arr[i])
    }

    console.log('------------------')
    //1.2 for..in
    console.log('for...in')
    for (let key in arr) {
        console.log(key)
        console.log(arr[key]);
        console.log('--')
    }

    console.log('------------------')
    //1.3 forEach
    console.log('forEach')
    arr.forEach(function (value, index) {
        console.log(index)
        console.log(value)
        console.log('--')
    })

    console.log('------------------')
    console.log("遍历对象")
    //特别的,在js中可以使用for..in对对象进行遍历
    var student = {name: '木子', age: 18}
    for (let studentKey in student) {
        console.log(studentKey)
        console.log(student[studentKey])
    }
    console.log('------------------')
    //普通对象没有length,所以不能通过for循环遍历
    //普通对象也不能调用forEach函数
    // student.forEach(function (value, index) {
    //     console.log(index)
    //     console.log(value)
    //     console.log('--')
    // })

    var keys = Object.keys(student);

    console.log(keys);

    keys.forEach(function(key) {
      console.log(student[key])
    });
</script>
```

---

#### 1.3 switch

```javascript
<script>
    var num = 3;
    var str = '3'
    //==比较值是否相等
    console.log("num==str:"+(num==str))
    console.log("num==str:"+(num===str))

    // case后面是用的===来比较的
    // switch (num) {
    switch (str) {
        case 2:
            console.log('case的值是2');
            break;
        case 3:
            console.log('case的值是3');
            break;
        case 4:
            console.log('case的值是4');
        case 5:
            console.log('case的值是5');
        default:
            console.log('没有匹配到值');
    }
</script>
```

---

#### 1.4 三目运算符

```javascript
<script>
  var age=17
  console.log(age>18?'成年人':'未成年人')
</script>
```

#### 1.5 while/do...while

```javascript
<script>
  // var num = '0'
  var num = 0
  while (num <= 100) {
      if (num % 2===0) {
          console.log('偶数:'+num);
      }
      num++;
  }
  console.log("num="+num)


  do {
      if (num % 2==1) {
          console.log('奇数:' + num)
      }
      num--
  }while(num>=0)
</script>
```

---

### 2. 内置对象

#### 2.1 Function

**复习函数**

```javascript
//声明无参的函数,名字为fn
function fn(){
   console.log('这是一个函数');
}
//根据名字调用
fn();

//声明有参的函数,参数个数可以有多个
function fn1(name){
   console.log(name);
}
//根据名字调用
fn1('muzi');
console.log('--------------')
//1. 函数声明的方式
function fn(name){
  console.log(name);
}
fn('这是一个函数声明');

//2. 函数表达式的方式,但是此时不能用fn3来调用
var fn2=function fn3(name){
  console.log(name);
}
//fn3('这是一个函数表达式');	//报错
fn2('这是一个函数表达式');
//函数表达式的另一种调用方式
var fn4=function(){
  console.log('这是第二个函数表达式');
}
fn4()

//把函数声明变成函数表达式
//在函数声明前面加 !/~/+/-
/*!function fn5(){
	console.log('这是第二个函数声明');
 }();*/

/*~function fn5(){
	console.log('这是第二个函数声明');
}();*/

/*+function fn5(){
	console.log('这是第二个函数声明');
}();*/

/*-function fn5(){
	console.log('这是第二个函数声明');
 }();*/

//匿名函数自执行
//下一行代码以()打头的情况,必须加终止符 分号
console.log('-------');
//匿名函数
(function(){
  console.log('匿名')
})()
```

**Function**

>  Function 在被当作构造函数调用的时候，可以用来创建函数。

```javascript
<script>
  // var fn = new Function(函数参数1, 函数参数2, ..., 函数参数n, 函数体);
  var fn = new Function('a', 'b','console.log("~~~~");return a + b');
  var result = fn(1, 3);
  console.log(result)
</script>
```

使用 Function 创建的函数，最后一个参数，即`函数体内在执行的时候作用域是在全局的`。

```javascript
var num = 20;

function fn() {
  var num = 10;
  var func = new Function('console.log(num)');
  console.log(num); //10
  func(); //20
}
fn();
```

---

#### 2.2 Math

```javascript
<script>
    // 向下取整 （舍去法）
    console.log(Math.floor(6.9));    // 6

    // 向上取整 （进一法）
    console.log(Math.ceil(6.1));      // 7

    // 四舍五入
    console.log(Math.round(5.4));   // 5
    console.log(Math.round(5.5));   // 6

    // 0~1 之间的随机数
    console.log(Math.random());

</script>
```

---

#### 2.3 Date

```javascript
<script>
    // 获取当前时间
    var now = new Date();
    console.log(now);

    // 获取指定时间
    var d= new Date('2012-12-12 10:20:30');
    console.log(d);
</script>
```

```javascript
<script>
    var date = new Date();
		//格式化
    var y = date.getFullYear();
    var m = date.getMonth() + 1; //月份从0~11
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();

    console.log(y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s);
</script>
```

```javascript
<script>
    // 获取当前时间的时间戳
    var d = new Date();
    console.log(d.valueOf())
    console.log(d.getTime());

    var d1 = Date.now();
    console.log(d1);

    // 获取指定时间的时间戳
    var d2 = new Date("2008-08-10 10:10:10");
    console.log(d2.valueOf());
    console.log(d2.getTime());

</script>
```

```javascript
<script>
    var t1 = 1238957491330;
    var t2 = 1534598659450;
		//时间戳转日期
    var date = new Date(t2);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();

    console.log(y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s);

</script>
```

---

#### 2.4 数组补充

##### 2.4.1 添加,删除元素

```javascript
<script>
    // push(a,b,...)   向数组的末尾添加一个或更多元素，并返回新的长度
    var arr1 = [1, 'aa', 3.14, true];
    //向末尾添加2和'bb'两个元素
    console.log(arr1.push(2, 'bb'));
    console.log(arr1);

    console.log('--------------')

    // pop()   删除并返回数组的最后一个元素
    var arr2 = [1, 'aa', 3.14, true];

    console.log(arr2.pop());
    console.log(arr2.length);
    console.log(arr2);


    console.log('--------------')
    // unshift()   向数组的开头添加一个或更多元素，并返回新的长度
    var arr3 = [1, 'aa', 3.14, true];
    console.log(arr3.unshift(0, 'bb'));
    console.log(arr3);

    console.log('--------------')


    // shift() 删除并返回数组的第一个元素
    var arr4 = [1, 'aa', 3.14, true];
    console.log(arr4.shift());
    console.log(arr4.length);
    console.log(arr4);

</script>
```

##### 2.4.2 sort 数组排序

```javascript
		<script>
			/*
			 * sort
			 * 	作用
			 * 		对数组进行排序
			 * 	语法
			 * 		数组.sort(compareFunction)
			 * 	参数
			 * 		用来指定按某种顺序对数组进行排序
			 * 		如果没有参数的话，会按照每个字符对应的Unicode码值进行排序
			 * 
			 * 		函数里有两个参数
			 * 			a,b
			 * 			return a-b			按从小到大的顺序去排
			 * 			return b-a			按从大到小的顺序去排
			 * 
			 * 	返回值
			 * 		返回排序后的数组，原数组变了，变成排序后的数组
			 */
			
			var arr=[4,2,7,8,3,1,10];
			arr.sort(function(a,b){
				return a-b;
			})
			
			console.log(arr);			//[1, 2, 3, 4, 7, 8, 10]
			
			var arr1=[4,2,7,8,3,1,10];
			arr1.sort(function(a,b){
				return b-a;
			});
			console.log(arr1);			//[10, 8, 7, 4, 3, 2, 1]
			
			
			//随机排序
			var arr2=[4,2,7,8,3,1,10];
			
			arr2.sort(function(){
				return 0.5-Math.random();
			})
			
			console.log(arr2);
			
			//没有参数
			var arr3=[4,2,7,8,3,1,10];
			arr3.sort();
			
			console.log(arr3);
		</script>
```

##### 2.4.3 concat拼接新数组

```javascript
<script>
   /*
    * concat
    *     作用
    *        连接数组，组成一个新数组
    *     语法
    *        数组.concat(varlue1,value2,value3...)
    *     参数
    *        需要与原数组进行合并的数据
    *        参数可以是数组，也可以是非数组
    *     返回值
    *        合并后的新数组，原数组是不变的
    *        
    */
   
   var color=['red','green','blue','pink'];
   
   var newColor=color.concat('yellow');
   console.log(newColor);    //["red", "green", "blue", "pink", "yellow"]
   console.log(color);          //["red", "green", "blue", "pink"]
   
   var newColor2=color.concat(['yellow','gold']);
   console.log(newColor2);       //["red", "green", "blue", "pink", "yellow", "gold"]
   
   var newColor3=color.concat(1,2,3);
   console.log(newColor3);       //["red", "green", "blue", "pink", 1, 2, 3]
</script>
```

##### 2.4.4 reverse 颠倒数组元素

```javascript
		<script>
			/*
			 * reverse
			 * 	作用
			 * 		颠倒数组
			 * 	语法
			 * 		数组.reverse()
			 * 	返回值
			 * 		返回颠倒后的数组，原数组变化了，变成颠倒后的数组了
			 */
			var color=['red','green','blue','pink'];
			
			var a=color.reverse();
			console.log(a);		//["pink", "blue", "green", "red"]
			console.log(color);	//["pink", "blue", "green", "red"]
		</script>
```

##### 2.4.5 join 拼接成字符串

```javascript
<script>
   /*
    * join
    *     作用
    *        将数组中的所有元素都连接成一个字符串
    *     语法
    *        数组.join(separator)
    *     参数
    *        separator就是一个连接符，用来把数据连成一个字符串
    *        没参数的话，默认为一个逗号
    *        参数是一个空字符，那么数组中的每个数据将被直接连接
    *     返回值
    *        返回数组转成的字符串，原数组不变
    * 
    * 
    */
   
   var color=['red','green','blue','pink'];
   
   var newColor=color.join();
   console.log(newColor);    //red,green,blue,pink
   console.log(color);          //["red", "green", "blue", "pink"]
   
   var new1=color.join('');
   console.log(new1);       //redgreenbluepink
   
   var new2=color.join(' ');
   console.log(new2);       //red green blue pink
   
   var new3=color.join('&');
   console.log(new3);       //red&green&blue&pink
</script>
```

##### 2.4.6 slice截取数组

```javascript
<script>
   /*
    * slice 
    *     作用
    *        截取数组
    *     语法
    *        数组.slice(begin,end)
    *     参数
    *        begin     开始的位置
    *        end          结束的位置(不包含最后一位)
    * 
    *        一个参数都没有，直接返回原来的数组
    *        参数只有一个数字，那从数字开始的位置一直到数组的最全截掉
    *     返回值
    *        返回截到的数组，原数组不会变
    */
   
   var color=['red','green','blue','pink','yellow'];
   var n1=color.slice();
   console.log(n1);      //["red", "green", "blue", "pink", "yellow"]
   
   var n2=color.slice(2);
   console.log(n2);      //["blue", "pink", "yellow"]
   
   var n3=color.slice(3,4);
   console.log(n3);      //["pink"]
   
   console.log(color);       //["red", "green", "blue", "pink", "yellow"]
</script>
```

##### 2.4.7 splice 替换

```javascript
<script>
   /*
    * splice
    *     作用
    *        用新  元素替换旧元素，以此修改数组的内容（替换数组）
    *     语法
    *        数组.splice(start,deleteCount,item)
    *     参数
    *        start        开始的位置
    *        deleteCount       删除的个数
    *        item            替换的内容
    *
    *        一个参数都不有的话，那直接返回一个空数组
    *        如果参数为一个数字，代表截取数组，从传的那个数字开始，一直截到最后一位数据
    *        如果参数为两个数字，代表截取数组，从第一个参数开始，截取的个数为第二个参数的值
    *        如果参数为三个，代表替换数组，从第一个参数开始，找到第二个参数值的个数，把找到的内容换成第三个以及第三个以后的参数
    * 返回值
    *        返回删除的数据
    *        原数组变化了，变成删除后剩下的内容
    *
    */
   var color=['red','green','blue','pink','yellow'];
   //什么都不传,截取0个元素,返回空数组,原数组没有被截取,所有没有变
   var c1=color.splice();
   console.log(c1);         //[]
   console.log(color);       //["red", "green", "blue", "pink", "yellow"]

   var c2=color.splice(3);
   console.log(c2);         //["pink", "yellow"]
   console.log(color);       //["red", "green", "blue"]

   var color1=['red','green','blue','pink','yellow'];
   var c3=color1.splice(1,3);
   console.log(c3);         //["green", "blue", "pink"]
   console.log(color1);      //["red", "yellow"]


   var color2=['red','green','blue','pink','yellow'];
   var c4=color2.splice(1,2,'white','black');
   console.log(c4);      //["green", "blue"]
   console.log(color2);   //["red", "white", "black", "pink", "yellow"]

   var color3=['red','green','blue','pink','yellow'];
   var c5='a,b,c';
   color3.splice(3,2,c5);
   console.log(color3);      //["red", "green", "blue", "a,b,c"]
</script>
```

---

#### 2.5 字符串补充

```javascript
<script>
    var str = "abcdefgabc";
    console.log(str.length)
    // charAt(index)   返回在指定位置的字符
    console.log(str.charAt(1))

    console.log('--------------')
    // indexOf() / lastIndexOf()
    // 找出指定字符串第一次/最后一次出现的索引
    console.log(str.indexOf('c'));
    console.log(str.lastIndexOf('c'));

    console.log('--------------')
    // toLowerCase() / toUpperCase()
    // 转换为小写字母\转换为大写字母
    console.log(str.toUpperCase());
    console.log('ABC'.toLowerCase());

    console.log('--------------')
    // slice() / substr()  截取字符串
    // slice() 有两个参数
    // 参数1: 指定截取的起点
    // 参数2: 可选参数，指定截取的终点 (不包含终点)
    console.log(str.slice(1));
    console.log(str.slice(1, 3));
    console.log('--------------')
    // substr() 有两个参数
    // 参数1: 指定截取的的起点
    // 参数2: 可选参数，指定截取的长度
    console.log(str.substr(3));
    console.log(str.substr(3, 3));
    console.log('--------------')
    // split() 把字符串分割为字符串数组  (与 join 是反向操作)
    var s1 = 'aa-bb- -cc-dd';
    console.log(s1.split('-'));
    console.log(s1.split(' '));

</script>
```

##### 2.5.1 charAt/charCodeAt

```javascript
<script>
   /*
    * charAt
    *     作用
    *        通过索引找字符
    *     语法
    *        字符串.charAt(index)
    *     参数
    *        索引值
    *        取值范围：0-length-1
    *        如果不写参数，那默认为0
    *        如果index超出了范围后，它会返回一个空
    *     返回值
    *        返回取到的那个字符，类型为字符串
    *
    */
   var str='softeem';

   var s1=str.charAt(1);
   console.log(s1);      //o

   var s2=str.charAt();
   console.log(s2);      //s

   var s3=str.charAt(10);
   console.log(s3);      //空
</script>
```

```javascript
<script>
   /*
    * charCodeAt
    *     作用
    *        通过索引找字符，找到后转为Unicode编码
    *     语法
    *        字符串.charCodeAt(index)
    *     参数
    *        索引
    *        取值范围：0-length-1
    *        没有参数，默认为第0个
    *        如果参数超过了范围，那它就返回NaN
    *     返回值
    *        返回字符对应的Unicode编码
    *
    */
   var str='abcdefg';
   var s1=str.charCodeAt(1);
   console.log(s1);      //98

   var s2=str.charCodeAt();
   console.log(s2);      //97

   var s3=str.charCodeAt(10);
   console.log(s3);      //NaN
</script>
```

##### 2.5.2 indexOf/lastIndexOf

```javascript
<script>
   /*
    * indexOf
    *     作用
    *        通过字符找下标（从左往右找这个字符首次出现的位置）
    *     语法
    *        字符串.indexOf(searchValue,fromIndex)
    *     参数
    *        searchValue       要查找的字符
    *        fromIndex     从哪个位置开始查找，这个参数如果没有默认为0
    *     返回值
    *        返回一个数字，这个数字代表字符在整个字符串里的真实下标，如果没找到的话就返回-1
    */

   var str='softeem';
   var s1=str.indexOf('s');
   console.log(s1);         //0

   var s2=str.indexOf('e',1);
   console.log(s2);         //4

   var s3=str.indexOf('a');
   console.log(s3);         //-1
</script>
```

```javascript
		<script>
			/*
			 * lastIndexOf
			 * 	作用
			 * 		通过字符找下标（从右往左找字符最后出现的位置）
			 * 	语法
			 * 		字符串.lastIndexOf(searchValue,formIndex)
			 * 	参数
			 * 		searchValue		要查找的字符串
			 * 		formIndex		从哪开始查找，如果没有的话，默认从最后一个字符开始
			 * 	返回值
			 * 		返回一个数字，如果找到的话就返回这个字符的真实下标，如果没找到返回-1
			 */
			var str='softeem';
			var s1=str.lastIndexOf('s');
			console.log(s1);				//0
			//给的下标都是正数的下标,但是查是倒着查
			//代表从下标4的位置倒着查,相当于从softe字符串中查询'e'
			var s2=str.lastIndexOf('e',4);  
			//返回值为正着数
			console.log(s2);				//4

			var s3=str.lastIndexOf('a');
			console.log(s3);				//-1
		</script>
```

---

##### 2.5.3 slice 截取字符串

```javascript
<script>
   /*
    * slice
    *     作用
    *        截取字符串
    *     语法
    *        字符串.slice(beginSlice,endSlice)
    *     参数
    *        beginSlice    开始的位置
    *        endSlice         结束的位置
    *
    *        如果一个参数都没有的话，直接返回整个字符串
    *        如果只有一个参数，代表开始的位置，那结束的位置默认为最后一位字符
    *        如果有两个参数，第二个参数为结束位置，但是不包含它
    *        参数可以放负数，但是开始位置不能大于结束位置
    *           开始的位置是最后一位，代表-1
    *
    *     返回值
    *        返回截取到的那个字符串，原字符串没有变化
    *
    */

   var str='softeem';
   var s1=str.slice();
   console.log(s1);      //softeem

   var s2=str.slice(3);
   console.log(s2);      //teem

   var s3=str.slice(2,4);
   console.log(s3);      //ft

   var s4=str.slice(-3,-2);
   console.log(s4);      //e

   console.log(str);  //softeem
</script>
```

---

##### 2.5.4 substring 截取字符串

```javascript
<script>
   /*
    * substring
    *     作用
    *        截取一段字符串
    *     语法
    *        字符串.substring(indexStart,indexEnd)
    *     参数
    *        indexStart    开始的位置
    *        indexEnd         结束的位置
    *
    *        如果一个参数都不有的话，会返回整个字符串
    *        如果只有一个参数，那就从这个参数的位置一直截到最后一个字符
    *        如果有两个参数，那最后一个参数代表结束位置，但是不包含它
    * 返回值
    *        返回截取后的字符串，原字符串不变
    *
    * 与slice的区别
    *     1、slice起始位置不能大于结束位置，而substring起始位置可以大于结束位置
    *     2、slice可以放负数，而substring是不能放负数的
    *
    */
   var str='softeem';
   var s1=str.substring();
   console.log(s1);         //softeem

   var s2=str.substring(2);
   console.log(s2);         //fteem

   var s3=str.substring(3,5);
   console.log(s3);         //te

   var s4=str.substring(5,3);
   console.log(s4);         //te

   var s5=str.substring(-3,-2);
   console.log(s5);         //空

   console.log(str);     //softeem
</script>
```

> slice和substring的区别
>
> ```javascript
>   <script>
>     var str1 = 'softeem'
>     //substring参数不能为负数,可以把substring的负数参数当成0
>     console.log(str1.substring(-3, -1)); //空
>     console.log(str1.slice(-3, -1)); //ee
>     console.log('----------')
>     //substring 参数可以颠倒
>     console.log(str1.substring(3, 1)); //of
>     console.log(str1.slice(3, 1));// 空
>   </script>
> ```
>
> 

##### 2.5.4 split 分割成数组

> 和数组的join相反

```javascript
<script>
   /*
    * split
    *     作用
    *        用指定的分隔符把字符串分隔成数组
    *     语法
    *        字符串.split(separator,limit)
    *     参数
    *        separator     分隔符
    *        limit        分隔成数组数据的个数
    *
    *        一个参数都没有以及参数是一个空格字符的话，会把整个字符串作为数组中的一个数据
    *        如果参数为一个空字符，它会把字符串里的每个字符做为数组中的数据
    *        如果参数为两个，分隔后的数组的个数第二个参数的值
    *     返回值
    *        返回一个数组，原字符串没有变化
    */

   var str='softeem';
   var s1=str.split();
   console.log(s1);      //["softeem"]

   var s2=str.split('');
   console.log(s2);      //["s", "o", "f", "t", "e", "e","m"]

   var s3=str.split(' ');
   console.log(s3);      //["softeem"]

   var s4=str.split('f');
   console.log(s4);      //["so", "teem"]

   var s5=str.split('f',1);
   console.log(s5);      //["so"]

   console.log(str);  //softeem
</script>
```
