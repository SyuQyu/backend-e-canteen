import { Request, Response } from "express";

type TRegisterData = {
  username: string;
  password: string;
  role: string;
};

export const register = (
  req: Request<unknown, unknown, TRegisterData>,
  res: Response
) => {};
