import {
        d,
        slide} from './variables.js';
import changeThemes from './changeThemes.js';
import calc from './calculator.js';

d.addEventListener('DOMContentLoaded', () => {

    const runAddEventListeners = () => slide.addEventListener('change', changeThemes);
    runAddEventListeners();
    calc();    
    
});
