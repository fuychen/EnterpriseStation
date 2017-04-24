$(document).ready(function() {
    $(".whyus-datail").mouseover(function(){
    	$(this).children(".choose-whyus1").removeClass("whyus-one-vt").addClass("whyus-one-t");
    	$(this).children(".choose-whyus2").removeClass("whyus-one-v").addClass("whyus-one-w");
    });
    $(".whyus-datail").mouseleave(function(){
    	$(this).children(".choose-whyus1").removeClass("whyus-one-t").addClass("whyus-one-vt");
    	$(this).children(".choose-whyus2").removeClass("whyus-one-w").addClass("whyus-one-v");
    })
});