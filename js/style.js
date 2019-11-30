//自动轮播效果
var time = setInterval(slide,1000);
//声明全局变量
var cutIndex = 0;
var $carousel = $(".carousel").children();
var len = $carousel.length;
var $headLeft = $(".headLeft").find("a");
var $lis = $(".headLeft").find("li");

//设置鼠标滑过整体播放区域 离开这个区域 继续这个轮播
$(".head").mouseenter(function () { 
    clearInterval(time)
});

$(".head").mouseleave(function () { 
    time = setInterval(slide,1000);
});


function slide(){
    if($carousel.is(":animated")){
        return;
    }
    //淡出当前图片
    $carousel.eq(cutIndex).fadeOut(1000);
    //自动轮播
    if(++cutIndex >= len){
        cutIndex = 0;
    }
    // console.log(cutIndex)
    //淡入
    $carousel.eq(cutIndex).fadeIn(1000);

    //时间轴变化 注意：节点访问
    $headLeft.eq(cutIndex).addClass("on").parent().siblings().children().removeClass("on");
}

//鼠标划过时间轴 对应时间轴和背景图片的变化
$lis.mouseenter(function(){
    //原图片淡出
    $carousel.eq(cutIndex).stop(true).fadeOut(1000);
    // console.log($(this).index());
    cutIndex = $(this).index();
    $carousel.eq(cutIndex).stop(true).fadeIn(1000);
    //时间轴切换 节点访问 从当前执行时间的元素放分儿子 和 兄弟节点
    $(this).children("a").addClass("on");
    $(this).siblings().children("a").removeClass("on");
})


