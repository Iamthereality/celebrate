document.addEventListener('DOMContentLoaded', function () {
    new WOW({
        boxClass: 'wow',
        offset: 200,
        mobile: true,
        live: true
    }).init();

    function animateCSS(element, animationName, callback) {
        const node = document.querySelectorAll(element);
        node.forEach((item) => item.classList.add('animated', animationName));

        function handleAnimationEnd() {
            node.forEach((item) => item.classList.remove('animated', animationName));
            node.forEach((item) => item.removeEventListener('animationend', handleAnimationEnd));

            if (typeof callback === 'function') callback();
        }

        node.forEach((item) => item.addEventListener('animationend', handleAnimationEnd));
    }

    animateCSS('.section-header', 'slideInLeft');
    animateCSS('.map', 'slideInLeft');
    animateCSS('.price-card', 'slideInUp');
    animateCSS('.contacts', 'slideInUp');
    animateCSS('.form', 'slideInRight');
});
