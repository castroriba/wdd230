// Define base URL of your project (adjust the URL based on your GitHub Pages repo)
const baseURL = "https://yourgithubusername.github.io/wdd230/";

// Define the path to the JSON file containing the links
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";

// Fetch the links data asynchronously
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data); // Call the function to display the links
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching links data: ", error);
    }
}

// Function to display the links dynamically
function displayLinks(data) {
    const learningActivitiesList = document.querySelector('.learning-activities'); // Select the UL element where links will go

    // Clear any existing list items
    learningActivitiesList.innerHTML = '';

    // Loop through the weeks and links, and create the list items dynamically
    data.weeks.forEach(week => {
        // Add a list item for each week
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week;

        // Create a sublist for links in each week
        const sublist = document.createElement('ul');

        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', baseURL + link.url);
            linkElement.textContent = link.title;
            linkItem.appendChild(linkElement);
            sublist.appendChild(linkItem);
        });

        // Append the sublist to the week item
        weekItem.appendChild(sublist);
        learningActivitiesList.appendChild(weekItem);
    });
}

// Call the function to load and display the links
getLinks();
