import express from "express"
import path from "path"
import fs from "fs"

const app = express()
const port = process.env.PORT | 3000

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

app.use(express.json())

app.use(express.static("./api/index/"))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.get("/api/quote", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data/quotes.json", "utf-8"))
    res.send(data[randomInt(0, data.length)])
})

app.get("*", (req, res) => {
    res.status(404).send('404 - Not Found');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});