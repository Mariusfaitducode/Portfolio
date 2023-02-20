

//Menu mobile

function menuMobile(){
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');

    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () =>{
        console.log('click');
        header.classList.toggle('show-nav');
    })

    links.forEach(link =>{
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    })
}

menuMobile();

//Portfolio

function tabsFilter() {

    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {

        tabs.forEach(elem => {
            elem.classList.remove('active');
        });
        
    }

    const showProjects = (elem) => {
        console.log(elem);
        projets.forEach(projet => {
            
            let filter = projet.getAttribute('data-category');

            if(elem === 'all'){
                projet.parentNode.classList.remove('hide');
                return;
            }

            if (filter !== elem){
                projet.parentNode.classList.add('hide');
            } else{
                projet.parentNode.classList.remove('hide');
            }
        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            console.log(filter);
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
    })

    // showProjects();
}

tabsFilter();

function showProjectsDetails(){

    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    });
}

showProjectsDetails();