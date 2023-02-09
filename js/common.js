const header = document.getElementById('#banner');
const nav = document.getElementById('#navbar');
const callback = ([entry]) => {
    const { isIntersecting } = entry;
    nav.classList.toggle('navOpacity', !isIntersecting);
};
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0
};
const observer = new IntersectionObserver(callback, options);
observer.observe(header);