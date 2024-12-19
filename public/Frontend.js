document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Create scroll-to-top button
    let ReScroll = document.createElement('button');
    let img = document.createElement('img');
    img.src = 'GuiElements/Arrow.png';    img.alt = 'Scroll to top';
    img.style.width = '30px';
    img.style.height = '30px';
    ReScroll.appendChild(img);
    ReScroll.id = 'scrollbutton';

    ReScroll.style.display = 'none';

    let buttonContainer = document.getElementById('buttonContainer');
    if (buttonContainer) {
        buttonContainer.appendChild(ReScroll);
        console.log("Button appended successfully.");
    } else {
        console.error("buttonContainer not found!");
    }

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 850) {
            ReScroll.style.display = 'block';
        } else {
            ReScroll.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    ReScroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("Scrolling to top...");
    });
});

// Carousel functionality
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
});