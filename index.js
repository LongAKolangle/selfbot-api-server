import express from "express"
import serverless from "serverless-http"
import apiRoutes from "./api/index.js"

const app = express();

app.use(express.json())

// API routes
app.use('/api', apiRoutes);

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