document.addEventListener('DOMContentLoaded', function () {
    // Filter portfolio
    var filters = document.querySelectorAll('.portfolio-filters a');
    var projets = document.querySelectorAll('.portfolio .card');

    var bigProjects = document.querySelectorAll('.big-project-row');

    // console.log(bigProjects);

    projets = Array.prototype.concat.apply(Array.from(bigProjects), projets);

    // console.log(projets);

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
});

// SLider effect on big project row

document.querySelectorAll('.slider-container').forEach(sliderContainer => {
    
    let currentSlide = 0;
    const slides = sliderContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;

    console.log(sliderContainer);
    console.log(totalSlides);
  
    sliderContainer.querySelector('.next').addEventListener('click', () => {
      moveToSlide(currentSlide + 1);
    });
  
    sliderContainer.querySelector('.prev').addEventListener('click', () => {
      moveToSlide(currentSlide - 1);
    });
  
    function moveToSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide].classList.add('active');
    }
  });
