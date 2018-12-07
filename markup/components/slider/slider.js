$(function () {
    $('.slider__list_card').owlCarousel({
        items: 4,
        loop:true,
        dots: true
    });

    $('.slider__list_entry').owlCarousel({
        items: 1,
        loop:true,
        dots: true
    });

    $('.slider__list_brand').owlCarousel({
        items: 6,
        loop:true,
        dots: true
    });

    $('.slider__list_main').owlCarousel({
        stagePadding: 372,
        items: 1,
        loop:true,
        center:true,
        nav: true,
        navText: ["", ""],
        dots: true,
        responsive: {
            1280: {
                stagePadding: 90,
            }
        }
    });

    $('.slider__navigation .slider__navigation-item').tab({
        context: $('.grid-categories')
    });
});
