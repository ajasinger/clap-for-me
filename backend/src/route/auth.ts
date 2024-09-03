import express from 'express';
import { login, logout, signup, getUser } from '../controllers/authController';
import protectRoute from '../middleware/protectRoute';

const router = express.Router();

// url/api/auth/{endpoint}

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
//check if user is logged in
router.get("/me", protectRoute, getUser); 

export default router;