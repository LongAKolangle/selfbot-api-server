import express from "express"
const router = express.Router();

router.get('/api/hello', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode(200).json("Hello World!");
});

export default router;