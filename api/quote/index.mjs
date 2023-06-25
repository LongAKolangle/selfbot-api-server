const messageElement = document.getElementById('content');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

fetch('../../data/quotes.json', {
    headers: {
      'Cache-Control': 'public, max-age=86400' // 1 day cache
    }
})
    .then(response => response.json())
    .then(data => {
        const index = randomInt(0, data.length)
        messageElement.textContent = data[index]
    })