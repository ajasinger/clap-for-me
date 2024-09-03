import express from 'express';
import { login, logout, signup, getUser } from '../controllers/authController';
import protectRoute from '../middleware/protectRoute';

const router = express.Router();

// url/api/auth/{endpoint}

router.get("/me", protectRoute, getUser); //check if user is logged in
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;