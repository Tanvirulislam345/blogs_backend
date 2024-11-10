import { Request, Response } from "express";
import { z } from "zod";
import { user } from "../models/user";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const userRes = await user.findOne({
      email,
      password,
    });
  } catch (error) {}
};
