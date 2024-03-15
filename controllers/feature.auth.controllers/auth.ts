
import { Request, Response, NextFunction } from 'express';
import CustomError from '../../handler/CustomError';
export async function login(req: Request, res: Response) {
    try {
        // const users = await User.find();
        res.status(200).json("login");
    } catch (error: any) {
        throw new CustomError('Email tidak ditemukan', 404);
    }
}