import express from "express"
import serverless from "serverless-http"
import path from "path";
import { getRandomQuote } from "./api/quote/index.mjs";

const app = express();
const router = express.Router()
const __dirname = process.cwd()


app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

router.get("/quote", async (req, res) => {
    res.json(getRandomQuote(__dirname))
})

app.use("/api", router)

app.get("*", (req, res) => {
    res.status(404).send('404 - Not Found');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

export default serverless(app)