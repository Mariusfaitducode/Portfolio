document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger-menu');
    var exit = document.querySelector('.exit-menu');
    var menu = document.querySelector('.menu');
    burger.addEventListener('click', function () { return openMenu(); });
    exit.addEventListener('click', function () { return closeMenu(); });
    function openMenu() {
        console.log("click");
        burger.classList.add("hide");
        exit.classList.remove("hide");
        menu.classList.remove("hide-menu");
    }
    function closeMenu() {
        console.log("click");
        exit.classList.add("hide");
        menu.classList.add("hide-menu");
        burger.classList.remove("hide");
    }
    var lastScrollPosition = 0;
    window.addEventListener("scroll", function () { return hideMenu(); });
    function hideMenu() {
        var currentScrollPosition = window.scrollY;
        if (currentScrollPosition > lastScrollPosition) {
            header.style.top = "-90px"; // Masquer le menu
        }
        else {
            header.style.top = "0"; // Afficher le menu
        }
        lastScrollPosition = currentScrollPosition;
    }
});
