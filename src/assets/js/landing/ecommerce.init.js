const sic = new SlickImageCompare('#beforeAfterImages');

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('small', window.scrollY > 0);
});