const messageElement = document.getElementById('content');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

fetch('./data/quotes.json')
        .then(response => response.json())
        .then(data => {
            const index = randomInt(0, data.length)
            messageElement.textContent = data[index]
        })