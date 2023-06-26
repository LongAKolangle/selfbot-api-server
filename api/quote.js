import express from "express"
import fs from "fs"
const router = express.Router();

router.get('/api/quote', (req, res) => {
    const data = JSON.parse(fs.readFileSync("../data/quotes.json", 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode(200).json(data[index]);
});

export default router;
