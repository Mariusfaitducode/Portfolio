


document.addEventListener('DOMContentLoaded', () => {


    // Filter portfolio

    const filters = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card') as NodeListOf<HTMLElement>;
    
    const resetActiveLinks = () => {

        filters.forEach(elem => {
            elem.classList.remove('active');
        });
        
    }

    const showProjects = (elem) => {
        //console.log(elem);
        projets.forEach(projet => {
            
            let filter = projet.getAttribute('data-category');

            if(elem === 'all'){
                projet.classList.remove('hide');
                return;
            }

            if (filter !== elem){
                projet.classList.add('hide');
            } else{
                projet.classList.remove('hide');
            }
        });
    }

    filters.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            //console.log(filter);
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
    })


    // Modal portfolio

    // const links = document.querySelectorAll('.card-link') as NodeListOf<HTMLElement>;
    // const modals = document.querySelectorAll('.modal');
    // const btns = document.querySelectorAll('.modal__close');

    // const hideModals = () => {
    //     modals.forEach(modal => {
    //         modal.classList.remove('show');
    //     });
    // }

    // links.forEach(elem => {
    //     elem.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         console.log(elem.dataset.id);
    //         document.querySelector(`[id=${elem.dataset.id}]`)!.classList.add("show");
    //     });
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', (event) => {
    //         hideModals();
    //     });
    // });
});