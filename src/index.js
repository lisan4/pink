import './scss/style.scss';

import nav from './js/form';
import cards from './js/cards';
import slider from './js/slider';



window.addEventListener('DOMContentLoaded', () => {
    nav();
    cards();
    slider({
        container: ".offer__slider",
        slide: '.offer__slide',
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        
    });
});


