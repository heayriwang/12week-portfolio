
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
    // 메인슬라이드 부분
    $('.main_slide').slick({
        dots: true,
        autoplay: true,
    });

    // 상품 슬라이드 부분
    $('.pro_slide').slick({

    });


    $('.right_Banner button').on('click', function () {
        $('.right_Banner').toggleClass('on')
    })
});