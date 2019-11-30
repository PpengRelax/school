var time = setInterval(slide, 3000);
//设置轮播图的索引
var $picCon = $(".pic-con");
var $slidePics = $picCon.children();
var len = $slidePics.length;
var $btNavs = $(".bt-nav>li");
var cutIndex = 0;
console.log(len, "这是pic-con的有多少张图片");

function slide() {
    //索引自增边界判断
    if (++cutIndex >= len) {
        cutIndex = 0;
        $picCon.css("left", -cutIndex * 400);
    } else {
        // console.log(cutIndex);
        $picCon.animate({
            "left": -cutIndex * 400
        }, 2000, function () {
            console.log("....")
        });
    }
    

    $btNavs.eq(cutIndex).addClass("on").siblings().removeClass("on");

}

