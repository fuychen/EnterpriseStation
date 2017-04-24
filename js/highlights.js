$(document).ready(function() {
    //highlights
    $(".li-box").mouseenter(function(){
    	$(this).parent().children().removeClass("li_mouse");
    	$(this).addClass("li_mouse");
    	var id = $(this).attr("id");
    	$(".highlight-pic").children().removeClass("pic_active");
    	$(".highlight-text").children().removeClass("text_active");
    	if(id == "li1"){
    		$(".highlight_pic1").addClass("pic_active");
    		$(".highlight_text1").addClass("text_active");
    	}
    	if(id == "li2"){
    		$(".highlight_pic2").addClass("pic_active");
    		$(".highlight_text2").addClass("text_active");
    	}
    	if(id == "li3"){
    		$(".highlight_pic3").addClass("pic_active");
    		$(".highlight_text3").addClass("text_active");
    	}
    	if(id == "li4"){
    		$(".highlight_pic4").addClass("pic_active");
    		$(".highlight_text4").addClass("text_active");
    	}
    	if(id == "li5"){
    		$(".highlight_pic5").addClass("pic_active");
    		$(".highlight_text5").addClass("text_active");
    	}
    })

    //视频文字
    $(".promotional-txt").mouseenter(function(){
        $(".inner-icon").removeClass("inner-icon-active");
        $(this).children().children(".inner-icon").addClass("inner-icon-active");
    })
    
    //首页视频左侧文字宽度的js
    var text_width = $(".inner-box").width();
    text_width_right = text_width - 60;
    if ($(window).width()>1024){
        $(".inner-text").css("width",text_width_right+"px");
    };

    //首页最下面的宽度适应
    var service_width = $(".service-top").width();
    service_width_resize = service_width*0.02;
    if($(window).width()>1024){
        $(".item1").children().css("margin-bottom",service_width_resize+"px");
    };
});