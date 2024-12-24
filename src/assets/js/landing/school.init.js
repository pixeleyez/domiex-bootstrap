import simpleParallax from 'simple-parallax-js';

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .8,
    spaceBetween: 30,
    transition: 'cubic-bezier(0,0,0,1)',
    overflow: true,
});

var swiper = new Swiper(".achivementSwiper", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});