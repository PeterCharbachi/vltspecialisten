jQuery(document).ready(function ($) {

    $(".main-container").css("display", "block");

    $('.gt-mobile-nav-menu').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('opened closed');
    });

    $('.ct-hero-section .ct-text-content').fadeIn(4000);

    $(window).on('scroll load', function () {
        var width = $(window).innerWidth()

        $('.ct-hero-section .ct-bg-img img').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var position = bottom_of_window - bottom_of_object;
            position *= 0.010;
            if (position > 20) {
                position = 20;
            }
            $(this).css({
                '-webkit-filter': 'blur(' + position + 'px)',
                '-moz-filter': 'blur(' + position + 'px)',
                '-ms-filter': 'blur(' + position + 'px)',
                '-o-filter': 'blur(' + position + 'px)',
                'filter': 'blur(' + position + 'px)'
            });
        });

        $('.ct-image-block').each(function (i) {
            var top_of_object = $(this).offset().top + $(this).scrollTop();
            var bottom_of_window = $(window).scrollTop() + $(window).innerHeight();

            if (bottom_of_window > top_of_object) {
                $(this).addClass('come-in');
            }

        });

        $('.ct-contact-section .ct-pop-block .ct-pop-inner').each(function (i) {
            var top_of_object = $(this).parent().offset().top + $(this).parent().scrollTop();
            var bottom_of_window = $(window).scrollTop() + $(window).innerHeight() * 0.88;

            if (bottom_of_window > top_of_object) {
                $(this).each(function (i) {
                    if (width <= 767) {
                        $(this).addClass('contact-animation-mobile');
                    } else {
                        $(this).addClass('contact-animation');
                    }
                });
            }

        });

        $('.ct-video-block video').each(function (i) {
            var top_of_object = $(this).offset().top + $(this).scrollTop();
            var bottom_of_window = $(window).scrollTop() + $(window).innerHeight();

            if (bottom_of_window > top_of_object) {
                $('.gt-video-overlay').addClass('hide');
                $('.gt-video-play-btn').addClass('playing');
                $('video').get(0).play();
            } else {
                $('video').get(0).pause();
                $('.gt-video-play-btn').removeClass('playing');
            }

        });

    });


    $('.gt-video-play-btn').click(function () {
        $('.gt-video-overlay').addClass('hide');
        $('.gt-video-play-btn').toggleClass('playing');

        if ($(this).hasClass("playing")) {
            $('video').get(0).play();
        } else {
            $('video').get(0).pause();
        }

    });



    $('.ct-hero-section .ct-hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: false,
        centerMode: true,
        mobileFirst: true,
    });
    $(window).on("load resize", function (e) {
        if ($(window).width() > 1024 && !$('.ct-hero-slider .slick-dots li p').length > 0) {
            $('.ct-hero-slider .slick-slide').each(function (index) {
                var slideTitle = $(this).find('h2').html();
                $('.ct-hero-slider .slick-dots li').eq(index).append('<p class="text-slider-' + (index + 1) + '">' + '0 ' + (index + 1) + '. ' + slideTitle + '</p>');
            });
        } else if ($(this).innerWidth() < 1024 && $('.ct-hero-slider .slick-dots li p').length > 0) {
            $(".ct-hero-slider .slick-dots li p").remove();
        }
    });

    $('.slick-dots').click(function () {
        $('.ct-hero-section .ct-hero-slider').slick('slickPause');
    });

    // Smooth scroll anchor on same page
    $('a').on('click', function (e) {

        if ((window.location.pathname == $(this)[0].pathname) && ($(this)[0].hash != "")) {
            var scrollToAnchor = $(this)[0].hash;
            e.preventDefault();

            var $anchorEl = $(scrollToAnchor);

            if ($anchorEl.length > 0) {
                $('.gt-mobile-nav-menu').toggleClass('opened closed');
                $('html, body').animate({
                    scrollTop: $anchorEl.offset().top
                }, 1500);
                return false;
            }
        }
    });

    // Scroll back to top function
    $('body').append('<div class="gt-scroll-to-top"><i class="fas fa-angle-up"></i></div>');
    
    function scrollToTop() {
    var pageHeight  = $(document).outerHeight();
    
        if( pageHeight > 3000 ) {
            $(window).on('scroll', function() {
            var offsetTop    = $(document).scrollTop();
            
            if( offsetTop > (pageHeight / 4) ) {
                $('.gt-scroll-to-top').addClass('slide-in');
            }else {
                $('.gt-scroll-to-top').removeClass('slide-in');
            }
            
            });   
        }
    }
    
    scrollToTop();
    
    $('.gt-scroll-to-top').on('click', function() {
        
    var $body = $("html, body");
    
    $body.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        $body.stop();
    });
    
    $body.stop().animate({
        scrollTop: $('body').offset().top
    }, 1000, function() {
        $body.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove")
    });
    })
});
