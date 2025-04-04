// Declare the URL for the JSON file
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the container where cards will be appended
const cards = document.querySelector('#cards');

// Function to fetch and process the data
async function getProphetData() {
    try {
        const response = await fetch(url);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.table(data.prophets);  // Check the data in the console (for debugging)
        
        // Call the display function with the data
        displayProphets(data.prophets);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to dynamically display prophets as cards
const displayProphets = (prophets) => {
    // Clear the cards container before appending new cards
    cards.innerHTML = '';

    prophets.forEach((prophet) => {
        // Create the card element
        const card = document.createElement('section');
        card.classList.add('card');

        // Create the full name heading
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create the image element
        const portrait = document.createElement('img');
        
        // Check if the imageUrl exists and is not empty, else provide a fallback image
        if (prophet.imageurl && prophet.imageurl.trim() !== '') {
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '200');
            portrait.setAttribute('height', '250');
        } else {
            // Fallback image if imageUrl is missing or invalid
            portrait.setAttribute('src', 'https://via.placeholder.com/200x250.png?text=Image+Not+Available');
            portrait.setAttribute('alt', 'Image not available');
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '200');
            portrait.setAttribute('height', '250');
        }

        // Append the heading and image to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card to the main cards container
        cards.appendChild(card);
    });
};

// Call the fetch function to retrieve and display the data
getProphetData();
