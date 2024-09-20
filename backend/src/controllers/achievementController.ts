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

export const getAchievements = async (req: Request, res: Response) => {
    try {
        const {id: userId} = req.params;
        
        const achievements = await prisma.achievement.findMany({
            where: {
                creatorId: userId,
            },
            select: {
                id: true,
                body: true
            }
        })

        if(achievements) res.status(201).json(achievements)

    } catch(error: any) {
        console.log("error in getAchievement", error.message);
        res.status(500).json({ error: "Internal server error"})
    }
}