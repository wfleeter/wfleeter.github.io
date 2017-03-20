$(document).ready(function(){

    var navigation = $("#navigation");

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        if (scroll > 50) {
            navigation.addClass("scrollednav");
            navigation.removeClass("nav");

        } else {
            navigation.addClass("nav");
            navigation.removeClass("scrollednav");

        }
    });
});