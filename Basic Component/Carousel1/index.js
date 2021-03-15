var div = document.querySelector('div');
var ul = document.querySelector('ul');
var list = document.querySelector('#list');
var lis = list.querySelectorAll('li');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var index = 0;
var timer = null;

// 自动轮播
function auto() {
    timer = setInterval(function() {
        index++;
        if (index >= lis.length) {
            index = 0;
        }
        change(index);
    }, 2000)
}
auto();
// 切换图片，切换圆点，更新索引
function change(curIndex) {
    // ul偏移距离，切换图片，改变ul上边距实现图片切换效果
    ul.style.marginTop = -300 * curIndex + "px";
    // 排他思想，切换圆点，让当前圆点添加on类名
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
    }
    lis[curIndex].className = "on";
    //更新索引
    index = curIndex;
}

div.onmouseover = function() {
    ul.style.cursor = "pointer";
    // 鼠标移动到轮播区域时停止轮播
    clearInterval(timer);
}
    // 离开时开启自动轮播
div.onmouseout = auto;
// 鼠标滑动到圆点对应id上时，切换到对应图片
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function() {
        change(this.index);
    }
}

var num = 0;
var circle = 0;
// 右侧按钮
right.addEventListener('click', function() {
    if (num == ul.children.length - 1) {
        ul.style.marginTop = 0;
        num = 0;
    }
    ul.style.marginTop = -300 * num + "px";
    num++;
    // 点击右侧按钮圆点跟着变化
    circle++;
    // console.log(ul.children.length);
    if (index == ul.children.length - 1) {
        circle = 0;
    }
    change(circle);
});

// 左侧按钮
left.addEventListener('click', function() {
    if (num == 0) {
        ul.style.marginTop = -300 * num + "px";
        num = ul.children.length - 1;
    }
    ul.style.marginTop = -300 * num + "px";
    num--;
    // 点击左侧按钮圆点跟着变化
    circle--;
    // console.log(ul.children.length);
    if (index == 0) {
        circle = ul.children.length - 1;
    }
    change(circle);
})
