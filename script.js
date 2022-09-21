const menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header'),
    body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    body.classList.toggle('no-scroll');
});

// Слайдер со стрелками

const sliderArrows = document.querySelector('.slider-arrows'),
    slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
    prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
    next = sliderArrows.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;

prev.addEventListener('click', () => showSladerArrows(-1));
next.addEventListener('click', () => showSladerArrows(1));


function showSladerArrows(n) {
    slideIndex +=n;

    if (slideIndex < 0) {
        slideIndex = slidesArrows.length - 1;
    } else if (slideIndex >= slidesArrows.length) {
        slideIndex = 0;
     }


    slidesArrows.forEach(item => item.style.display = 'none');
    slidesArrows[slideIndex].style.display = 'block';
}

showSladerArrows(0);