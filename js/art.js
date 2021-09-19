      let phone = localStorage.getItem('phone');
        let password = localStorage.getItem('password')
        let img = localStorage.getItem('img')
        console.log(phone, password, img);
        if (phone!==""&&pass!==""){

        }
        if (img == null) {
            window.location.href = "./resiger.html";
        } else {
            $(".qq").removeClass().addClass("qq");
            var imgStr = '<img src="' + img + '" class="aut" alt="">';
            $(".qq").append(imgStr);
            $(".lo").text("已登录").css({
                "font-weight": "800px",
                "border-shadow": "10px solid #1ABC9C"
            }).removeAttr("href");
            var userText = "你好，我是" + phone + "用户!"
            $(".welcome p").text(userText)
            $(".line1-autor img").remove();
            $(".line1-autor").append(imgStr);
            $($(".line1-word p").eq(0)).text(phone)
        }
        // 点击详情跳转至文章详情页面
        window.onload = function () {
            localStorage.removeItem("newsContent");
        }
        // 实现分页功能
        loadContent();
        $(".prePage").click(function (e) {
            $(this).parent().parent().find(".blogs").remove();
            loadData($(this).parent().parent().attr('id'), 1);
            loadContent();
        })
        $(".nextPage").click(function (e) {
            // console.log($(this).parent().parent().attr('id'));
            $(this).parent().parent().find(".blogs").remove();
            loadData($(this).parent().parent().attr('id'), 2);
            loadContent();
        })

        function loadContent() {
            $(".articleDetail").click(function () {
                // 通过 获取对应的ID来找到对应的文章详细页面
                // console.log($(this).parent().parent().parent().find(".xuhao").text());//id
                let id = $(this).parent().parent().parent().find(".xuhao").text();
                // console.log(detailArticle[id]["title"]);
                var newsContent = '<h1>' + detailArticle[id]["title"] +
                    '</h1><p class="news_author"><span class="news_1"><i class="iconfont icon-chuangzuozhezhongxin"></i>' +
                    detailArticle[id]["artist"] +
                    '</span><span class="news_2"><i class="iconfont icon-rili"></i>' + detailArticle[id][
                    "date"] + '</span></p><div class="news_content"><p>' + detailArticle[id]["detail"] +
                    '</p><p>' + detailArticle[id]["detail"] +
                    '</p> </div><div class="copyright_author"><p><strong>版本声明：</strong>本站原创文章，于' +
                    detailArticle[id]["date"] + '，由<a href="#">' + detailArticle[id]["artist"] +
                    '</a></p><p class="p-hidden"><strong>转载请注明：</strong><a href="#">' + detailArticle[id][
                        "title"] + '</a> | <a href="#">' + detailArticle[id]['artist'] + '</a></p> <p style="font-size: 18px;margin:20px 10px">下一篇:<span class="nextPage" style="padding-left: 10px; color:teal;">'+ detailArticle[Number(id)+1]["title"]+'</span></p></div>';
                localStorage.setItem("newsContent", newsContent);
                localStorage.setItem("id", id);
                window.location.href = "./detail.html";
            })
        }
      