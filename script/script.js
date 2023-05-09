$(window).load(function(){
    //네비슬라이드
    $(".subNavi li").hover(function(){
        $(this).find("ul.s_subNavi").stop().show();
    },function(){
        $(this).find("ul.s_subNavi").stop().hide();
    })
    
    //플렉스슬라이드
    $('.flexslider').flexslider({
        animation: "slide"
    });

    //예술의전당 즐기기 슬라이드
    var wd = $(".enjoyView ul li").width();
    var maxSize = wd*$(".enjoyView ul li").length;
    $(".enjoyView ul").width(maxSize);
    $(".enjoyView ul li:last").prependTo(".enjoyView ul");
    $(".enjoyView ul").css("margin-left",-wd);
    
    $(".prevBtn").click(function(){
        $(".enjoyView ul").animate({marginLeft:parseInt($(".enjoyView ul").css("margin-left"))+wd+"px"},function(){
            $(".enjoyView ul li:last").prependTo(".enjoyView ul");
            $(".enjoyView ul").css("margin-left",-wd);
        })
    })
    $(".nextBtn").click(function(){
        $(".enjoyView ul").animate({marginLeft:parseInt($(".enjoyView ul").css("margin-left"))-wd+"px"},function(){
            $(".enjoyView ul li:first").appendTo(".enjoyView ul");
            $(".enjoyView ul").css("margin-left",-wd);
        })
    })


    //전당소식 탭메뉴
    $(".newsBtn li").click(function(){
        var i = $(this).index();
        $(".newsBtn li").removeClass("active");
        $(this).addClass("active");

        $(".plusIcon>.on").hide();
        $(".plusIcon>.on").eq(i).show();

        $(".newsCon>.on").hide();
        $(".newsCon>.on").eq(i).show();

        return false;
    })

    //알림장 자동슬라이드
    var num = 0;
    function opaAni(count){
        $(".noticeImg li, .noticeBtn li").removeClass("on");
        $(".noticeImg li:eq("+count+"), .noticeBtn li:eq("+count+")").addClass("on");
    }
    var autoAni = setInterval (function(){
        if(num<$(".noticeImg li").length-1){
            num++;
        }else{
            num=0;            
        }
        opaAni(num);
    },2000)
    $(".noticeImg li").on("mouseenter",function(){
        clearInterval(autoAni);
    }).on("mouseleave",function(){
        autoAni = setInterval (function(){
            if(num<$(".noticeImg li").length-1){
                num++;
            }else{
                num=0;
            }
            opaAni(num);
        },2000)
    })
    $(".noticeBtn li").click(function(){
        clearInterval(autoAni);
        num = $(this).index();
        opaAni(num);
        autoAni = setInterval (function(){
            if(num<$(".noticeImg li").length-1){
                num++;
            }else{
                num=0;
            }
            opaAni(num);
        },2000)

    })
    opaAni(0);

});