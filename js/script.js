$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// Находим все слайдеры на странице
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const images = slider.querySelectorAll('.catalog__slider-img');
    const controls = slider.querySelectorAll('.catalog__controlls');
    let imageIndex = 0;

    // Функция показа изображения
    function show(index) {
        images[imageIndex].classList.remove('active');
        images[index].classList.add('active');
        imageIndex = index;
    }

    // Привязка событий к кнопкам управления
    controls.forEach((control) => {
        control.addEventListener('click', (event) => {
            if (event.target.classList.contains('prev')) {
                let index = imageIndex - 1;

                if (index < 0) {
                    index = images.length - 1;
                }

                show(index);
            } else if (event.target.classList.contains('next')) {
                let index = imageIndex + 1;

                if (index >= images.length) {
                    index = 0;
                }

                show(index);
            }
        });
    });

    // Изначально показываем первое изображение
    show(imageIndex);
});