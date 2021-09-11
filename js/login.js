var current = {
    phone: '',
    pass: ''
};

$('input[name="phone"]').focus(function (e) {
    // console.log(1);
    $(this).css("border", "1px solid #77c09b")

});
$('input[name="phone"]').blur(function (e) {
    let phoneValue = $(this).val();
    // console.log(phoneValue);
    //判断手机号是否为空
    if (phoneValue === '') {
        $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
        $("#span1").text("手机号码不能为空！")
        $("#span1").css({
            "color": "#ffb700",
            "margin": "0 10px"
        })
    }
    //判断手机号码是否正确
    if (phoneValue != '') {
        //正则匹配
        // console.log(phoneValue);
        var off = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneValue);
        // console.log(off);    
        if (off) {
            $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
            $("#span1").text("手机号码可以使用！")
            $("#span1").css({
                "color": "#5fcf94",
                "margin": "0 10px"
            })

        } else {
            $("#span1").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
            $("#span1").text("请填写正确的手机号码！")
            $("#span1").css({
                "color": "red",
                "margin": "0 10px"
            })
        }
    }
    current.phone = phoneValue;
});
// $('input[name="password"]').keyup(function (e) {
$('input[name="password"]').focus(function (e) {
    // console.log(1);
    $(this).css("border", "1px solid #77c09b")

});
$('input[name="password"]').blur(function (e) {
    let passwordValue = $(this).val();

    //判断密码是否为空
    if (passwordValue === '') {
        $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
        $("#span2").text("密码不能为空！")
        $("#span2").css({
            "color": "#ffb700",
            "margin": "0 10px"
        })
    } else if (passwordValue !== '') {
        //判断密码是否正确
        $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
        $("#span2").text("密码可以使用！")
        $("#span2").css({
            "color": "#5fcf94",
            "margin": "0 10px"
        })
    } else {
        $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
        $("#span2").text("请填写正确的密码！")
        $("#span2").css({
            "color": "red",
            "margin": "0 10px"
        })
    }
    current.pass = passwordValue;
});
// 本地存储

// let imgSrc = './image/tou4.jpg';
// localStorage.setItem('phone', current.phone);
// localStorage.setItem('password', current.pass);
// localStorage.setItem('img', imgSrc);


// $("#loginto").click(function () {
  
//     // if (current.phone == "") {
//     //     // alert('请先注册！');
//     // } else if() {
//     //     window.location.href = "./article.html";


//     // }
// })

let phone=localStorage.getItem('phone');
let password=localStorage.getItem('password')
let img=localStorage.getItem('img')
// console.log(localStorage);
// console.log(localStorage.getItem('phone'));
// console.log(localStorage.getItem('password'));
// console.log(localStorage.getItem('img'));
$("#loginto").click(function () {  
    // console.log(2);
    if(current.phone==""||current.pass==""){
        // window.location.href = "./message.html";
        prompt("密码或者账号不为空！",1000)
    //    alert("密码或者账号不为空！")
    }
    else if(current.phone!==phone||current.pass!==password){
        prompt("请输入正确的账号或者密码!",1000)
        // alert("请输入正确的账号或者密码！")
    }else{
        window.location.href = "./article.html";
    }

})
function prompt(newName, time, fn) {
    var $div = $('<div></div>');
    $div.css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'z-index': '200',
        'background-color': 'rgba(0,0,0,0.4)'
        // 'background-color':'#000',
    });
    var $contentDiv = $('<div>' + newName + '</div>');
    $contentDiv.css({
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'font-size': '5px',
        'padding': '10px 20px',
        'border-radius': '5px',
        'background-color': '#fff',
        'color': '#000',
        'opacity':0.7
    });
    $div.append($contentDiv);
    $('body').append($div);

    // 获取创建的大小
    var newW = (parseInt($contentDiv.css('width')) + 200) / 2;
    var newH = (parseInt($contentDiv.css('height')) + 100) / 2;
    $contentDiv.css({
        'margin-top': -newH + 'px',
        'margin-left': -newW + 'px',
    })
    setTimeout(function() {
        $div.remove();
        if (fn) {
            fn(); //回调函数    
        }

    }, time);
}
