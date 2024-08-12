// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika humburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

//script hero section

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
        } else {
            index = n;
        }
        const offset = -index * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    nextBtn.addEventListener('click', () => {
        showSlide(index + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(index - 1);
    });

    // Optional: Auto-slide
    setInterval(() => {
        showSlide(index + 1);
    }, 5000); // Change slide every 5 seconds
});

//paket wisata

