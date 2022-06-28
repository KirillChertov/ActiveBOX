$(function() {


    /* Fixed Header
    Фиксируем голову при скролле */
    let header = $("#header");  /* Сохраняем шапку header в переменной */
    let intro = $("#intro");    /* Сохраняем intro в переменной */
    let introH = intro.innerHeight(); /*запоминаем высоту intro */
    let scrollPos = $(window).scrollTop(); /* позиция скролла */

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
}



    /*Smoot scroll
    скролл при клике на меню шапки */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');  /* получаем id элемента */
        let elementOffset = $(elementId).offset().top; /* получаем позицию элемента (отступ данного элемента от верха)*/

        nav.removeClass("show");

        $("html, body").animate ({
            scrollTop: elementOffset - 30 /* (-30): регулировка до-скролла */
        }, 700);  /* скролл на позицию элемента */

    });


    /*nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    })


    /* Slider reviews: https://kenwheeler.github.io/slick/  - ( сайт библиотеки )
    библиотека slick js для слайдера */
    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,      /* стрелки */
        dots: true,     /* точки */
    });

});
