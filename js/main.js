'use strict';

(function () {
    var active = 0;
    var leftArrow = document.querySelector('.header__arrow_left');
    var rightArrow = document.querySelector('.header__arrow_right');
    var slides = document.getElementsByClassName('header__gallery_item');


    var clickRightArrow = function () {
        rightArrow.addEventListener('click', function () {
            active >= 0 && active < slides.length - 1 ? ++active : active = 0;
            changeActiveSlide();
        });
    };
    clickRightArrow();

    var clickLeftArrow = function () {
        leftArrow.addEventListener('click', function () {
            active > 0 ? --active : active = slides.length - 1;
            changeActiveSlide();
        });
    };
    clickLeftArrow();

    var changeActiveSlide = function () {
        for (let i = 0; i < slides.length; i++) {
            var slide = slides[i];
            slide.classList.remove('header__gallery_active');
            slides[active].classList.add('header__gallery_active');
        }
    };

    [].forEach.call(slides, function (btn) {
        btn.addEventListener('click', function (e) {
            e.target.closest(slides).className += 'header__gallery_item'
        })
    })
})();