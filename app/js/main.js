$('.slick__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // focusOnSelect: true,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});


$('.burger__menu').on('click', function () {
    $('.header__menu').toggleClass('show');
    $('.burger__menu').toggleClass('show');
    $('.header__content').toggleClass('show');
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTopBtn').addClass('showBtn');
        } else {
            $('.scrollToTopBtn').removeClass('showBtn');
        }
    });
    
    $('.scrollToTopBtn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
