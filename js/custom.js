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
        }, 800);
        return false;
    });
});