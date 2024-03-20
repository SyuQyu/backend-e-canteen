import { Request, Response } from "express";

type TCanteen = {
  name: string;
  usename: string;
};

export const create = (
  req: Request<unknown, unknown, TCanteen>,
  res: Response
) => {
  const { name, usename } = req.body;
  res.status(201).json({ name, usename });
};
