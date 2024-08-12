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
        const months = [
            "січня", "лютого", "березня", "квітня", "травня", "червня",
            "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
          ];
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        dateTill.forEach(item => {
            item.innerHTML = `${day} ${months[month]}`
        })

        // prices

        // Знижена ціна

        const discountPrice = document.querySelectorAll('[data-discount-price]') 
        discountPrice.forEach(item => {
            item.innerHTML = '50$';
        })
        
        // Закреслена ціна 

        const oldPrice = document.querySelectorAll('[data-old-price]') 
        oldPrice.forEach(item => {
            item.innerHTML = '80$';
        })
        
        // Наступна консультація

        const nextConsultation = document.querySelectorAll('[data-next-consultation]') 
        nextConsultation.forEach(item => {
            item.innerHTML = '80$';
        })
        
        // 5 консультацій

        const fiveConsultations = document.querySelectorAll('[data-five-consultations]') 
        fiveConsultations.forEach(item => {
            item.innerHTML = '375$';
        })
        
        // 10 консультацій

        const tenConsultations = document.querySelectorAll('[data-ten-consultations]') 
        tenConsultations.forEach(item => {
            item.innerHTML = '725$';
        })

        // Індивідуальні нова / закреслена

        const individualConsults = document.querySelectorAll('[data-individual-price]') 
        individualConsults.forEach(item => {
            item.innerHTML = '50$';
        })

        const oldIndividualConsults = document.querySelectorAll('[data-individual-old-price]') 
        oldIndividualConsults.forEach(item => {
            item.innerHTML = '80$';
        })

        // Сімейні консультаціїї нова / закреслена

        const familyConsults = document.querySelectorAll('[data-family-price]') 
        familyConsults.forEach(item => {
            item.innerHTML = '120$';
        })

        const oldFamilyConsults = document.querySelectorAll('[data-family-old-price]') 
        oldFamilyConsults.forEach(item => {
            item.innerHTML = '160$';
        })
        
        // Дитячі консультації нова / закреслена

        const childrenConsults = document.querySelectorAll('[data-children-price]') 
        childrenConsults.forEach(item => {
            item.innerHTML = '50$';
        })

        const oldChildrenConsults = document.querySelectorAll('[data-children-old-price]') 
        oldChildrenConsults.forEach(item => {
            item.innerHTML = '80$';
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

            url: "teleg.php",

            data: $(this).serialize()

        }).done(function () {

            $(this).find("input,textarea").val();
            //alert("Форма успішно відправлена!");

            $('form').trigger("reset");

            window.location.href = 'https://test.goroshenko.com.ua/thanks';

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