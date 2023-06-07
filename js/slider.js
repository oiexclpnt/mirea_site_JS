let slideIndex = 1,
    slides = document.querySelectorAll(".slider__item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".sliderNew-dots"),
    dots = document.querySelectorAll(".dot");

showSlides(slideIndex);
// Принимала аргумент номер слайда, который нужно показать
function showSlides(n) {
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (n > slides.length) {
        // Возвращаемся к первому слайду
        slideIndex = 1;
    }
    if (n < 1) {
        // Возвращаемся к последнему слайду
        slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }
    dots.forEach((item) => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
}
function plusSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    showSlides((slideIndex = n));
}

prev.addEventListener("click", function () {
    plusSlides(-1);
});

next.addEventListener("click", function () {
    plusSlides(1);
});
//Создаем событие клика на родителя, используя делегирование событий
dotsWrap.addEventListener("click", function (event) {
    // перебираем все dot и узнаем на какую именно кликнули
    for (let i = 0; i < dots.length + 1; i++) {
        // проверяем элемент на соответствие и узнаем номер точки
        if (
            event.target.classList.contains("dot") &&
            event.target == dots[i - 1]
        ) {
            currentSlide(i);
        }
    }
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);


        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});