$(function(){
    // $(".header").height($(window).height());
    // if ($(window).width()<1024){
    //     $(".header").height($(window).width()*0.5);
    // }

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
            // if ($(window).width()<1024){
            //     $(".header").height($(window).width()*0.5);
            // }
            // if ($(window).width()>=1024){
            //     $(".header").height($(window).height());
            // }
            $(".summary-img1").height($(".summary-img1").width());
            $(".summary-img2").height($(".summary-img2").width());
            $(".summary-img3").height($(".summary-img3").width());
        }
    );

    $(document).ready(function(){

        $(".item1 li").hover(
            function(){
                var that=this;  
                item1Timer=setTimeout(function(){
                    $(that).find("div").animate({"top":0,"height":300},300,function(){
                        $(that).find("p").fadeIn(200);
                    });
                },100);
            },
            function(){
                var that=this;  
                clearTimeout(item1Timer);
                $(that).find("p").fadeOut(200);
                $(that).find("div").animate({"bottom":0,"height":50},300);
            }
        )

    })
});