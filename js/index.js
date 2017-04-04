$(function(){
    $(".carousel").height($(window).height());
    if ($(window).width()<1024){
        $(".carousel").height($(window).width()*0.6);
    }
    $(".summary-img1").height($(".summary-img1").width());
    $(".summary-img2").height($(".summary-img2").width());
    $(".summary-img3").height($(".summary-img3").width());
    if ($(window).width()<768){
        var temp=0;
        $(".nav-menu").click(function(){
            if (temp==0){
                $(".nav-menu>a").css("display","block");
                $(".brand").height("240");
                temp=1;
            }else{
                $(".nav-menu>a").css("display","none");
                $(".brand").height("auto");
                temp=0;
            }
        });
    }
    $(window).resize(function(){
            if ($(window).width()<1024){
                $(".carousel").height($(window).width()*0.6);
            }
            if ($(window).width()>=1024){
                $(".carousel").height($(window).height());
            }
            $(".summary-img1").height($(".summary-img1").width());
            $(".summary-img2").height($(".summary-img2").width());
            $(".summary-img3").height($(".summary-img3").width());
        }
    );
});