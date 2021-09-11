var current = {
    phone: '',
    pass: '',
    passrepeat: '',
    img: './image/tou1.jpg'
};

window.onload = function () {
    localStorage.clear();
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
    // 发送验证码
    $("#btn").click(function () {
        $("#spann").addClass('display-inline ');
        $("#spann").text(randomNum(1000, 9999));

    })

    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    // console.log($("#span2").text());
    //判定用户输入的内容是不是和code能匹配
    // 先判定是不是空 在判定能不能匹配
    $('input[name="code"]').focus(function (e) {
        $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="code"]').blur(function (e) {
        let codeValue = $(this).val();

        //判断密码是否为空
        if (codeValue === '') {
            $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span2").text("验证码不能为空！")
            $("#span2").css({
                "color": "#ffb700",
                "margin": "0 10px"
            })
        }
        if (codeValue !== '') {
            if (codeValue == $("#spann").text()) {
                //判断密码是否正确
                $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
                $("#span2").text("验证码可以使用！")
                $("#span2").css({
                    "color": "#5fcf94",
                    "margin": "0 10px"
                })
            } else {
                $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
                $("#span2").text("请填写正确的验证码！")
                $("#span2").css({
                    "color": "red",
                    "margin": "0 10px"
                })
            }

        } else {
            $("#span2").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span2").text("验证码不能为空！")
            $("#span2").css({
                "color": "#ffb700",
                "margin": "0 10px"
            })
        }
        // current.pass = passwordValue;
    });
    // $('input[name="password"]').keyup(function (e) {
    $('input[name="password"]').focus(function (e) {
        $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="password"]').blur(function (e) {
        let passwordValue = $(this).val();

        //判断密码是否为空
        if (passwordValue === '') {
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span3").text("密码不能为空！")
            $("#span3").css({
                "color": "#ffb700",
                "margin": "0 10px"
            })
        } else if (passwordValue !== '') {
            //判断密码是否正确
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
            $("#span3").text("密码可以使用！")
            $("#span3").css({
                "color": "#5fcf94",
                "margin": "0 10px"
            })
        } else {
            $("#span3").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
            $("#span3").text("请填写正确的密码！")
            $("#span3").css({
                "color": "red",
                "margin": "0 10px"
            })
        }
        current.pass = passwordValue;
    });
    $('input[name="passrepeat"]').focus(function (e) {
        $(this).css("border", "1px solid #77c09b")

    });
    $('input[name="passrepeat"]').blur(function (e) {
        let passrepeatValue = $(this).val();

        //判断密码是否为空
        if (passrepeatValue !== '') {
            if (passrepeat.value == password.value) {
                current.pass = passrepeat.value;
                $("#span4").addClass("display-inline").addClass("iconfont").addClass("icon-gou1");
                $("#span4").text("密码一致！")
                $("#span4").css({
                    "color": "#5fcf94",
                    "margin": "0 10px"
                });
            } else {
                $("#span4").addClass("display-inline").addClass("iconfont").addClass("icon-cuowu");
                $("#span4").text("请填写正确的密码！")
                $("#span4").css({
                    "color": "red",
                    "margin": "0 10px"
                })
            }
        } else {
            $("#span4").addClass("display-inline").addClass("iconfont").addClass("icon-gantanhao");
            $("#span4").text("密码不能为空！")
            $("#span4").css({
                "color": "#ffb700",
                "margin": "0 10px"
            })
        }
        current.passrepeat = passrepeatValue;
    });
}
// 本地存储
// localStorage.setItem('phone', current.phone);
// localStorage.setItem('password',current.password);
// localStorage.setItem('img',imgSrc);

// let imgSrc = './image/tou4.jpg';
// $("#registerto").click(function () {

//     //判断addrshow的值是不是空
//     if (current.phone == "") {
//         alert('请先注册！');
//     } else {
//         window.location.href = "./login.html?phone=" + current.phone + "&&password=" + "&&img=" + imgSrc;
//         // window.location.href = "./index.html?phone="+phone.value+"&name="+password.value;
//         // window.location.href =encodeURI(encodeURI("./index.html?city="+addrshow.value));

//     }
// })
// console.log(current);

//         $("#registerto").click(function () {
//             let user = {};
//             user.phone = current.phone;
//             user.password = current.pass;
//             user.img = './image/tou1.jpg';
//             userInfo.push(user);
//             console.log(userInfo);
//             window.location.href = "./login.html";
//         })

let userInfo = [];
$("#registerto").click(function () {
    let user = {};
    user.phone = current.phone;
    user.password = current.pass;
    user.img = './image/tou2.jpg';
    userInfo.push(user);
    console.log(userInfo);
    console.log(user);
    // // 本地存储
    localStorage.setItem('phone', user.phone);
    localStorage.setItem('password', user.password);
    localStorage.setItem('img', user.img);
    window.location.href = "./login.html";
})