// Define an async function to fetch "news"
async function fetchNews() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const newsData = await response.json(); // Parse the JSON response
        // Display first 5 "news" items
        newsData.slice(0, 5).forEach(news => {
            console.log(`Title: ${news.title}`);
        });
    } catch (error) {
        console.error('Error fetching news:', error.message);
    }
}

// Call the async function
fetchNews();
