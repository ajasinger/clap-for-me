import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const protectRoute = (req: Request, res: Response, next: NextFunction) => {
    try {

        //access data in cookie named "jwt"
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({ error: "Not authorized. No JWT"})
        }

        //verify jwt with secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        // NextFunction means we call the next function if this executes successfully 
        next();

    } catch(error: any) {

    }
}