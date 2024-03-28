// Определяем все ссылки в навигационном меню
const menuLinks = document.querySelectorAll('.nav-link');

// Функция для закрытия меню
function closeMenu() {
    // Закрытие меню, изменение атрибута 'aria-expanded' на 'false' и удаление класса 'show' для схлопывания меню
    const toggleButton = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarSupportedContent');
    if (menu.classList.contains('show')) {
        toggleButton.click();
    }
}

// Добавляем слушатель событий на каждую ссылку в меню
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        closeMenu();
    });
});
