

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


//Hero : permet de cacher le texte lorsque l'on scroll et que la section "a propos" recouvre "hero"
//Rectifie la cliquabilité des liens

const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero__item');
const heroLinks = document.querySelectorAll('.hero__item a');

window.addEventListener('scroll', function() {
  const distanceFromTop = hero.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  const distanceFromBottom = windowHeight - distanceFromTop;

  if (distanceFromBottom >= 0) {
    heroText.style.opacity = 1 - (distanceFromBottom / windowHeight) * 2;
  } else {
    heroText.style.opacity = 1;
  }
  if (heroText.style.opacity < 0){
    heroLinks.forEach(link => {
        console.log(link);
        link.style.pointerEvents = "none";
    });
  } else {
    heroLinks.forEach(link => {
        console.log(link);
        link.style.pointerEvents = "auto";
    });
  }
});