//1.根据id拿到元素
var element = document.getElementById('btn');
//2.第二种输出:控制台打印
console.log(element)
//3.添加点击事件
element.onclick = function () {
    alert("又被点了")
}
