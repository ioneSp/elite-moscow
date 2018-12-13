'use strict';
$('.ui.dropdown').dropdown({
    on:'hover',
    allowCategorySelection: true
});

$('.header-bottom__box').sticky({
    context: '.main'
});

$('.header-bottom .item.cart').popup({
    popup: $('.cart.popup'),
    closable: true,
    hideOnScroll: true,
    position: 'bottom right',
    lastResort: 'bottom right',
    on: 'click'
});

$('.header__icon-box_cart').popup({
    popup: $('.cart.popup'),
    hideOnScroll: true,
    position: 'bottom center',
    lastResort: 'bottom center',
    on: 'manual'
});

$('.header-main__right .header__phone .icon').popup({
    popup: $('.phone.popup'),
    position: 'bottom right',
    lastResort: 'bottom right',
    on: 'manual'
});

$(document).on('click','.header__icon-box_cart',function (e) {
    e.preventDefault();
    if(window.innerWidth < 768)
        $('.header__icon-box_cart').popup('show');
});
$(document).on('click','.header-cart__close',function (e) {
    $('.cart.popup').popup('hide all');
});
$(document).on('click','.header-main__right .header__phone .icon',function (e) {
    if(window.innerWidth < 768)
        $('.header-main__right .header__phone .icon').popup('show');
});


$('.ui.search').search();
$(".fixed-search__btn").on("click", function (e) {
    e.preventDefault();
    var search_length = $('.fixed-search__input').val();
    if ($(".fixed-search__input").hasClass('focus') && search_length.length != 0 || search_length.length != 0) {

    } else {
        $(".fixed-search__input").addClass('focus');
        $(".fixed-search__input").focus();
    }
});
$(window).scroll(function () {
    $(".fixed-search__input").blur();
    $(".fixed-search__input").removeClass('focus');
    $(".fixed-search__input").val("");
});
$(function ($) {
    $(document).mouseup(function (e) {
        var div = $(".sr-search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".sr-search__input").blur();
            $(".sr-search__input").removeClass('focus');
            $(".sr-search__input").val("");
        }
    });
});

