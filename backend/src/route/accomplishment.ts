import express from 'express';

const router = express.Router();

// /api/accomplishment/{endpoint}

router.get("/tracker", (req, res) => {
    res.send("tracker");
})

export default router;