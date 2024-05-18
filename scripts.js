document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'pub_44396f49e37cfc50fa0c6394a6c2dd85dca50';
    const url = `https://newsdata.io/api/1/news?apiKey=${apiKey}`;
   
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.results.forEach(article => {
                const newsArticle = document.createElement('div');
                newsArticle.classList.add('news-article');
                newsArticle.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>`;
                newsContainer.appendChild(newsArticle);
            });
        })
        .catch(error => {
            console.error('Error fetching the news:', error);
            const newsContainer = document.getElementById('news-container');
            newsContainer.textContent = 'Sorry, something went wrong while fetching the news.';
        });
});

