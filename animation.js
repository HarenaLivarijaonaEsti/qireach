const sections = document.querySelectorAll('section');

function revealSection() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Si une partie de la section est visible
        if(sectionTop < windowHeight - 100 && sectionBottom > 100) {
            section.classList.add('show');
        } else {
            // Retire la classe si on veut rejouer l'animation en scrollant
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);
