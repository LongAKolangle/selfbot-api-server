function getRandomQuote() {
    const quotesPath = path.join(__dirname, 'data/quotes.json');
    const data = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

import express from "express"
const router = express.Router();

router.get('/', (req, res) => {
  res.json(getRandomQuote);
});

export default router;
