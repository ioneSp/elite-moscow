$(document).on('click', '.footer__header', function(e) {
    var $this = $(this);
    $this.closest('.footer__column-content').siblings('.footer__column-content').find('.footer__list').removeClass('active');
    $this.next().addClass('active');
});