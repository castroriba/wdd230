// Page Visit Counter using Local Storage
let visitCount = localStorage.getItem("visitCount");

// Initialize count if not set
if (!visitCount) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount);
}

// Increment count
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Display count
document.getElementById("visits").textContent = visitCount;

// Update footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
// Lazy load images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.lazy-load');
    const options = {
        rootMargin: '0px 0px 100px 0px',
        threshold: 0.1
    };

    const loadImage = (image) => {
        image.src = image.getAttribute('data-src');
        image.onload = () => {
            image.classList.add('loaded');
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });
});

// Track Visit Date using localStorage
const visitDate = localStorage.getItem('lastVisitDate');
const currentDate = new Date().getTime();
localStorage.setItem('lastVisitDate', currentDate);

const messageElement = document.getElementById('visitor-message');

if (!visitDate) {
    messageElement.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const daysDifference = Math.floor((currentDate - visitDate) / (1000 * 3600 * 24));
    if (daysDifference < 1) {
        messageElement.textContent = 'Back so soon! Awesome!';
    } else {
        messageElement.textContent = `You last visited ${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago.`;
    }
}
