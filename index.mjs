import express from "express"
import serverless from "serverless-http"
import fs from "fs"
import path from "path";

const router = express.Router()
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

router.get("/quote", async (req, res) => {
    const quote = getRandomQuote()
    res.json(quote)
})

app.use("/api", router)

const serverlessApp = serverless(app);

app.listen(3000)

export const handler = async (event, context) => {
    // Forward the event and context to the serverless app
    const result = await serverlessApp(event, context);
    return result;
};
