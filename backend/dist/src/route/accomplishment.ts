import express from 'express';

const router = express.Router();

// /api/auth/{endpoint}

router.get("/accomplishments", (req, res) => {
    res.send("accomplishments");
})

export default router;