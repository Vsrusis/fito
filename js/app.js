$(document).ready(function () {

    $('.instruction_nav .item').on('click', function(e){
        let atr_scroll = $(this).attr("data-scroll");
        $('html,body').animate({ scrollTop: $('.instruction_wrapper [data-scroll='+atr_scroll+']').offset().top -20 }, 1000);
        e.preventDefault();
    });
    $(".scrolls_link a").on('click', function(e){
      e.preventDefault();
      let href = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,
        easing: "linear"
    });

      return false;
  });

    let fd_int = 1;
    setInterval(function () {
        $('.logos .item').removeClass("scale_img");
        $('.logos .item[data-scale="'+fd_int+'"]').addClass("scale_img");
        fd_int++;
        if(fd_int == 6) {
            fd_int = 1;
        }
    },500)
    $(".burg").on("click", function () {
        $(this).toggleClass("act");
        $(".nav_list").toggleClass("act");
        $('html, body').animate( { scrollTop: 0 }, 500, "linear" );
    })
    $(".show_drop_down").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".drop_down").slideToggle();
    })
    $("body").click(function (e) {
        var div = $(".drop_down, .show_drop_down");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".drop_down").fadeOut();
    }
})
    $(".questons_block_item").on("click", function () {
        $(this).toggleClass("change");
        $(this).find(".hidden").slideToggle();
    });
    $(".author_block_text").addClass("act");
    let art_set = $('.anim_tabs');
    if (art_set.length) {
        art_settop = $(".anim_tabs").offset().top + 100;
    } else {
        art_settop = 0;

    }
    function anim_artik () {
        $(".anim_tabs .item").each(function (i, el) {
            setTimeout(function () {
                $(el).addClass("act");
            }, 200 + (i * 200))
        })
    }

    let start_animation = $("body").offset().top;
    let window_hh = $(window).height();
    if (start_animation == "0") {
        $(".animate_mob").each(function () {
            let arr_anim = $(this).offset().top;
            if (arr_anim < window_hh) {
                if ($(this).hasClass("delay_cc")) {
                    setTimeout(function() {
                        $(".delay_cc").addClass("active_mob");
                    }, 2000)
                } else {
                    $(this).addClass("active_mob");
                }
            }
        })
        if (art_settop < window_hh) {
            setTimeout(function (){anim_artik ();}, 1000)

        }
    }
    $(window).scroll(function() {
        let scroll_mob2 = $(window).scrollTop() + $(window).height();
        let top_height_window = $(window).scrollTop();
        if (art_settop < scroll_mob2) {
            anim_artik ();
        }
        if (top_height_window > 500) {
            $(".arrow_top").addClass("show");
            if ($(window).width() < 1024) {
            }
        } else {
            $(".arrow_top").removeClass("show");
            if ($(window).width() < 1024) {
            }
        }
        if (top_height_window > 1000) {
            $(".number_and_envelop").fadeIn();
        } else {
            $(".number_and_envelop").fadeOut();
        }
        $(".animate_mob").each(function () {
            if ($(window).width() < 1200) {
                elem_scroll = $(this).offset().top + 50;
            } else {
                elem_scroll = $(this).offset().top + 50;
            }
            if(scroll_mob2 > elem_scroll) {
                $(this).addClass("active_mob");
            }
        })
    })
    $(".arrow_top").on("click", function () {
        $('html, body').animate( { scrollTop: 0 }, 1100 );
    })

    $('.reviews_block_sl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false
        }
    }
    ]
});
    if($(window).width() < 1024) {
        $('.sl_manf').slick({
            slidesToShow: 1,
            infinite: false,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
        });
    }
    $(".more_pords").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("act");
        $(this).siblings("ul").slideToggle();
    })
    $(".show_popup").on("click", function (e) {
        e.preventDefault();
        $(".overlay, .popup_form").fadeIn();
    })
    $(".close").on("click", function (e) {
        e.preventDefault();
        $(".overlay, .popup_shops, .popup_form, .block_phone").fadeOut();
    })
    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.popup_shops, .popup_form, .block_phone') === null){
            $(".overlay, .popup_shops, .popup_form, .block_phone").fadeOut();
        }
    });
    if($(window).width() > 767) {
        $(".show_block_phone").on("click", function (e) {
            e.preventDefault();
            $(".block_phone").fadeIn();
        })
    }

})