import express from 'express';
import protectRoute from '../middleware/protectRoute';
import { addAchievement, getAchievements } from '../controllers/achievementController';

const router = express.Router();

// /api/accomplishment/{endpoint}

//if user is authenticated call addAchievement function
router.post("/add", protectRoute, addAchievement);
router.get("/:id", protectRoute, getAchievements);

export default router;