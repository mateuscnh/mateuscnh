const target = document.querySelectorAll('[data-animation]');
let timer = null;

function animateScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;

    clearTimeout(timer);

    timer = setTimeout(() => {
        target.forEach((el) => {
            if (windowTop > el.offsetTop) {
                el.classList.add('animate');
            } else {
                el.classList.remove('animate');
            }
        })
    }, 100);

}

animateScroll();

if (target.length) {
    window.addEventListener('scroll', animateScroll);
}
