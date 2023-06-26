function getRandomQuote() {
    const quotesPath = path.join(__dirname, 'data/quotes.json');
    const data = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(getRandomQuote());
}