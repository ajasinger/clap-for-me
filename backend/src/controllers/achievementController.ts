import { Request, Response } from "express";

export const addAchievement = async (req: Request, res: Response) => {
    try {
        const { achievement } = req.body;
        const userId = req.user.id;

    } catch(error: any) {
        console.log("error in addAchievement", error.message);
        res.status(500).json({ error: "Internal server error"})
    }
}