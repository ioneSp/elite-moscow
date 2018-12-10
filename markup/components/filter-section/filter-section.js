$(document)
    .on('click','.filter-section__more-btn', function () {
        $(this).prev().toggleClass('open');
    })
    .on('click','.filter-section__header', function () {
        $(this).toggleClass('open');
    });

