$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.go-top').fadeIn('slow');
        } else {
            $('.go-top').fadeOut('slow');
        }
    });

    $('.go-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000, 'easeOutBounce');
        return false;
    });

    var hello = $('.me span:first-child');
    var info = $('.me span:last-child');

    hello.css('position', 'relative');
    info.css('position', 'relative');
    hello.css('right', '1500px');
    info.css('left', '1500px');

    hello.animate({
        right: 0
    }, 2000, 'easeOutElastic');
    info.animate({
        left: 0
    }, 2000, 'easeOutElastic');
});
