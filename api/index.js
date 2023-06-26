import fs from "fs"
import express from "express"
import path from "path";
const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json("Hello World!");
});

export default router;