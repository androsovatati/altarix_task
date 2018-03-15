$(function() {

    $('.tab').click(function() {
        $('.tab_active').removeClass('tab_active');
        $(this).addClass('tab_active');
    });

});