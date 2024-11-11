import { Request, Response } from "express";
import { z } from "zod";
import { user } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import envConfig from "../config/index";
import { sendResponse } from "../utils/response";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const userRes = await user.findOne({
      email,
    });

    if (!userRes) {
      throw {
        status: 404,
        message: "User not found",
      };
    } else {
      const isMatch = await bcrypt.compare(password, userRes?.password!);
      if (!isMatch) {
        throw {
          status: 401,
          message: "Invalid credentials",
        };
      } else {
        const token = jwt.sign({ userId: userRes?._id }, envConfig.jwtSecret, {
          expiresIn: "1h",
        });

        sendResponse(res, { token }, "Login successfull");
      }
    }
  } catch (error) {
    throw {
      status: 400,
      message: error.message,
    };
  }
};
