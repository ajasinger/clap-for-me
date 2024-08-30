import { Request, Response } from "express";
import prisma from '../db/prisma.ts';
import bcryptjs from 'bcryptjs';
import generateToken from "../utils/generateToken.ts";

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
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //add new user to db
        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                email
            } 
        })

        //if new user created generate a token
        if(newUser) {
            //generate token adn set cookie 
            generateToken(newUser.id, res)

            res.status(201).json({ 
                id: newUser.id,
                fullname: newUser.fullName,
                username: newUser.username,
                email: newUser.email
             })
        } else {
            res.status(400).json({ error: "new user not created" })
        }

    } catch(error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
};

export const login = async(req: Request, res: Response) => {};
export const logout = async(req: Request, res: Response) => {};