import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const protectRoute = (req: Request, res: Response, next: NextFunction) => {
    try {

        // NextFunction means we call the next function if this executes successfully 
        next();
    } catch(error: any) {

    }
}