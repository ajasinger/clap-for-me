import express from 'express';

const router = express.Router();

// /api/auth/{endpoint}

router.get("/login", (req, res) => {
    res.send("logged in successfully");
})

router.get("/logout", (req, res) => {
    res.send("logged out successfully");
})

router.get("/signup", (req, res) => {
    res.send("signed up successfully");
})

export default router;