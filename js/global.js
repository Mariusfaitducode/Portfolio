

//effets


const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    // const skills = document.querySelectorAll('.competences .bar');

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

}

observerIntersectionAnimation();


//Hero : permet de cacher le texte lorsque l'on scroll et que la section "a propos" recouvre "hero"
//Rectifie la cliquabilité des liens


const heroSpan = document.querySelector('.span');

const heroName = document.querySelector('.name');

const heroTitle = document.querySelector('.title');
// const heroLinks = document.querySelectorAll('.hero__item a');


 heroSpan.classList.add('show-hero');
    
setTimeout(1000, heroTitle.classList.add('show-hero'));
    
 setTimeout(2000, heroName.classList.add('show-hero'));





