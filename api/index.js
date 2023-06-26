import express from "express"
const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json("Hello World!");
});

export default router;