$(document).ready(function () {


    if ($(window).width() > 1023) {
       $(".anim_first").addClass("act_fr_anim");
       $(".anim_first_op").css("opacity", "1");
   }
   let posctr44 = 0;
   setInterval(function () {
    if (posctr44 > -3544) {
        $(".line_anim_s").css('background-position', ''+posctr44+'px 0');
        posctr44 = posctr44 - 886;
        if (posctr44 == -3544) {
            posctr44 = 0;
        }
    } else {

    }
}, 200);

   let anim_woom = function () {
       let pos_l = $(".wooman_block_wrapper").offset().left + $(".line_anim_u").width();
       let step_w = -pos_l;
       setTimeout(function() {
        setTimeout(function() {$(".wooman").attr("src", "img/easy_exit3.png");}, 900)
        let animate_doors = setInterval(function () {
            $(".line_anim_u").css("left", +step_w+"px");
            step_w = step_w + 80;

            if ($(window).height() > 920) {
                if (step_w > -11) {
                   $(".line_anim_s").addClass("door_wt");
               }
               if (step_w > -6) {
                   $(".line_anim_s").addClass("door_wt2");
               }
           } else {
            if (step_w > -110) {
             $(".line_anim_s").addClass("door_wt");
         }

         if (step_w > -15) {
           $(".line_anim_s").addClass("door_wt2");
       }
   }
   if (step_w > -700) {
    $(".wooman").attr("src", "img/easy_exit3.png");
}

if ($(window).height() > 920) {
    if (step_w > 74) {
        setTimeout(function() {
            $(".door").attr("src", "img/close_door.png");
            $(".wooman").attr("src", "img/easy_exit1.png");
        },200)
        if ($(window).width() < 1023) {
            $(".line_anim_u").remove();
            clearInterval(animate_doors);
        } else {
            step_w = -pos_l;
            setTimeout(function() {
                $(".line_anim_s").removeClass("door_wt");
                $(".line_anim_s").removeClass("door_wt2");
                $(".wooman").attr("src", "img/easy_exit3.png");
                $(".door").attr("src", "img/open_door.png")
            }, 1200)
        }
    }
} else {
    console.log(step_w);
    if (step_w > -11) {
        setTimeout(function() {
            $(".door").attr("src", "img/close_door.png");
            $(".wooman").attr("src", "img/easy_exit1.png");
        },200)

        if ($(window).width() < 1023) {
            setTimeout(function () {
                $(".line_anim_u").remove();
            }, 200)
            clearInterval(animate_doors);
        } else {
            step_w = -pos_l;
            setTimeout(function() {
                $(".line_anim_s").removeClass("door_wt");
                $(".line_anim_s").removeClass("door_wt2");
                $(".wooman").attr("src", "img/easy_exit3.png");
                $(".door").attr("src", "img/open_door.png")
            }, 1200)
        }
    }
}

}, 200)

    },1000);
   }

   if ($(window).width() > 767) {

       anim_woom();
   }

   let intervalId, intervalId2, fixed_color_fnc, event_send = 1, time_arrow = 0, flag = true, posctr = -166, flag2 = true, disabled_let_scroll = true, clickStart = 0, flag_anim_mob = true;
   function preventDefault(e) {
    e.preventDefault();
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    }));
} catch (e) {
}
var wheelOpt = supportsPassive ? {passive: false} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
    window.addEventListener('touchmove', preventDefault, wheelOpt); 
}
function enableScroll() {
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
}
$('.main_sl_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    dots: false,
    fade: true,
    cssEase: 'linear',
    arrows: true
});

function kish_int () {
    posctr = - 166;
    intervalId = setInterval(function () {
        if (posctr > -8134) {
            $(".anim_zh").css('background-position', ''+posctr+'px 0');
            posctr = posctr - 166;
        }
    }, 40);
}
function color_fix () {
   fixed_color_fnc = setTimeout(function () {
    $("#flora circle").addClass("color_fixed");
}, 4000);
}
$('.main_sl_slider').on('beforeChange', function(event, slick, direction, currentSlide){
    $(".main_sl_bottom_item").show();
    $(".main_sl_bottom_item.hide").hide();
    if(currentSlide == 0) {
        clearInterval(intervalId);
        kish_int();
    } 
    if(currentSlide == 1) {
        $(".top_anim_clock").animate({
            width: 0
        }, 3000, "linear", function () {})
        $(".bottom_anim_clock").animate({
            width: 100
        }, 3000, "linear", function () {
            $(".clock_send").css("transition", "transform 0.5s");
            $(".clock_send").css("transform", "rotate(180deg)");
            $(".line_anim").css("top", "100px");
            setTimeout(function() {
                $(".clock_send").css("transition", "transform 0s");
                $(".clock_send").css("transform", "rotate(0deg)");
                $(".top_anim_clock").css("width", "100px");
                $(".bottom_anim_clock").css("width", "0px");
                $(".line_anim").css("height", "5px");
                $(".line_anim").css("top", "87px");
            },1500)
        })
        $(".line_anim").animate({
            height: 78,
            top: 96
        }, 150, "linear", function () {})
    } else {
        $(".top_anim_clock").stop();
        $(".bottom_anim_clock").stop();
        $(".line_anim").stop();
    }
    if(currentSlide == 2) {
        $(".main_sl_bottom_item").hide();
        $(".main_sl_bottom_item.hide").show();
        $(".finger").addClass("act");
    } else {
        $(".finger").removeClass("act");
    }
    if(currentSlide == 3) {

        intervalId2 = setInterval(function () {
            if (time_arrow <= 360) {
                $(".arrow_alarm").css("transform", "translateX(-50%) rotate("+time_arrow+"deg)");
                time_arrow = time_arrow + 5;
            } else {
                $(".arrow_alarm").css("transform", "translateX(-50%) rotate(0deg)");
                $(".clock1, .arrow_alarm").hide();
                $(".clock2").show().addClass("act");
            }
        },20)
    } else {
        time_arrow = 0;
        clearInterval(intervalId2);
        $(".clock1, .arrow_alarm").show();
        $(".clock2").hide().removeClass("act");
    }
    if(currentSlide == 4) {
        $("#belly").addClass("act");
    } else {
        $("#belly").removeClass("act");
    }
    if(currentSlide == 5) {
        color_fix();
        $("#flora").addClass("act");
    } else {
        clearInterval(fixed_color_fnc);
        $("#flora circle").removeClass("color_fixed");
        $("#flora").removeClass("act");
    }
    if(currentSlide == 6) {
        $(".main_sl_bottom_item").hide();
        $(".main_sl_bottom_item.hide").show();
        $(".clock1, .arrow_alarm").show();
        $(".clock2").hide().removeClass("act");
        $("#seven_flower").addClass("seven_flower_anim_s");
    } else {
        $("#seven_flower").removeClass("seven_flower_anim_s");
    }
});
let count_dot = 1;
function intrval_dot_act () {
    $(".mibile_wodtk_item").removeClass("act");
    $(".item_dot").removeClass("act");
    $("[data-dot="+count_dot+"]").addClass("act");
    if(count_dot <= 4) {
        count_dot++;
        if (count_dot == 5) {
            count_dot = 0;
        }
    } else {
        count_dot = 0;
    }
}
let interval_dot = setInterval(intrval_dot_act, 3000);
if ($(window).width() > 1024) {
 $(".item_dot").hover(function () {
    $(".item_dot").removeClass("act");
    $(this).addClass("act");
    clearInterval(interval_dot);
    count_dot = parseInt($(this).attr("data-dot")) + 1;
},
function () {
    interval_dot = setInterval(intrval_dot_act, 3000)
}
)
} else {
 $(".item_dot").on("click", function () {
    $(".mibile_wodtk_item").removeClass("act");
    $(".item_dot").removeClass("act");
    clearInterval(interval_dot);
    let act_dot = $(this).attr("data-dot");
    $("[data-dot="+act_dot+"]").addClass("act");
    count_dot = parseInt($(this).attr("data-dot"));
    interval_dot = setInterval(intrval_dot_act, 3000)
})
}


$(window).scroll(function() {
    let scroll_to = $(window).scrollTop();
    let scroll2 = $(window).scrollTop() + $(window).height()/2;
    let scroll_mob = $(window).scrollTop() + $(window).height();
    let offset0 = $(".main_first").offset().top;
    let offset1 = $(".main_slider").offset().top;
    let offset2 = $(".problem_block").offset().top;
    let offset3 = $(".how__use").offset().top;
    if (scroll_mob < offset1 + $(window).height() && scroll_to + 40 > offset1 && flag == true ) {
        flag = false;
        clearInterval(intervalId);
        kish_int();
        if ($(window).width() < 1023) {
            $(".main_slider").addClass("line_top_anim");
        }
    }

    if (scroll_to < 200) {
        flag = true;
    }
    if (scroll_to > offset2) {
        flag = true;
    }
    if (scroll2 > offset1 + 400) {
        $(".anim_first").removeClass("act_fr_anim");
        $(".anim_first_op").css("opacity", "0");
    } else {
        $(".anim_first").addClass("act_fr_anim");
        $(".anim_first_op").css("opacity", "1");
    }
    if (scroll2 > offset3 && flag2 == true) {
        flag2 = false;
        if ($(window).width() < 1023) {
            $(".how__use").addClass("line_top_anim");
        }
    }

    if (scroll2 > offset2) {
        $(".circles_block .item").addClass("act");
        if ($(window).width() > 767) {
            setTimeout(function () {
                $(".circles_block .item").addClass("act");
            }, 1000)
            setTimeout(function () {
                $(".circles_block .item.act").addClass("height_act");
            }, 1500)
            setTimeout(function () {
                $(".circles_block .item .item_body").addClass("act");
            }, 2500)
        } else {
            setTimeout(function () {
                $(".circles_block .item").addClass("none_delay");
            })
        }
    }

    $(".animate_mob").each(function () {
        if ($(window).width() < 1200) {
            elem_scroll = $(this).offset().top - $(this).height() - 100;
        } else {
            elem_scroll = $(this).offset().top - $(this).height() - 50;
        }
        if(scroll_mob > elem_scroll) {
            $(this).addClass("active_mob");
        }
    })
})
if($(window).width() < 1024 && $(window).width() > 767) {
    $(".wooman_block_wrapper").show();
    setTimeout(function() {
        $(".banner_svg").addClass("anim_logo");
    }, 300)
    setTimeout(function() {
        $(".elipse").addClass("act");
    }, 3900)
    setTimeout(function() {
        $(".banner_svg").hide();
        $(".wooman, .door").css("opacity", "0");
        $('.wooman_block_wrapper .list_item').addClass("act_anim");
    }, 4500)
    setTimeout(function() {
        $('.wooman_block_wrapper .pack_block').addClass("act_anim");
    }, 5000)
    setTimeout(function() {
        $('#videoBuy').addClass("act_anim");
        $('.flag_lap').addClass("anim_width");
    }, 5500)
}

$(window).on('touchstart', (event) => {
    clickStart = event.touches[0].clientY;
});
let anim_mobile = function () {
    flag_anim_mob = false;
    disableScroll();
    var destination = $('.block_easy_exit').offset().top;
    $('html, body').animate( { scrollTop: destination }, 1200, "linear" );
    $(".wooman_block_wrapper").show();
    anim_woom();
    setTimeout(function() {
        $(".banner_svg").addClass("anim_logo");
    }, 300)
    setTimeout(function() {
        $(".elipse").addClass("act");
    }, 3900)
    setTimeout(function() {
        $(".banner_svg").hide();
        $(".wooman, .door").css("opacity", "0");
        $('.wooman_block_wrapper .list_item').addClass("act_anim");
    }, 4500)
    setTimeout(function() {
        $('.wooman_block_wrapper .pack_block').addClass("act_anim");
    }, 5000)
    setTimeout(function() {
        $('#videoBuy').addClass("act_anim");
        $('.flag_lap').addClass("anim_width");
    }, 5500)
    setTimeout(function() {
        enableScroll();
        $(".logo_mob").css("display", "block");
        $(".block_mobile_ft_screen").hide();
        disabled_let_scroll = false;
        $('html, body').animate( { scrollTop: 0 }, 0 );
        $(".bg_lp_main .mobile_nav_block .mobile_nav_block_wrap .logo_mob img").css("opacity", "1");
    }, 1500)
    setTimeout(function() {
        $(".bg_lp_main").css("position", "sticky");
    }, 1700)
}
if($(window).width() < 768) {
    $(".main_first").on('touchmove', (event) => {
        if(disabled_let_scroll == true) {
        }
        let difference = clickStart - event.touches[0].clientY;
        // Обработчик если пользователь листает вниз
        if (difference > 0 && flag_anim_mob == true) {
            anim_mobile ();
        }

    })
    $(".hand_cur").on("click", function () {
        anim_mobile ();
    })
    $(".circles_block .item").on("click", function (e) {
        e.preventDefault();
        let context_let = $(this);
        context_let.toggleClass("mob_anim");
        context_let.toggleClass("height_act");
        $(".overlay_block").toggleClass("act");
        
    })
    $(".overlay_block").on("click", function () {
        $(".overlay_block").removeClass("act");
        $(".circles_block .item").removeClass("height_act");
        $(".circles_block .item").removeClass("mob_anim");
    })
}

})