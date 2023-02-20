
// #header_scroll 헤드스크롤 부분
$(window).on('scroll', function () {
    console.log('스크롤', $(window).scrollTop());

    if ($(window).scrollTop() > 0) {
        $('#header_scroll').addClass('on');
    }
    else {
        $('#header_scroll').removeClass('on');
    }

});




$(function () {
    $('.main_slide').slick({
        dots: true,
    })

});