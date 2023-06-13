function highlightLinks() {
    const href = window.location.href;

    if (href.match('drawings') !== null) {
        const allLinks = document.querySelectorAll("a.inline-link");
        const links = document.querySelectorAll("a.inline-link[href='drawings.html']");
        allLinks.forEach(l => l.classList.remove('is-active'));
        links.forEach(l => l.classList.add('is-active'));
    } else if (href.match('about') !== null) {
        const allLinks = document.querySelectorAll("a.inline-link");
        const links = document.querySelectorAll("a.inline-link[href='about.html']");
        allLinks.forEach(l => l.classList.remove('is-active'));
        links.forEach(l => l.classList.add('is-active'));
    }
}

function makeMobMenu() {
    const header = document.querySelector('.header');
    const btnOpen = document.querySelector('.header-humburger');
    const btnClose = document.querySelector('.header-mob-menu-controls');

    btnOpen.addEventListener('click', () => {
        header.classList.add('is-mobile-menu-opened');
    });

    btnClose.addEventListener('click', () => {
        header.classList.remove('is-mobile-menu-opened');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    highlightLinks();
    makeMobMenu();
});
