import express from "express"
import fs from "fs"
import path from "path"
const router = express.Router();
router.get('/api', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json("Hello World!");
});

router.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

router.get('/api/quote', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.resolve("./data", "quotes.json"), 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(data[index]);
});


export default router;