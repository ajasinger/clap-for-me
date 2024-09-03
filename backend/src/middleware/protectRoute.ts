import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma";
import { Request, Response, NextFunction } from "express";

//show TypeScript token contents using JwtPaylod from jsonwebtoken
interface DecodedToken extends JwtPayload {
    userId: string;
}

//add user field to request
declare global {
    namespace Express{
        export interface Request {
            user: {
                id: string;
            }
        }
    }
}

const protectRoute = async(req: Request, res: Response, next: NextFunction) => {
    try {

        //access data in cookie named "jwt"
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(401).json({ error: "Not authorized. No JWT"})
        }

        //verify jwt with secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

        if(!decoded) {
            return res.status(401).json({ error: "Invalid token" });
        }
        
        //find user with this token
        const user = await prisma.user.findUnique({
            where: {
              id: decoded.userId,
            },
            select: {
                id: true,
                email: true,
                username: true,
                fullName: true
            },
        })

        if(!user) {
            return res.status(401).json({ error: "User not found" });
        }

        //add user field to req
        req.user = user;

        // NextFunction means we call the next function if this executes successfully 
        next();

    } catch(error: any) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;