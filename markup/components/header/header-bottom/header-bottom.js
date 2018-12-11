'use strict';
$('.ui.dropdown').dropdown();

$('.header-bottom__box').sticky({
    context: '.main'
});

$('.header-bottom .item.cart')
    .popup({
        popup: '.cart.popup',
        position: 'bottom right',
        lastResort: 'bottom right',
        closable: false,
        on: 'click',
        delay: {
            show: 300,
            hide: 800
        }
    });

/*$('.header-cart__close')
    .popup({
        popup: '.cart.popup',
        on: 'click'
    })
    .popup('toggle');*/


$('.ui.search').search();
