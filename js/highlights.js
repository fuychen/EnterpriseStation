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
});