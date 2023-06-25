import express from "express"
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Our API Server!\nCreated by Eternityyy from BKI Team")
})

app.get("/api/quote", (req, res) => {
    const data = {"quote": "hello world"}
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})