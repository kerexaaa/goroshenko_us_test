$(function(){"use strict";$(".btn_tel").click(function(){$(".popup-form").addClass("active"),$("body").css("overflow","hidden"),$('form.popup-form__form input[name="fname"]').val("Форма з поп-папу по кнопці "+$(this).html())}),$(".close").click(function(){$(".popup-form").removeClass("active"),$("body").css("overflow","visible")}),$(document).mouseup(function(e){let r=$(".popup-form");0===r.has(e.target).length&&(r.removeClass("active"),$("body").css("overflow","visible"))}),$(document).ready(()=>{let e=document.querySelectorAll("[data-date-till]");e.forEach(e=>{e.innerHTML="15 серпня"});let r=document.querySelectorAll("[data-discount-price]");r.forEach(e=>{e.innerHTML="400₴"});let t=document.querySelectorAll("[data-old-price]");t.forEach(e=>{e.innerHTML="1000₴"});let o=document.querySelectorAll("[data-next-consultation]");o.forEach(e=>{e.innerHTML="900-1000₴"});let l=document.querySelectorAll("[data-five-consultations]");l.forEach(e=>{e.innerHTML="4000₴"});let a=document.querySelectorAll("[data-ten-consultations]");a.forEach(e=>{e.innerHTML="8000₴"});let i=document.querySelectorAll("[data-individual-price]");i.forEach(e=>{e.innerHTML="400₴"});let n=document.querySelectorAll("[data-individual-old-price]");n.forEach(e=>{e.innerHTML="1000₴"});let c=document.querySelectorAll("[data-family-price]");c.forEach(e=>{e.innerHTML="1200₴"});let s=document.querySelectorAll("[data-family-old-price]");s.forEach(e=>{e.innerHTML="1600₴"});let d=document.querySelectorAll("[data-children-price]");d.forEach(e=>{e.innerHTML="1000₴"});let f=document.querySelectorAll("[data-children-old-price]");f.forEach(e=>{e.innerHTML="1400₴"});let u=document.querySelectorAll("[data-lobas-price]");u.forEach(e=>{e.innerHTML="400₴"});let p=document.querySelectorAll("[data-lobas-old-price]");p.forEach(e=>{e.innerHTML="1000₴"});let h=document.querySelectorAll("[data-melania-price]");h.forEach(e=>{e.innerHTML="400₴"});let g=document.querySelectorAll("[data-melania-old-price]");g.forEach(e=>{e.innerHTML="1000₴"});let m=document.querySelectorAll("[data-davyd-price]");m.forEach(e=>{e.innerHTML="400₴"});let y=document.querySelectorAll("[data-davyd-old-price]");y.forEach(e=>{e.innerHTML="1000₴"});let v=document.querySelectorAll("[data-peters-price]");v.forEach(e=>{e.innerHTML="400₴"});let T=document.querySelectorAll("[data-peters-old-price]");T.forEach(e=>{e.innerHTML="1000₴"});let k=document.querySelectorAll("[data-shainikova-price]");k.forEach(e=>{e.innerHTML="400₴"});let E=document.querySelectorAll("[data-shainikova-old-price]");E.forEach(e=>{e.innerHTML="1000₴"});let b=document.querySelectorAll("[data-stolnikova-price]");b.forEach(e=>{e.innerHTML="400₴"});let H=document.querySelectorAll("[data-stolnikova-old-price]");H.forEach(e=>{e.innerHTML="800₴"})}),$(".header__burger").click(function(){$("header.header").toggleClass("open"),$("body").toggleClass("no__scroll")}),$(window).scroll(function(){$(document).scrollTop()>1?($("header").addClass("active"),$(".cabinet__svg .svg-icon").addClass("active")):($("header").removeClass("active"),$(".cabinet__svg .svg-icon").removeClass("active"))}),$(".up").click(function(){var e=$("main").offset().top;$("html, body").animate({scrollTop:e},350)}),$(window).scroll(function(){$(document).scrollTop()+80>=400?($(".up").fadeIn(),$(".EWBookingWidgetTrigger").css("opacity","1"),$(".EWBookingWidgetTrigger").css("pointer-events","all")):($(".up").fadeOut(),$(".EWBookingWidgetTrigger").css("opacity","0"),$(".EWBookingWidgetTrigger").css("pointer-events","none"))})}),$(document).ready(function(){$("form").not(".feedback-form").not("#quiz-form").submit(function(){return $.ajax({type:"POST",url:"C:\\Users\\kiril\\my\\prog\\goroshenko\\11082024\\teleg.php",data:$(this).serialize()}).done(function(){$(this).find("input,textarea").val(),$("form").trigger("reset"),window.location.href="https://goroshenko.com.ua/thanks"}),!1}),$(".feedback-form").submit(function(){return $.ajax({type:"POST",url:"teleg_2.php",data:$(this).serialize()}).done(function(){$(".feedback-form").find("input,textarea").val(),$(".feedback-form").fadeOut("fast"),$(".form-success").fadeIn("fast")}),!1})}),$(".button--primary, .sec-price__item").not(".pay-btn, .form-btn, ._ptev_none").on("click",function(e){e.preventDefault(),$("a.EWBookingWidgetTrigger")[0].click()}),$(".nav__list-item-link").on("click",function(e){setTimeout(function(){$(".header__burger").click()},300)}),$("#goroshenko").on("click",function(e){window.location.href="https://widget.easyweek.com.ua/mgoroshenko/10270"}),$(".header__mob-bottom").css("min-height",`${window.innerHeight}px`),$(window).resize(()=>{$(".header__mob-bottom").css("min-height",`${window.innerHeight}px`)});