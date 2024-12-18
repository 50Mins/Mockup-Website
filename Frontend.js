document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Create scroll-to-top button
    let ReScroll = document.createElement('button');
    let img = document.createElement('img');
    img.src = 'Arrow.png';
    img.alt = 'Scroll to top';
    img.style.width = '30px';
    img.style.height = '30px';
    ReScroll.appendChild(img);
    ReScroll.id = 'scrollbutton';

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

    // Handle contact form submission
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        formResponse.innerText = 'Sending...';
        formResponse.style.display = 'block';

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