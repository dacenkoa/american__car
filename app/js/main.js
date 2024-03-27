$(document).ready(function () {
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

    $('#theme-toggle').click(function () {
        // Перевіряємо поточну тему та змінюємо її
        if ($('body').hasClass('light-mode')) {
            $('body').removeClass('light-mode').addClass('dark-mode');
            
            $('.bx').removeClass('bx-moon').addClass('bx-sun');
            
        } else {
            $('body').removeClass('dark-mode').addClass('light-mode');
            
            $('.bx').removeClass('bx-sun').addClass('bx-moon');
        }
        
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTopBtn').addClass('showBtn');
        } else {
            $('.scrollToTopBtn').removeClass('showBtn');
        }
    });

    $('.scrollToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });




});