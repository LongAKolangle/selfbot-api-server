import fs from "fs"
import path from "path";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomQuote(__dirname) {
    const quotesPath = path.join(__dirname, 'data/quotes.json');
    const data = JSON.parse(fs.readFileSync(quotesPath, 'utf-8'));
    return data[randomInt(0, data.length)];
}