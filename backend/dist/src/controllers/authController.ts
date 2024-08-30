import { Request, Response } from "express";
import prisma from '../db/prisma.ts';
import bcryptjs from 'bcryptjs';

export const signup = async(req: Request, res: Response) => {
    try {
        const { username, fullName, password, email } = req.body;

        if(!username || !fullName || !password || !email) {
            return res.status(400).json({error: "Please fill in all fields"});
        }

        // if(password !== confirmPassword) {
        //     return res.status(400).json({ error: "Passwords don't match "});
        // }

        //check if user exists already
        const user = await prisma.user.findUnique({ where: { username } })

        if(user) {
            return res.status(400).json({ error: "username already exists"});
        }

        //hash password 
        const salt = await bcryptjs.js.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

    } catch(error) {

    }
};

export const login = async(req: Request, res: Response) => {};
export const logout = async(req: Request, res: Response) => {};