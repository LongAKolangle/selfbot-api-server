const messageElement = document.getElementById('content');


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Fetch a random quote from the API and update the HTML

window.addEventListener('DOMContentLoaded', async () => {
    fetch('./data/quotes.json')
        .then(response => response.json())
        .then(data => {
            const index = randomInt(0, data.length)
            messageElement.textContent = data[index]
        })
});