

document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header') as HTMLElement;

    const burger = document.querySelector('.burger-menu') as HTMLElement;
    const exit = document.querySelector('.exit-menu') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;

    burger.addEventListener('click', () => openMenu());
    exit.addEventListener('click', () => closeMenu());


    function openMenu(){
        console.log("click")
        burger.classList.add("hide");
        exit.classList.remove("hide");
        menu.classList.remove("hide-menu");
    }

    function closeMenu(){
        console.log("click")
        exit.classList.add("hide");
        menu.classList.add("hide-menu");
        burger.classList.remove("hide");

    }

    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => hideMenu());

    function hideMenu(){
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            header.style.top = "-90px"; // Masquer le menu
        } else {
            header.style.top = "0"; // Afficher le menu
        }

        lastScrollPosition = currentScrollPosition;
    }
    
    const links = document.querySelectorAll('.menu a');


    links.forEach(link =>{
        link.addEventListener('click', () => closeMenu());
    })

  });
  
      