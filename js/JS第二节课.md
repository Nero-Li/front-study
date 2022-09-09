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

复习函数

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

Function

