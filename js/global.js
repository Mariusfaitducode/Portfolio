

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

//effets


const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.competences .bar');

    sections.forEach((section, index) => {
        if (index === 0){
            return;
        }
        //console.log(index);
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.opacity = "1";
               // console.log(elem);
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    skills.forEach((skill, index) => {
       
        //console.log(index);
        skill.style.width = "0";
        skill.style.transition = "all 1.6s";
    });

    let skillsObserver = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();

// Sélectionnez votre section hero et votre texte
const sectionHero = document.querySelector('.hero');
const sectionHeroText = document.querySelector('.hero__item');

// Fonction pour détecter si la section est visible à l'écran
function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

// Fonction pour changer l'opacité du texte en fonction de la visibilité de la section
function toggleSectionHeroTextOpacity() {
  if (isElementVisible(sectionHero)) {
    sectionHeroText.style.opacity = 1;
  } else {
    sectionHeroText.style.opacity = 0;
  }
}

// Écoutez l'événement scroll de la page et appelez la fonction pour changer l'opacité du texte
window.addEventListener('scroll', toggleSectionHeroTextOpacity);