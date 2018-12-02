$(document).ready(function() {
    
    $("#menu-click").click(function() {
        $("#nav-top ul").toggle();
     });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height  > 100) {
            $("nav #nav-top ul li a, #menu-click, nav #nav-bottom ul li a").addClass("nav-scroll-color");
            $("nav #nav-top, nav #nav-bottom").addClass("nav-scroll-bg");
            $("nav #nav-top").addClass("nav-scroll-height");
            if($(window).width() < 768) {
                $("nav #nav-top ul").addClass("nav-scroll-bg");
            }
        } else {
            $("nav #nav-top ul li a, #menu-click, nav #nav-bottom ul li a").removeClass("nav-scroll-color");
            $("nav #nav-top ul, nav #nav-top, nav #nav-bottom").removeClass("nav-scroll-bg");
            $("nav #nav-top").removeClass("nav-scroll-height");

         };
    });

});