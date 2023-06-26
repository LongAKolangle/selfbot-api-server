import express from "express"
import fs from "fs"
import path from "path";

const app = express();
const __dirname = process.cwd()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

function getRandomQuote() {
    const quotesPath = path.join(__dirname, 'data/quotes.json');
    const data = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello world!`);
});

app.get("/api/quote", async (req, res) => {
    const quote = getRandomQuote()
    res.end(quote)
})

export default app;