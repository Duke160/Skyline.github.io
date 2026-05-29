const reveals = document.querySelectorAll('.reveal');
let slides = document.querySelectorAll('.carousel-slide');
let current = 0;
setInterval(() => {
slides[current].classList.remove('active-slide');
current = (current + 1) % slides.length;
slides[current].classList.add('active-slide');
}, 3000);
window.addEventListener('scroll', () => {
    reveals.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            element.classList.add('active');
        }
    });
});