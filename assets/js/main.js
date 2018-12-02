/*WoW APPEAR*/
new WOW().init();

/*PARALLAX BOX*/
$('.img-parallax').each(function () {
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg() {
        var speed = img.data('speed');
        var imgY = imgParent.offset().top;
        var winY = $(this).scrollTop();
        var winH = $(this).height();
        var parentH = imgParent.innerHeight();


        // PRÓXIMO PIXEL A SER MOSTRADO NA TELA      
        var winBottom = winY + winH;

        // SE O BLOCO ESTÁ SENDO MOSTRADO
        if (winBottom > imgY && winY < imgY + parentH) {
            // NUMERO DE PIXELS MOSTRADOS APÓS APARECER O BLOCO
            var imgBottom = ((winBottom - imgY) * speed);
            // MÁXIMO DE NUMERO DE PIXELS ATÉ O BLOCO DESAPARECER
            var imgTop = winH + parentH;
            // Porcentagem entre o início até o desaparecimento
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }
    $(document).on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});

/*REVOLUTION SLIDER HOME*/
var tpj = jQuery;

var revapi1078;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1078_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
    } else {
        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                }
                ,
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    style: "metis",
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "100%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
                type: "mouse",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});

/*MENU STICKY*/
$(window).scroll(function () {
    if ($(".navbar-fixed-top").offset().top > 80) {

        $(".navbar-fixed-top").addClass("white-bg");
    } else {
        $(".navbar-fixed-top").removeClass("white-bg");
    }
});

/*ISOTOPE PÁGINA DE RAÇAS*/

$(".isotope-grid-wrapper").each(function () {
    var t = $(this),
            i = t.find(".grid-item, .grid-sizer"),
            a = t.data("column-gap"),
            o = t.data("column-gap-horizotal"),
            n = t.data("column-gap-vertical"),
            s = t.data("isotope-column"),
            r = t.data("column-md"),
            l = t.data("column-sm"),
            d = t.data("column-xs"),
            c = t.data("column-tn");
    "undefined" !== t.attr("data-column-gap-horizotal") && (t.find(".isotope-grid-row").css({
        "margin-left": -o / 2,
        "margin-right": -o / 2
    }), t.find(".grid-item").css({
        "padding-left": o / 2,
        "padding-right": o / 2
    })), "undefined" !== t.attr("data-column-gap-vertical") && (t.find(".isotope-grid-row").css({
        "margin-top": -n / 2,
        "margin-bottom": -n / 2
    }), t.find(".grid-item").css({
        "padding-left": n / 2,
        "padding-right": n / 2
    })), "undefined" !== t.attr("data-column-gap") && (t.find(".isotope-grid-row").css({
        margin: -a / 2
    }), t.find(".grid-item").css({
        padding: a / 2
    })), $(window).on("resize", function () {
        if (0 == t.hasClass("gallery-grid-item-style-2")) {
            var e = window.innerWidth,
                    a = 1200,
                    o = 992,
                    n = 768,
                    m = 480;
            m > e ? i.css("width", 100 / c + "%") : n > e ? i.css("width", 100 / d + "%") : o > e ? i.css("width", 100 / l + "%") : a > e ? i.css("width", 100 / r + "%") : i.css("width", 100 / s + "%")
        }
    }).trigger("resize");
    var m = t.find(".isotope-grid"),
            u = t.find(".filters");
    u.on("click", "a", function () {
        var t = $(this).attr("data-filter");
        return $(".current", u).removeClass("current"), $(this).addClass("current"), m.isotope({
            filter: t
        }), !1
    }), $(window).on("resize", function () {
        if (t.hasClass("gallery-grid-item-style-1"))
            var i = .725;
        else
            var i = 1;
        var a = Math.max($(window).width(), window.innerWidth),
                o = t.find(".grid-sizer").width(),
                n = Math.floor(o * i),
                s = 2 * n;
        $(".grid-item", m).each(function () {
            var t = $(this);
            a > 500 ? 0 == t.closest(".isotope-grid-wrapper").hasClass("gallery-grid-item-style-3") && (t.hasClass("high") ? t.css({
                height: s
            }) : $(this).hasClass("wide") ? t.css({
                height: n
            }) : t.hasClass("large") ? t.css({
                height: s
            }) : t.css({
                height: n
            })) : 0 == t.closest(".isotope-grid-wrapper").hasClass("gallery-grid-item-style-3") && (t.hasClass("high") ? $(this).css({
                height: s
            }) : t.hasClass("wide") ? t.css({
                height: n / 2
            }) : t.hasClass("large") ? t.css({
                height: n
            }) : t.css({
                height: n
            }))
        }), m.imagesLoaded(function () {
            m.isotope({
                layoutMode: "masonry",
                itemSelector: ".grid-item",
                transitionDuration: "0.5s"
            })
        })
    }).resize(), u.find('[data-filter="*"]').trigger("click")
})

/*FORM LABEL FLUTUANTE*/
$(document).ready(function () {
    
   
    $('#Inome').on('focus', function () {
        $('#nome').css('opacity', '1');
        $('#nome').css('bottom', '0.9em');
        $('#Inome').attr("placeholder", "");
    });
    $('#Inome').on('focusout', function () {
        if($('#Inome').val() === ""){
            $('#Inome').attr("placeholder", "Nome Completo");
             $('#nome').css('opacity', '0');
        }else{
           $('#Inome').attr("placeholder", "");
             $('#nome').css('opacity', '1');
        }
   });
   
   
    $('#Iassunto').on('focus', function () {
        $('#assunto').css('opacity', '1');
        $('#assunto').css('bottom', '0.9em');
        $('#Iassunto').attr("placeholder", "");
    });
    $('#Iassunto').on('focusout', function () {
        if($('#Iassunto').val() === ""){
            $('#Iassunto').attr("placeholder", "Assunto");
             $('#assunto').css('opacity', '0');
        }else{
           $('#Iassunto').attr("placeholder", "");
             $('#assunto').css('opacity', '1');
        }
   });
   
   
    $('#Itelefone').on('focus', function () {
        $('#telefone').css('opacity', '1');
        $('#telefone').css('bottom', '0.9em');
        $('#Itelefone').attr("placeholder", "");
    });
    $('#Itelefone').on('focusout', function () {
        if($('#Itelefone').val() === ""){
            $('#Itelefone').attr("placeholder", "Telefone");
             $('#telefone').css('opacity', '0');
        }else{
           $('#Itelefone').attr("placeholder", "");
             $('#telefone').css('opacity', '1');
        }
   });
   
   
    $('#Iemail').on('focus', function () {
        $('#email').css('opacity', '1');
        $('#email').css('bottom', '0.9em');
        $('#Iemail').attr("placeholder", "");
    });
    $('#Iemail').on('focusout', function () {
        if($('#Iemail').val() === ""){
            $('#Iemail').attr("placeholder", "E-mail");
             $('#email').css('opacity', '0');
        }else{
           $('#Iemail').attr("placeholder", "");
             $('#email').css('opacity', '1');
        }
   });
    $('#Imensagem').on('focus', function () {
        $('#mensagem').css('opacity', '1');
        $('#mensagem').css('bottom', '0.9em');
        $('#Imensagem').attr("placeholder", "");
    });
    $('#Imensagem').on('focusout', function () {
        if($('#Imensagem').val() === ""){
            $('#Imensagem').attr("placeholder", "Mensagem");
             $('#mensagem').css('opacity', '0');
        }else{
           $('#Imensagem').attr("placeholder", "");
             $('#mensagem').css('opacity', '1');
        }
   });
   
    $("#Itelefone").inputmask({"mask": "(99) 99999-9999"});

});