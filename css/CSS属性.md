## CSS属性

### 1. 文本属性

#### 1.1 text-decoration:装饰线

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文本的装饰线</title>
    <!--
      none: 无任何装饰线
          可以去除a元素默认的下划线
      underline: 下划线
      overline: 上划线
      line-through: 删除线
      -->
    <style>
        .baidu {
            text-decoration: underline;
            cursor: pointer; //鼠标放置,显示手指
        }

        .google {
            text-decoration: line-through; //删除线
        }

        .bing {
            text-decoration: overline; //上面的线,但是一般用border-top
        }

        a {
            text-decoration: none; //a标签的下划线一般会覆盖掉,不显示下划线
        }
    </style>
</head>
<body>
<!--a元素自带text-decoration:underline-->
<a href="http://www.baidu.com">百度</a>
<!--  为span设置下划线,其他的样式,比如点一下之后颜色变化,涉及到伪类的设置  -->
<span class="baidu">百度一下</span>
<span class="google">Google一下</span>
<span class="bing">Bing一下</span>
</body>
</html>

```

#### 1.2 text-transform:大小写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文本大小写(很少使用)</title>
<!--
    不适用中文,这种灵活控制效果一般使用js,而不用css,比如只要求第一个单词首字母大写
    capitalize: 首字母大写,每个单词首字母大写
    uppercase: 每个单词每个字母都大写
    lowercase: 每个单词每个字母都小写
    none: 没有影响
  -->

    <style>
        .info{
            //text-transform: capitalize;
            text-transform: uppercase;
        }
    </style>
</head>
<body>
   <div class="info">my name is lym</div>
</body>
</html>

```

#### 1.3 text-indent:缩进

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文本缩进(很少使用)</title>
    <!--
        text-indent用于设置第一行内容的缩进
        一般设置为2em,代表缩进两个字体大小
      -->
    <style>
        .news {

            font-size: 20px;
            /**
                一般设置为字体大小的两倍,所以这里的单位可以用em
                em:相对于字体的大小
            */
            text-indent: 2em;
        }
    </style>
</head>
<body>
<p class="news">大家好，我是程序员盒子网站的作者，也是技术星球的作者，也是你们想在手上拿到的WebChat这个基于WebSocket实现的网页版即时通信小demo项目的作者。
    最近有很多小伙伴都花了一块钱拿到了这个项目源代码，也真心感觉到有很多小伙伴是真真切切从中学到了一些自己所不了解的技术，同时也遇到了很多小伙伴的私信，有关于部署问题的、有关于技术细节的，人太多了，作者一个人根本回复不过来，而且很多问题都是需要重复去解答的，效率极低！正好最近作者上线了技术星球这个社区服务，特此开通了这个关于WebChat技术交流的星球，大家可以在这里统一提问，交流，我会统一回复。

    最后真心希望大家都可以在这个项目中有所收获！

    关于webchat项目包的传送门：https://www.coderutil.com/mall/item?itemId=167069788431873</p>
</body>
</html>

```

#### 1.4 text-align:对齐(重要)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文本对齐(重要)</title>
    <!--
        设置文本对齐的方式
        left/right : 左/右对齐,默认为left
        center: 居中显示
        justify: 两端对齐(需要多行文本,很少使用),最后一行默认左对齐,除非单独设置text-align-last:justify
        实际上,text-align不仅可以让文本居中,也可以让图片之类的元素
        所以在官方中定义text-align为:行内内容相对于块级父元素的对齐方式,所以是行级元素在块级父元素中的对齐方式
    -->
    <style>
        .box{
            background-color: red;
            color: white;
            text-align: center;
            height: 300px;
        }

        .content{
            width: 100px;
            height: 100px;
            background-color: yellow;
            /* ①改成行内级元素就可以 */
            //display: inline-block;
            /* ②左右auto也可以 */
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="box">我是div元素
        <input />
        <div class="content"></div>
    </div>
</body>
</html>

```

#### 1.5 letter/word-spacing:间隙

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>空隙</title>
    <style>
        .box{
            /*字母之间的空隙*/
            letter-spacing: 10px;
            /*单词之间的空隙*/
            word-spacing: 20px;
        }
    </style>
</head>
<body>
    <div class="box">my name is lym</div>
</body>
</html>

```

### 2. 字体属性

#### 2.1 font-size:大小

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字体大小</title>
    <!--
        常用设置:
        1. 具体数值+单位
            100px
            em(不推荐),1em=100%
        2. 百分比
            基于父元素,50%=父元素font-size的50%
     -->
    <style>
        .box {
            /*默认为16px*/
            font-size: 2em;
        }
    </style>
</head>
<body>
<div class="box">我是div</div>
<div class="box2">我是div</div>
</body>
</html>
```

#### 1.2 font-family: 字体名称

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字体名称</title>
    <!--
      font-family用于设置文字的字体名称
       可以设置1个或者多个字体名称;
       浏览器会选择列表中第一个该计算机上有安装的字体;
       或者是通过  @font-face 指定的可以直接下载的字体
      -->

    <style>
        body{
            /* 淘宝使用的 */
            font-family: Tahoma,Arial,"Hiragino Sans GB","\5b8b\4f53",sans-serif;
        }
    </style>
</head>
<body>

</body>
</html>

```

#### 1.3 font-weight:字体粗细

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字体粗细</title>
    <!--
    font-weight用于设置文字的粗细（重量）
     常见的取值:
        100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量
        normal：等于400
        bold：等于700
    strong、b、h1~h6等标签的font-weight默认就是bold
  -->
    <style>
        .content{
            font-weight: 100;
        }
    </style>
</head>
<body>
    <p class="content">strong、b、h1~h6等标签的font-weight默认就是bold</p>
    <b>b</b>
    <strong>strong</strong>
</body>
</html>
```

#### 1.4 font-style: 文本常规/斜体

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文字常规/斜体</title>
    <!--     font-style用于设置文字的常规、斜体显示
    ◼       normal：常规显示
    ◼       italic(斜体)：用字体的斜体显示(通常会有专门的字体)
    ◼       oblique(倾斜)：文本倾斜显示(仅仅是让文字倾斜)  -->
    <style>
        p{
            font-style: oblique;
        }
    </style>
</head>
<body>
<!-- ◼       em、i、cite、address、var、dfn等元素的font-style默认就是italic   -->
<em>hello</em>
<p>hello</p>
</body>
</html>

```

#### 1.5 font-variant:小写字母变形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>小写字母变形</title>
    <!--  
      可以设置的值如下
      normal：常规显示
      small-caps：将小写字母替换为缩小过的大写字母
     -->
    <style>
        p{
            font-variant: small-caps;
        }
    </style>
</head>
<body>
    <p>abcABC</p>
</body>
</html>
```

#### 1.6 line-height: 行高

![image-20231212232934041](/Users/apple/Desktop/CSS属性.assets/image-20231212232934041.png)