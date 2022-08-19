const navBtn = document.getElementById('btn__menu');
const navMobile = document.getElementsByClassName('header__menu')[0];
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
    navMobile.classList.toggle('header__menu_active');
    body.classList.toggle('no-scroll');
}