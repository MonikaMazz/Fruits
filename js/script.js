$(document).ready(function() {

    
    $("#menu-click").click(function() {
        $("#nav-top ul").toggle();
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height  > 100) {
            $("nav #nav-top ul li a, #menu-click").addClass("nav-scroll-color");
            $("nav #nav-top ul, nav #nav-top, nav #nav-bottom").addClass("nav-scroll-bg");
            $("nav #nav-top").addClass("nav-scroll-height");


        } else {
            $("nav #nav-top ul li a, #menu-click").removeClass("nav-scroll-color");
            $("nav #nav-top ul, nav #nav-top, nav #nav-bottom").removeClass("nav-scroll-bg");
            $("nav #nav-top").removeClass("nav-scroll-height");

         };
    });

});