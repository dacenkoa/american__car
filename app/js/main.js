$('.slick__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // focusOnSelect: true,
    centerMode: true, 
    centerPadding: "50px",
});


$('.burger__menu').on('click', function () {
    $('.header__menu').toggleClass('show');
    $('.burger__menu').toggleClass('show');
    $('.header__content').toggleClass('show');
});
