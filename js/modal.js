document.addEventListener("DOMContentLoaded", function() {
    // Функции для открытия и закрытия первого модального окна
    function openModal1() {
        document.getElementById('myModal').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для первого модального окна
    }

    function closeModal1() {
        document.getElementById('myModal').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия второго модального окна
    function openModal2() {
        document.getElementById('myModal2').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal2() {
        document.getElementById('myModal2').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal3() {
        document.getElementById('myModal3').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal3() {
        document.getElementById('myModal3').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal4() {
        document.getElementById('myModal4').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal4() {
        document.getElementById('myModal4').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal5() {
        document.getElementById('myModal5').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal5() {
        document.getElementById('myModal5').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal6() {
        document.getElementById('myModal6').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal6() {
        document.getElementById('myModal6').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal7() {
        document.getElementById('myModal7').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal7() {
        document.getElementById('myModal7').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal8() {
        document.getElementById('myModal8').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal8() {
        document.getElementById('myModal8').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }

    // Функции для открытия и закрытия третьего модального окна
    function openModal9() {
        document.getElementById('myModal9').style.display = "block";
        document.body.style.overflow = 'hidden'; // Запрет скроллинга для второго модального окна
    }

    function closeModal9() {
        document.getElementById('myModal9').style.display = "none";
        document.body.style.overflow = 'scroll'; // Возврат скроллинга
    }


    // Добавляем обработчики клика для открытия модальных окон
    document.getElementById('room1').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal1();
    });

    document.getElementById('room2').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal2();
    });

    document.getElementById('room3').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal3();
    });

    document.getElementById('room4').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal4();
    });

    document.getElementById('room5').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal5();
    });

    document.getElementById('room6').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal6();
    });

    document.getElementById('room7').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal7();
    });

    document.getElementById('room8').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal8();
    });

    document.getElementById('room9').addEventListener('click', function(event) {
        event.preventDefault(); // предотвращаем стандартное поведение ссылки
        openModal9();
    });


    // Обработчики клика для кнопок закрытия модальных окон
    document.querySelector('#myModal .close').addEventListener('click', closeModal1);
    document.querySelector('#myModal2 .close').addEventListener('click', closeModal2);
    document.querySelector('#myModal3 .close').addEventListener('click', closeModal3);
    document.querySelector('#myModal4 .close').addEventListener('click', closeModal4);
    document.querySelector('#myModal5 .close').addEventListener('click', closeModal5);
    document.querySelector('#myModal6 .close').addEventListener('click', closeModal6);
    document.querySelector('#myModal7 .close').addEventListener('click', closeModal7);
    document.querySelector('#myModal8 .close').addEventListener('click', closeModal8);
    document.querySelector('#myModal9 .close').addEventListener('click', closeModal9);

    // Управление слайдерами
    let currentSlide1 = 0;
    let currentSlide2 = 0;
    let currentSlide3 = 0;
    let currentSlide4 = 0;
    let currentSlide5 = 0;
    let currentSlide6 = 0;
    let currentSlide7 = 0;
    let currentSlide8 = 0;
    let currentSlide9 = 0;
    const slides1 = document.querySelectorAll('#myModal .slider img');
    const slides2 = document.querySelectorAll('#myModal2 .slider img');
    const slides3 = document.querySelectorAll('#myModal3 .slider img');
    const slides4 = document.querySelectorAll('#myModal4 .slider img');
    const slides5 = document.querySelectorAll('#myModal5 .slider img');
    const slides6 = document.querySelectorAll('#myModal6 .slider img');
    const slides7 = document.querySelectorAll('#myModal7 .slider img');
    const slides8 = document.querySelectorAll('#myModal8 .slider img');
    const slides9 = document.querySelectorAll('#myModal9 .slider img');
    const totalSlides1 = slides1.length;
    const totalSlides2 = slides2.length;
    const totalSlides3 = slides3.length;
    const totalSlides4 = slides4.length;
    const totalSlides5 = slides5.length;
    const totalSlides6 = slides6.length;
    const totalSlides7 = slides7.length;
    const totalSlides8 = slides8.length;
    const totalSlides9 = slides9.length;

    function showSlide(slider, currentSlide, totalSlides, index) {
        slider[currentSlide].style.display = 'none';
        currentSlide = index;
        slider[currentSlide].style.display = 'block';
        return currentSlide;
    }

    document.getElementById('prevSlide').addEventListener('click', function() {
        currentSlide1 = showSlide(slides1, currentSlide1, totalSlides1, (currentSlide1 - 1 + totalSlides1) % totalSlides1);
    });

    document.getElementById('nextSlide').addEventListener('click', function() {
        currentSlide1 = showSlide(slides1, currentSlide1, totalSlides1, (currentSlide1 + 1) % totalSlides1);
    });

    document.getElementById('prevSlide2').addEventListener('click', function() {
        currentSlide2 = showSlide(slides2, currentSlide2, totalSlides2, (currentSlide2 - 1 + totalSlides2) % totalSlides2);
    });

    document.getElementById('nextSlide2').addEventListener('click', function() {
        currentSlide2 = showSlide(slides2, currentSlide2, totalSlides2, (currentSlide2 + 1) % totalSlides2);
    });

    document.getElementById('prevSlide3').addEventListener('click', function() {
        currentSlide3 = showSlide(slides3, currentSlide3, totalSlides3, (currentSlide3 - 1 + totalSlides3) % totalSlides3);
    });

    document.getElementById('nextSlide3').addEventListener('click', function() {
        currentSlide3 = showSlide(slides3, currentSlide3, totalSlides3, (currentSlide3 + 1) % totalSlides3);
    });

    document.getElementById('prevSlide4').addEventListener('click', function() {
        currentSlide4 = showSlide(slides4, currentSlide4, totalSlides4, (currentSlide4 - 1 + totalSlides4) % totalSlides4);
    });

    document.getElementById('nextSlide4').addEventListener('click', function() {
        currentSlide4 = showSlide(slides4, currentSlide4, totalSlides4, (currentSlide4 + 1) % totalSlides4);
    });

    document.getElementById('prevSlide5').addEventListener('click', function() {
        currentSlide5 = showSlide(slides5, currentSlide5, totalSlides5, (currentSlide5 - 1 + totalSlides5) % totalSlides5);
    });

    document.getElementById('nextSlide5').addEventListener('click', function() {
        currentSlide5 = showSlide(slides5, currentSlide5, totalSlides5, (currentSlide5 + 1) % totalSlides5);
    });
    
    document.getElementById('prevSlide6').addEventListener('click', function() {
        currentSlide6 = showSlide(slides6, currentSlide6, totalSlides6, (currentSlide6 - 1 + totalSlides6) % totalSlides6);
    });

    document.getElementById('nextSlide6').addEventListener('click', function() {
        currentSlide6 = showSlide(slides6, currentSlide6, totalSlides6, (currentSlide6 + 1) % totalSlides6);
    });

    document.getElementById('prevSlide7').addEventListener('click', function() {
        currentSlide7 = showSlide(slides7, currentSlide7, totalSlides7, (currentSlide7 - 1 + totalSlides7) % totalSlides7);
    });

    document.getElementById('nextSlide7').addEventListener('click', function() {
        currentSlide7 = showSlide(slides7, currentSlide7, totalSlides7, (currentSlide7 + 1) % totalSlides7);
    });

    document.getElementById('prevSlide8').addEventListener('click', function() {
        currentSlide8 = showSlide(slides8, currentSlide8, totalSlides8, (currentSlide8 - 1 + totalSlides8) % totalSlides8);
    });

    document.getElementById('nextSlide8').addEventListener('click', function() {
        currentSlide8 = showSlide(slides8, currentSlide8, totalSlides8, (currentSlide8 + 1) % totalSlides8);
    });

    document.getElementById('prevSlide9').addEventListener('click', function() {
        currentSlide9 = showSlide(slides9, currentSlide9, totalSlides9, (currentSlide9 - 1 + totalSlides9) % totalSlides9);
    });

    document.getElementById('nextSlide9').addEventListener('click', function() {
        currentSlide9 = showSlide(slides9, currentSlide9, totalSlides9, (currentSlide9 + 1) % totalSlides9);
    });
    // Инициализация первых слайдов
    showSlide(slides1, currentSlide1, totalSlides1, 0);
    showSlide(slides2, currentSlide2, totalSlides2, 0);
    showSlide(slides3, currentSlide3, totalSlides3, 0);
    showSlide(slides4, currentSlide4, totalSlides4, 0);
    showSlide(slides5, currentSlide5, totalSlides5, 0);
    showSlide(slides6, currentSlide6, totalSlides6, 0);
    showSlide(slides7, currentSlide7, totalSlides7, 0);
    showSlide(slides8, currentSlide8, totalSlides8, 0);
    showSlide(slides9, currentSlide9, totalSlides9, 0);
});
