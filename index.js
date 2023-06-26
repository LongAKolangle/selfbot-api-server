import express from "express"
import path from "path";

const app = express();
const __dirname = process.cwd()

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

export default app