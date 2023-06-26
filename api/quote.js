import path from "path";
import express from "express"
import fs from "fs"
const router = express.Router();

function getRandomQuote() {
    const quotesPath = path.join(__dirname, 'data/quotes.json');
    const data = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

router.get('/', (req, res) => {
  res.json(getRandomQuote);
});

export default router;
