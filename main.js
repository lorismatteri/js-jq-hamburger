//Mostrare e nascondere menu

//1. Vado a prendere l'icona hamburger con jQuery e la metto in una variabile
var hamMenu = $('.header-right > a');

//2. Al click faccio aprire il menu
hamMenu.click(function() {
    $('.hamburger-menu').fadeIn(1000);
});

//3. Vado a predere l'icona "chiudi" con jQuery e la metto in una variabile

var closure = $('.close');

//4. Al click faccio chiudere il menu
closure.click(function() {
    $('.hamburger-menu').fadeOut(1000);
});