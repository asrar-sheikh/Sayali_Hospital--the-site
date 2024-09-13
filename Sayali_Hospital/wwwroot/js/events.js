const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const parent = button.parentNode;

        const shortDescription = parent.querySelector('.short-description');
        const fullDescription = parent.querySelector('.full-description');

        if (fullDescription.style.display === 'none') {
            fullDescription.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            fullDescription.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to('#moving-text', {
    duration: 10,
    ease: 'none',
    motionPath: {
        path: '#wavy-path',
        align: '#wavy-path',
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1,
    },
    repeat: -1,
    scrollTrigger: {
        trigger: '.wavy-text-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    },
});