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

document.addEventListener('scroll', function(e) {
    var list = $("#header").collision(".white-content");
    if (list.length > 0) {
        $("#header .nav__link").addClass('on-white');
        $(".nav__logo-image").addClass('on-white');
        $("#nav-toggle").addClass('on-white');
        /*
        $("#header .nav__link").css("color", "var(--primary-color-dark-cyan)");
        $(".nav__logo-image").css("filter", "invert(100%)");
        $("#header .nav__contact").css("background-color", "var(--primary-color-dark-blue)");
        $("#header .nav__contact").css("color", "var(--white-color)");
        */
    } else {
        /*
        $("#header .nav__link").css("color", "var(--white-color)");
        $("#header .nav__contact").css("background-color", "var(--white-color)");
        $("#header .nav__contact").css("color", "var(--primary-color-dark-cyan)")
        $(".nav__logo-image").css("filter", "none");
        */
        $("#header .nav__link").removeClass('on-white');
        $(".nav__logo-image").removeClass('on-white');
        $("#nav-toggle").removeClass('on-white');

    }
});