import fs from "fs"
import express from "express"
import path from "path";
const router = express.Router();

router.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve("./data", "quotes.json"), 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(data[index]);
});

export default router;