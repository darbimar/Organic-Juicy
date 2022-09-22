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


// Слайдер с точками

const sliderDots = document.querySelector('.slider-dots'),
    slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
    wrapperDots = sliderDots.querySelector('.slider-dots__nav');

console.log(sliderDots);

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {                // Количество точек соответствует чисул слайдов
    const dot = document.createElement('button');
    dot.dataset.slideTo = i;
    dot.classList.add('slider-dots__nav-item');              //Добавили точки (присвоили переменной dot атрибут)
    if (i == 0) {
        dot.classList.add('slider-dots__nav-item--active');   //На первом слайде активна первая кнопка
    }
    if (i != 0) {
        slidesDots[i].style.display = 'none';                  // Скрываем все слайды, кроме первого
    }
    dot.addEventListener('click', showSlideDots);             //Запуск функции при клике
    wrapperDots.append(dot);                                // Добавление точек
    dots.push(dot);
}

function showSlideDots(e) {
    const slideTo = e.target.dataset.slideTo;               //Получение дата-атрибута для каждой точки
    slidesDots.forEach(item => item.style.display = 'none');  //Скрыть все слайды при нажатии
    slidesDots[slideTo].style.display = 'block';              //Показ слайда выбранной точки
    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active')); //Убираем класс активности у всех точек
    e.target.classList.add('slider-dots__nav-item--active');     //Добавляем класс активности на точку, на которую кликнули
}

