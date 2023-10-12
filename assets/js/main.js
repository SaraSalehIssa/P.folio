const navbar = document.querySelector('.navbar');
const headerContent = document.querySelector('.header-content span');
const loading = document.querySelector('.loading');
const scroll_to_top = document.querySelector('.scroll-to-top');
const about = document.querySelector('.about');
const navLinks = document.querySelectorAll('.nav-link');

/* navbar section */
window.addEventListener('scroll', function () {
    if (window.scrollY >= headerContent.offsetTop)
        navbar.style.backgroundColor = '#fff';
    else
        navbar.style.backgroundColor = 'transparent';

    if (window.scrollY >= about.offsetTop)
        scroll_to_top.classList.remove('opacity-0', 'invisible');
    else
        scroll_to_top.classList.add('opacity-0', 'invisible');

});

/* loader section */
window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto';
    }, 2000);
});

/* scroll_to_top section */
scroll_to_top.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active');
        }
        navLinks[i].classList.add('active');
    })
}