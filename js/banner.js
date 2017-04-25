$(document).ready(function() {
    //banner鼠标移入移出效果
    $(".banner_menu_a").mouseenter(function(){
        $(".menu_div").addClass("menu_div_active");
    })

    $(".banner_menu").mouseleave(function(){
        $(".menu_div").removeClass("menu_div_active");
    })
});