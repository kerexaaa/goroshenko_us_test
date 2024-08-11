$(function () {



    'use strict';



    // AOS.init();



    // ---- settings popup form ---- //

    $('.btn_tel').click(function () {

        $('.popup-form').addClass('active');

        $('body').css('overflow', 'hidden');

        $('form.popup-form__form input[name="fname"]').val('Форма з поп-папу по кнопці '+$(this).html());

    });

    $('.close').click(function () {

        $('.popup-form').removeClass('active');

        $('body').css('overflow', 'visible');

    });



    $(document).mouseup(function (e) {

        let container = $(".popup-form");

        if (container.has(e.target).length === 0) {

            container.removeClass('active');

            $('body').css('overflow', 'visible');

        }

    });

    // date-change | price change!!!

    $(document).ready(() => {
        const dateTill = document.querySelectorAll('[data-date-till]')
        dateTill.forEach(item => {
            item.innerHTML = '15 серпня'
        })
        
        // prices

        // Знижена ціна

        const discountPrice = document.querySelectorAll('[data-discount-price]') 
        discountPrice.forEach(item => {
            item.innerHTML = '400₴';
        })
        
        // Закреслена ціна 

        const oldPrice = document.querySelectorAll('[data-old-price]') 
        oldPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })
        
        // Наступна консультація

        const nextConsultation = document.querySelectorAll('[data-next-consultation]') 
        nextConsultation.forEach(item => {
            item.innerHTML = '900-1000₴';
        })
        
        // 5 консультацій

        const fiveConsultations = document.querySelectorAll('[data-five-consultations]') 
        fiveConsultations.forEach(item => {
            item.innerHTML = '4000₴';
        })
        
        // 10 консультацій

        const tenConsultations = document.querySelectorAll('[data-ten-consultations]') 
        tenConsultations.forEach(item => {
            item.innerHTML = '8000₴';
        })

        // Індивідуальні нова / закреслена

        const individualConsults = document.querySelectorAll('[data-individual-price]') 
        individualConsults.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldIndividualConsults = document.querySelectorAll('[data-individual-old-price]') 
        oldIndividualConsults.forEach(item => {
            item.innerHTML = '1000₴';
        })

        // Сімейні консультаціїї нова / закреслена

        const familyConsults = document.querySelectorAll('[data-family-price]') 
        familyConsults.forEach(item => {
            item.innerHTML = '1200₴';
        })

        const oldFamilyConsults = document.querySelectorAll('[data-family-old-price]') 
        oldFamilyConsults.forEach(item => {
            item.innerHTML = '1600₴';
        })
        
        // Дитячі консультації нова / закреслена

        const childrenConsults = document.querySelectorAll('[data-children-price]') 
        childrenConsults.forEach(item => {
            item.innerHTML = '1000₴';
        })

        const oldChildrenConsults = document.querySelectorAll('[data-children-old-price]') 
        oldChildrenConsults.forEach(item => {
            item.innerHTML = '1400₴';
        })
        
        // Надія Лобас нова / стара ціна

        const lobasPrice = document.querySelectorAll('[data-lobas-price]') 
        lobasPrice.forEach(item => {
            item.innerHTML = '400₴';
        })
        
        const oldLobasPrice = document.querySelectorAll('[data-lobas-old-price]') 
        oldLobasPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })
        
        // Меланія Горошенко нова / стара ціна 

        const goroshenkoPrice = document.querySelectorAll('[data-melania-price]') 
        goroshenkoPrice.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldGoroshenkoPrice = document.querySelectorAll('[data-melania-old-price]') 
        oldGoroshenkoPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })
        
        // Уляна Давид нова / стара ціна

        const davydPrice = document.querySelectorAll('[data-davyd-price]') 
        davydPrice.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldDavydPrice = document.querySelectorAll('[data-davyd-old-price]') 
        oldDavydPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })

        // Валерія Петерс нова / стара ціна

        const petersPrice = document.querySelectorAll('[data-peters-price]') 
        petersPrice.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldPetersPrice = document.querySelectorAll('[data-peters-old-price]') 
        oldPetersPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })

        // Валерія Шайнікова нова / стара ціна

        const shainikovaPrice = document.querySelectorAll('[data-shainikova-price]') 
        shainikovaPrice.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldShainikovaPrice = document.querySelectorAll('[data-shainikova-old-price]') 
        oldShainikovaPrice.forEach(item => {
            item.innerHTML = '1000₴';
        })

        // Тетяна стольнікова нова / стара ціна

        const stolnikovaPrice = document.querySelectorAll('[data-stolnikova-price]') 
        stolnikovaPrice.forEach(item => {
            item.innerHTML = '400₴';
        })

        const oldStolnikovaPrice = document.querySelectorAll('[data-stolnikova-old-price]') 
        oldStolnikovaPrice.forEach(item => {
            item.innerHTML = '800₴';
        })
    })

    // date-change | price change!!!


    // ---- anim mobile menu ---- //

    $('.header__burger').click(function () {

        $('header.header').toggleClass('open');

        $('body').toggleClass('no__scroll');


    });




    $(window).scroll(function () {

        let scrollDock = $(document).scrollTop();



        if (scrollDock > 1) {

            $('header').addClass("active");
            $('.cabinet__svg .svg-icon').addClass("active");
            
        } else {
            
            $('header').removeClass("active");
            $('.cabinet__svg .svg-icon').removeClass("active");

        }

    });





    // ---- button up ---- //

    function buttonUp() {

        $('.up').click(function () {

            var up = $('main').offset().top;

            $('html, body').animate({ scrollTop: up }, 350);

        });



        $(window).scroll(function () {

            let scrollDock = $(document).scrollTop();

            if (scrollDock + 80 >= 400) {

                $('.up').fadeIn();

                $('.EWBookingWidgetTrigger').css('opacity','1');

                $('.EWBookingWidgetTrigger').css('pointer-events','all');

            } else {

                $('.up').fadeOut();

                $('.EWBookingWidgetTrigger').css('opacity','0');

                $('.EWBookingWidgetTrigger').css('pointer-events','none');

            }

        });

    }

    buttonUp();

});



$(document).ready(function () {

    $("form").not('.feedback-form').not('#quiz-form').submit(function () {

        $.ajax({

            type: "POST",

            url: '../../teleg.php',

            data: $(this).serialize()

        }).done(function () {

            $(this).find("input,textarea").val();
            //alert("Форма успішно відправлена!");

            $('form').trigger("reset");

            window.location.href = 'https://goroshenko.com.ua/thanks';

        });

        return false;

    });

    $(".feedback-form").submit(function () {



        $.ajax({

            type: "POST",

            url: "teleg_2.php",

            data: $(this).serialize()

        }).done(function () {



            $('.feedback-form').find("input,textarea").val();

            $('.feedback-form').fadeOut('fast');

            $('.form-success').fadeIn('fast');

        });

        return false;

    });







});



//misc welosiped calls

$('.button--primary, .sec-price__item').not('.pay-btn, .form-btn, ._ptev_none').on('click', function(e) {

    e.preventDefault();

    $('a.EWBookingWidgetTrigger')[0].click();

    //$('.popup-form').addClass('active');

    //$('body').css('overflow', 'hidden');

    //$('form.popup-form__form input[name="fname"]').val('Форма з поп-папу по кнопці '+$(this).html());

  });

$('.nav__list-item-link').on('click', function(e) {

    setTimeout(function() {

        $('.header__burger').click();

    }, 300);

});

$('#goroshenko').on('click', function(e) {

    window.location.href = 'https://widget.easyweek.com.ua/mgoroshenko/10270';

});

// calculate min-height on init

$('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);



// recalculate the min-height everytime the bar appears or disappears

$(window).resize(() => {

    $('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);

});