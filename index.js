import express from "express"
import serverless from "serverless-http"

const app = express();

app.use(express.json())

// API routes

// Public side
app.use(express.static("public"))

//Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Internal Server Error');
// });

const serverlessHandler = serverless(app);

if (process.platform == "win32") {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

export default serverlessHandler;