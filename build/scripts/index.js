window.addEventListener('DOMContentLoaded', () => {
  highlightLinks();
  makeMobMenu();
  makeMobHeaderTitle();
});

function highlightLinks() {
  const href = window.location.href;
  const mobHeader = document.querySelector('.header-mob-title');

  if (href.match('drawings') !== null) {
    const allLinks = document.querySelectorAll('a.inline-link');
    const links = document.querySelectorAll("a.inline-link[href='drawings.html']");
    allLinks.forEach((l) => l.classList.remove('is-active'));
    links.forEach((l) => l.classList.add('is-active'));
  } else if (href.match('about') !== null) {
    const allLinks = document.querySelectorAll('a.inline-link');
    const links = document.querySelectorAll("a.inline-link[href='about.html']");
    allLinks.forEach((l) => l.classList.remove('is-active'));
    links.forEach((l) => l.classList.add('is-active'));
  }
}

function makeMobHeaderTitle() {
  const href = window.location.href;
  const mobHeaderTitle = document.querySelector('.header-mob-title');

  if (href.match('drawings') !== null) {
    mobHeaderTitle.innerText = 'Drawings';
  } else if (href.match('about') !== null) {
    mobHeaderTitle.innerText = 'Biography';
  }
}

function makeMobMenu() {
  const header = document.querySelector('.header');
  const btnOpen = document.querySelector('.header-humburger');
  const btnClose = document.querySelector('.header-mob-menu-controls');

  btnOpen.addEventListener('click', () => {
    header.classList.add('is-mobile-menu-opened');
    document.body.style.overflow = 'hidden';
  });

  btnClose.addEventListener('click', () => {
    header.classList.remove('is-mobile-menu-opened');
    document.body.style.overflow = null;
  });
}
