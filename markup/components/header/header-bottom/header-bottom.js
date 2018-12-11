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

$(document).ready(function () {
    var ajax_path_search = "/local/frontend/areas/find_result_search.php";
    $(".close_img").on("click", function () {
        $(".sr-basket__panel_dev.sr-basket__panel").css("display", "none");
    });
    $(".sr-search__btn").on("click", function (e) {
        e.preventDefault();
        var search_leanth = $('.sr-search__input').val();
        if ($(".sr-search__input").hasClass('focus') && search_leanth.length != 0 || search_leanth.length != 0) {
            let formSearch = $('#form_header');
            let formSearchData = formSearch.serialize();
            $.ajax({
                url: ajax_path_search,
                data: formSearchData,
                method: "POST",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data == null) {
                        $(".sr-search__input").val("По запросу товар не найден");
                    } else {
                        $('.sr-search form').submit();
                    }
                }
            });
        } else {
            $(".sr-search__input").addClass('focus');
            $(".sr-search__input").focus();
        }
    });
    $(window).scroll(function () {
        $(".sr-search__input").blur();
        $(".sr-search__input").removeClass('focus');
        $(".sr-search__input").val("");
    });
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
