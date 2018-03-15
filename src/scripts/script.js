$(function() {

    new WOW().init();

    $('a[href*="#"]').on('click', function (e) {
        var target = $(this).attr('href');
        
        $(target).velocity('scroll', {
            duration: 800,
            easing: 'ease-in-out'
        });
    });

    $('.tab').click(function() {

        $('.tab_active').removeClass('tab_active');
        $(this).addClass('tab_active');
        
    });

    $('.banner.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        nav:false,
        dots: false,
        rewind: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        items: 1
    });

    $('.testimonials__carousel.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        nav:false,
        dots: false,
        rewind: false,
        smartSpeed: 1500,
        items: 1
    });

    
    $('.header__arrow_left').click(function() {
        $('.banner.owl-carousel').trigger('prev.owl.carousel');
    });

    $('.header__arrow_right').click(function() {
        $('.banner.owl-carousel').trigger('next.owl.carousel');
    });

    $('.testimonials__arrow_left').click(function() {
        $('.testimonials__carousel.owl-carousel').trigger('prev.owl.carousel');
    });

    $('.testimonials__arrow_right').click(function() {
        $('.testimonials__carousel.owl-carousel').trigger('next.owl.carousel');
    });
    
    
});