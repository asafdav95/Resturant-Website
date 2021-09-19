$(document).ready(function(){


    $('.menu-topic').on('mouseenter', function(){
        let menu = $(this).parent().find('.menu');
        menu.fadeIn(250);
        $('.menu-head').on('mouseleave', function(){
            menu.fadeOut(250);
        })

    });









});