// search
$('.search-icon').click(function() {
    $('.search-wrap').toggleClass('search-active');
});
$('.mean-expand-home').click(function() {
    $('.submenu-home').toggleClass('open-menu');

});
$('.mean-expand-room').click(function() {
    $('.submenu-room').toggleClass('open-menu');

});
$('.mean-expand-news').click(function() {
    $('.submenu-news').toggleClass('open-menu');

});
// banner
$('#carouselExampleInterval').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="prev"><i class="fas fa-angle-double-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-double-right"></i></span>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// booking
$('#Guests').click(function() {
    $('#Guests').toggleClass('open');
});
$('#Adult').click(function() {
    $('#Adult').toggleClass('open');
});
// laest room
$('.slick').on('init reInit afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
) {
    if (!slick.$dots) {
        return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    var statusText = i > 10 ? i : '0' + i;
    $('.pagingInfo').html(
        '<span class="big-num">' +
        statusText +
        '<span class="small">' +
        slick.$dots[0].children.length +
        '</span>' +
        '</span> '
    );
});
// latest-room
$('.slick').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.room-arrows',
    prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
// Feedback
$('#feedbackSlideActive').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<span class="prev"><i class="fas fa-angle-double-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-double-right"></i></span>',
    responsive: [{
            breakpoint: 1599,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});
// brans
$('#brandsSlideActive').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
// booking-room-list

// banner detail
$('.main-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.dots-slider',
    prevArrow: '<span class="prev"><i class="fas fa-angle-double-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-double-right"></i></span>'
});
$('.dots-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3
        }
    }]
});
// form
var form = document.forms['form_login'];
var error = document.getElementsByClassName("error");
var rog_name = /^[A-Z]{5,}$/;
form.name.onblur = function() {
    if (form.name.value == '') {
        errorname.innerHTML = 'vui lòng nhập họ tên';
        error.innerHTML = '';
    } else {
        errorname.innerHTML = '';
    }
}
form.email.onblur = function() {
    if (form.email.value == '') {
        erroremail.innerHTML = 'vui lòng nhập email';
        error.innerHTML = '';
    } else {
        erroremail.innerHTML = '';
    }
}

// quy định in hoa
form.onsubmit = function() {
    if (!rog_name.test(form.name.value)) {
        errorname.innerHTML = 'họ tên là chữ in hoa';
        error.innerHTML = '';
        return false;
    } else {
        errorname.innerHTML = '';
    }
    if (!rog_password.test(form.password.value)) {
        errorpassword.innerHTML = 'mật khẩu không đúng định dạng( gồm chữ hoa,thường,số và ký tự đặc biệt )';
        error.innerHTML = '';
        return false;
    } else {
        errorpassword.innerHTML = '';
    }
}