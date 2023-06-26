import express from "express"
import serverless from "serverless-http"
import fs from "fs"
import path from "path";

const app = express();
const __dirname = process.cwd()

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.get("/api/quote", async (req, res) => {
    const rawData = await fs.promises.readFile(path.join(__dirname, "data/quotes.json"), "utf-8")
    const data = JSON.parse(rawData)
    res.json(data[randomInt(0, data.length)])
})

app.get("*", (req, res) => {
    res.status(404).send('404 - Not Found');
})

export default serverless(app)