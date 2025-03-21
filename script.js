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
