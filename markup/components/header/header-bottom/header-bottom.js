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
    position: 'right bottom',
    lastResort: 'right bottom',
    on: 'click'
});

$(document).on('click', '.header-cart__close', function() {
    $('.cart.popup').popup('hide');
});

$('.header-cart__close').popup({
    popup: $('.cart.popup'),
    on: 'click'
}).popup('hide');

/*$('.header-cart__close').popup({
    popup: $('.cart.popup'),
    on: 'click',
    onHide: function() {}
});*/

$('.header__phone .icon').popup({
    popup: $('.phone.popup'),
    target: $('.header-main'),
    closable: true,
    hideOnScroll: true,
    position: 'right bottom',
    lastResort: 'right bottom',
    on: 'click'
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

