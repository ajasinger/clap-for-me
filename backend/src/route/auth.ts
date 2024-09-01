import express from 'express';
import { login, logout, signup } from '../controllers/authController';

const router = express.Router();

// url/api/auth/{endpoint}

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;