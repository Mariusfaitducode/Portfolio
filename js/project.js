document.addEventListener('DOMContentLoaded', function () {
    // Filter portfolio
    var filters = document.querySelectorAll('.portfolio-filters a');
    var projets = document.querySelectorAll('.portfolio .card');
    var resetActiveLinks = function () {
        filters.forEach(function (elem) {
            elem.classList.remove('active');
        });
    };
    var showProjects = function (elem) {
        //console.log(elem);
        projets.forEach(function (projet) {
            var filter = projet.getAttribute('data-category');
            if (elem === 'all') {
                projet.classList.remove('hide');
                return;
            }
            if (filter !== elem) {
                projet.classList.add('hide');
            }
            else {
                projet.classList.remove('hide');
            }
        });
    };
    filters.forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            event.preventDefault();
            var filter = elem.getAttribute('data-filter');
            //console.log(filter);
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
    });
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
