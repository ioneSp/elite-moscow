if (jQuery().owlCarousel) {

    function owlCallback(event) {
        console.log('hooray!');
    }

    $("[data-carousel]").each(function (index, el) {
        var defaults = {
                margin: 0,
                autoplay: false,
                autoplayTimeout: 2000,
                responsiveClass: true,
                items: 6,
                dots: true,
                nav: true,
                lazyLoad: false,
                loop: false,
                autoHeight: false,
                navText: ['<svg width="46" height="47" viewBox="0 0 46 47" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-180 23 23.5)" stroke="#A29F97" stroke-width="1.333" fill="none" fill-rule="evenodd"><ellipse cx="23" cy="23.333" rx="22.333" ry="22.667"/><path d="M20 16.232l6 7.163-6 7.168"/></g></svg>', '<svg width="46" height="47" viewBox="0 0 46 47" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .333)" stroke="#A29F97" stroke-width="1.333" fill="none" fill-rule="evenodd"><path d="M20 16.232l6 7.163-6 7.168"/><ellipse cx="23" cy="23.333" rx="22.333" ry="22.667"/></g></svg>'],
                center: false,
                onChanged: owlCallback
            },
            options = $(this).data('carousel'),
            settings = $.extend({}, defaults, options),
            i = settings.items;

        settings.responsive = {
            320: {
                items: Math.ceil(320 * i / 1920)
            },
            768: {
                items: Math.ceil(768 * i / 1920)
            },
            992: {
                items: Math.ceil(992 * i / 1920)
            },
            1200: {
                items: Math.ceil(1200 * i / 1920)
            },
            1920: {
                items: i
            }
        };

        if (options.items1200 !== undefined) settings.responsive[1200].items = options.items1200;
        if (options.items992 !== undefined) settings.responsive[992].items = options.items992;
        if (options.items768 !== undefined) settings.responsive[768].items = options.items768;
        if (options.items320 !== undefined) settings.responsive[320].items = options.items320;


        if (options.animation !== undefined) {
            settings.animateOut = options.animation;
        }

        var carousel = $(el).owlCarousel(settings);

        if (options.goto !== undefined) {
            carousel.trigger('to.owl.carousel', options.goto);
        }


        carousel.on('translate.owl.carousel', function (e) {
            idx = e.item.index;
            $('.owl-item.big').removeClass('big');
            $('.owl-item.medium').removeClass('medium');
            $('.owl-item').eq(idx).addClass('big');
            $('.owl-item').eq(idx - 1).addClass('medium');
            $('.owl-item').eq(idx + 1).addClass('medium');
        });
    });
    $('.slider__navigation .slider__navigation-item').tab({
        context: $('.grid-categories')
    });
}