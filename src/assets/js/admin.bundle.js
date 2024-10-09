/*
Template Name: Domiex - Admin & Dashboard Template
Author: Pixeleyez
Version: 1.0.0
File: admin bundle Js File
*/

import Alpine from 'alpinejs'
import Tooltip from "@ryangjchandler/alpine-tooltip";

import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

import 'simplebar';

Alpine.plugin(Tooltip);
window.Alpine = Alpine;

lucide.createIcons();

//counter number
function animatedCounter(target, time = 200, start = 0) {
    return {
        current: 0,
        target: target,
        time: time,
        start: start,
        updateCounter: function () {
            start = this.start;
            const increment = (this.target - start) / this.time;
            const handle = setInterval(() => {
                if (this.current < this.target)
                    this.current += increment
                else {
                    clearInterval(handle);
                    this.current = this.target
                }
            }, 1);
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('animatedCounter', animatedCounter);
});
