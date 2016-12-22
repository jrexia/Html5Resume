$(function() {
    // alert("ddfd");
    $('#header').css("height", window.innerHeight + "px");

    $("#part2").waypoint(function() {
        $("#right1").addClass("img1");
        $("#right2").addClass("img2");
        $("#right3").addClass("img3");
    }, { offset: 250 });
    // $('#div2').css("height", window.innerHeight + 1 + "px");
    // $('#div3').css("height", window.innerHeight + 1 + "px");
    // var a = window.innerHeight;
    // alert(a);
    // $('#header').waypoint(function() {
    //     // alert("ddfd");
    //     // notify('100 pixels from the top');
    //     $('#header').css("top", -a + "px");
    //     $('#header').css("height", 10 + "px");
    //     // $('#div2').css("display", "block");
    //     $('#div3').css("display", "none");
    //     $('.loading-process').css("height", a + 20 + "px");
    // }, { offset: -1 });

    $('.img').hover(function() {
        $(this).css('height', '125');
        $(this).css('width', '140');
        $(this).css("clip", "rect(0px,60px,70px,0px)");
    }, function() {
        $(this).css('height', '100');
        $(this).css('width', '110');
        $(this).css("clip", "rect(0px,46px,59px,0px)");
    });

    $('#part2 .btn-about .img-about').hover(function() {
        $(this).css('height', '125');
        $(this).css('width', '140');
        // $(this).animate({ clip: 'rect(69px,62px,134px,0px)' }, 3000);
        $(this).css("clip", "rect(69px,62px,134px,0px)");
    }, function() {
        $(this).css('height', '100');
        $(this).css('width', '110');
        $(this).css("clip", "rect(59px,46px,118px,0px)");
    });


    // 滚动翻页部分开始
    $(".panel").css({ "height": $(window).height() });
    $.scrollify({
        section: ".panel"
    });

    //IE/Opera/Chrome 

    // $(".scroll").click(function(e) {
    //     e.preventDefault();
    //     $.scrollify("move", $(this).attr("href"));
    // });
    // 滚动翻页部分结束

    // 导航随鼠标滚动吸顶开始
    var navHeight = $(".nav").offset().top;
    var navFix = $(".nav-header");
    var navimg = $(".img-back");
    var navHome = $(".Home-page");
    $(window).scroll(function() {
            if ($(this).scrollTop() > navHeight) {
                // alert("ff");
                navFix.addClass("navFix");
                navimg.addClass("imgFix");
                navHome.addClass("homeFix");
            } else {
                navFix.removeClass("navFix");
            }
        })
        // 导航随鼠标滚动吸顶结束
        // 圆形按钮点击缓慢进入下一个页面开始
    $(".btn").click(function() {
        $("html,body").animate({ scrollTop: $(window).scrollTop() + $(window).height() }, "slow");
    });
    // 圆形按钮点击缓慢进入下一个页面结束
});