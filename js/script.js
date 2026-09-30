const hamburger  = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu-close');

hamburger.addEventListener('click', function () {
    menu.classList.add('is-open');
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('is-open');
});