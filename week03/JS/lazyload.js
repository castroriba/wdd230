// Display last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Lazy loading with Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src"); // Use `data-src` instead of `src`
                    if (src) {
                        img.src = src;
                        img.removeAttribute("data-src"); // Remove attribute after loading
                    }
                    img.setAttribute("data-loaded", "true");
                    observer.unobserve(img);
                }
            });
        },
        {
            rootMargin: "100px", // Load earlier to avoid lag
            threshold: 0.1, // Trigger when 10% of image is visible
        }
    );

    images.forEach((img) => {
        observer.observe(img);
    });
});
