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
