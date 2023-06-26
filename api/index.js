import fs from "fs"
import express from "express"
const router = express.Router();

router.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode(200).json("Hello World!");
});

router.get('/api/quote', (req, res) => {
    const data = JSON.parse(fs.readFileSync("../data/quotes.json", 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode(200).json(data[index]);
});

export default router;