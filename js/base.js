$("#toTop").click(function () {
    $(window).scrollTop(0);
})
// 右部栏第一行
$("#category li").mouseover(function () {  
    // console.log($(this));
    $(this).css("border-right","5px solid #B7D6B7");
})
$("#category li").mouseout(function () {  
    // console.log($(this));
    $(this).css("border-right","none");
})

$(function () {
    $(".hidebtn").click(function () {
            $('.hideblock').toggleClass('show');
      

        $(this).toggleClass(function () {
            if ($(this).hasClass('selet')) {
                $(this).removeClass('selet');
                return 'hidebtn';
            } else {
                $(this).removeClass('hidebtn');
                return 'selet';
            }
        })

    })
});
//内容栏右边栏第一行

$(function () {
    $('.tabContent').not($('.tabContent').eq(0)).hide();
    $('.tabTitle li').click(function () {
        var index = $(this).index();
        // console.log(index);
        $(this).attr('class', 'selected').siblings('li').attr('class', 'tabBox');
        $('.tabContent').eq(index).show(200).siblings('.tabContent').hide();
    })
})
// $(window).on('beforeunload', function(event){ 
//     window.localStorage.removeItem("phone"); 
//     window.localStorage.removeItem("password"); 
//     window.localStorage.removeItem("img"); 
// }); 
$(".line2-title span").mouseover(function (e) {
    $(this).addClass("animated bounceInDown");
    // bounceInLeft
    setTimeout(function () {
        $(".line2-title span").removeClass('bounceInDown');
    }, 2000);
})
$(".line3-title span").mouseover(function (e) {
    $(this).addClass("animated bounceInDown");
    // bounceInLeft
    setTimeout(function () {
        $(".line3-title span").removeClass('bounceInDown');
    }, 2000);
})

$(".blogs figure a img").mouseover(function (e) {
    $(this).addClass("animated flipOutX");
    // bounceInLeft
    setTimeout(function () {
        $(".blogs figure a img").removeClass('flipOutX');
    }, 2000);
})