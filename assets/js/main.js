const navBtn = document.getElementById('btn__menu');
const navMobile = document.getElementsByClassName('header__menu')[0];
const overlay = document.getElementsByClassName('header__mobile_overlay')[0];
const body = document.body;

navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMobileNav();
});

window.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
});

navMobile.addEventListener('click', (event) => {
    event.stopPropagation();
});

function toggleMobileNav() {
    navMobile.classList.toggle('header__mobile_active');
    navBtn.classList.toggle('nav__button_close');
    overlay.classList.toggle('header__mobile_active');
    body.classList.toggle('no-scroll');
}