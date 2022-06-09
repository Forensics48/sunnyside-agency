/*============ SHOW MENU ============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        if(navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        } else {
            navMenu.classList.add('show-menu');
        }
    });
}