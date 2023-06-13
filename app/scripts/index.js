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

window.addEventListener('DOMContentLoaded', () => {
    highlightLinks();
});
