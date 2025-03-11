document.addEventListener("DOMContentLoaded", () => {
    // Set Year
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Set Last Modified Date
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamburger.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Page Visits (Example)
    let visits = localStorage.getItem("visits") ? parseInt(localStorage.getItem("visits")) + 1 : 1;
    localStorage.setItem("visits", visits);
    document.getElementById("page-visits").textContent = visits;
});
