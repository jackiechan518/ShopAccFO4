(function ($) {
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $('.body').css('background-image','url(../img/bg-carousel-2.jpg)');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background-image','url(../img/bg-carousel-1.jpg)');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });     
})(jQuery);
