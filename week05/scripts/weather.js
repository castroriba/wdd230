// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

// Define the URL with the correct API key, location (Kampala, Uganda), and units (imperial for Fahrenheit)
const url = `https://api.openweathermap.org/data/2.5/weather?lat=0.3136&lon=32.5811&units=imperial&appid=b9cb28a85e9b46b03206214250dbe52a`;

// Define an asynchronous function to fetch data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); // Call the function to display the results
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

// Function to display the weather data in HTML
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}`; // Show the temperature in Fahrenheit
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Weather icon
    weatherIcon.setAttribute('src', iconSrc); // Set the icon image
    weatherIcon.setAttribute('alt', data.weather[0].description); // Set the alt text
    captionDesc.textContent = `${data.weather[0].description}`; // Description of the weather
}

// Call the function to fetch and display weather data
apiFetch();
