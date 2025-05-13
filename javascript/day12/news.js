// Learning Promises to fetch news data from server


const API_URL = 'https://jsonplaceholder.typicode.com/posts';
// GET

function fetchNews() {
    return new Promise((resolve, reject) => {
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    // If the response is not OK, reject the promise
                    reject('Failed to fetch news: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                resolve(data.slice(0, 3)); // Resolve with the first 3 posts
            })
            .catch(error => {
                reject('Error fetching news: ' + error);
            });
    });
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

// Using the fetchNews function
fetchNews()
    .then(newsItems => displayNews(newsItems)) // Handle the resolved data
    .catch(error => {
        document.getElementById('news-container').innerText = 'Failed to load news.';
        console.error(error); // Log the error
    });
