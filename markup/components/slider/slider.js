$(function () {
    setTimeout(function () {

    $('.slider__list_main').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        navText: ['',''],
        responsive : {
            0: {
                autoWidth: false,
                items: 1,
                loop: true,
                center: false,
            },
            1200: {
                items: 1,
                autoWidth: true,
                stagePadding: 0,
                margin: 0,
                center: true,
            }
        }
    });
    $('.slider__list_card').owlCarousel({
            dots: true,
            navText: ['',''],
            responsive : {
                0: {
                    items: 1,
                    autoWidth: true
                },
                320: {
                    items: 1,
                    autoWidth: true
                },
                640: {
                    items: 2,
                    autoWidth: true
                },
                768: {
                    items: 3,
                    autoWidth: true
                },
                1024: {
                    items: 4,
                    autoWidth: true
                },
                1200: {
                    items: 4,
                },
            }
        });

    $('.slider__list_brand').owlCarousel({
        dots: true,
        navText: ['',''],
        responsive : {
            0: {
                items: 1,
                autoWidth: true,
            },
            320: {
                items: 1,
                autoWidth: true,
            },
            640: {
                items: 3,
                autoWidth: true,
            },
            768: {
                items: 4,
                autoWidth: true,
            },
            1024: {
                items: 5,
            },
            1200: {
                items: 6,
            },
        }
    });

    $('.slider__list_entry').owlCarousel({
        autoWidth: true,
        items: 3,
        dots: true,
        navText: ['',''],
        responsive : {
            320: {
                items: 1,
                autoWidth: true,
            },
            640: {
                items: 3,
                autoWidth: true,
            },
            768: {
                items: 4,
                autoWidth: true,
            },
            1024: {
                items: 5,
                autoWidth: true,
            },
            1200: {
                items: 3,
                autoWidth: false,
            },
        }
});
    },100);
});
