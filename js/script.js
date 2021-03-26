'use strict';
window.addEventListener('DOMContentLoaded', function() {

    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc');

    tabs();
    modal();
    timer();
    cards();
    forms();
    slider();
    calc();

});
