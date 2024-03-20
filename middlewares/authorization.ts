import { Request, Response, NextFunction } from "express";
import json, { TokenExpiredError } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

type TPayload = {
  id: string;
  role: string;
};

const authotization = (roles: ("user" | "seller" | "guest" | "admin")[]) => {
  const normalizeRole = new Set(roles.map((r) => r.toLowerCase()));
  return (req: Request, res: Response, next: NextFunction) => {
    let userRole = "guest";
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (token) {
        const decoded = json.verify(token, process.env.JWT_SECRET!) as TPayload;
        userRole = decoded.role;
      }
    } catch (error) {}

    if (normalizeRole.has(userRole)) {
      next();
    } else {
      res.status(403).json({
        message: "You don't have permission to access this resource",
      });
    }
  };
};

export default authotization;
