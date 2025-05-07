const API_URL = 'https://jsonplaceholder.typicode.com/posts';
// GET

async function fetchNews() {
    try {
        const response = await fetch(API_URL, {
            method: "POST"
        });
        const data = await response.json();
        console.log(data)

        displayNews(data.slice(0, 3)); // Show only first 10 posts
    } catch (error) {
        document.getElementById('news-container').innerText = 'Failed to load news.';
        console.error('Error fetching news:', error);
    }
}

function displayNews(newsItems) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear "Loading..." message

    newsItems.forEach(item => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news');
        newsDiv.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    `;
        container.appendChild(newsDiv);
    });
}

fetchNews();
