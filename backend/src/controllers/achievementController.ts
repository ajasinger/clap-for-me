import { Request, Response } from "express";
import prisma from '../db/prisma';

export const addAchievement = async (req: Request, res: Response) => {
    try {
        const { achievement } = req.body;
        const userId = req.user.id;

        const newAchievement = await prisma.achievement.create({
            data: {
                body: achievement, 
                creator: {
                    connect: {
                      id: userId,  // Assuming you have the user's id
                    },
                },
            }
        });

        if(newAchievement) res.status(201).json(newAchievement)

    } catch(error: any) {
        console.log("error in addAchievement", error.message);
        res.status(500).json({ error: "Internal server error"})
    }
}