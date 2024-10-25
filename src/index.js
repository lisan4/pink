import './scss/style.scss';

import nav from './js/navig';
import cards from './js/cards';
import slider from './js/slider';
import modal from './js/modal';



window.addEventListener('DOMContentLoaded', () => {
    nav();
    cards();
    modal();
    slider({
        container: ".offer__slider",
        slide: '.offer__slide',
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        
    });
});


