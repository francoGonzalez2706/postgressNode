import { Request, Response } from "express";
import { hashPassword } from "../services/password.service";
import prisma from "../models/user";
import { generarToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, pasword } = req.body;
  try {
    const hashedPasword = await hashPassword(pasword);
    const user = await prisma.create({
      data: {
        email,
        password: hashedPasword,
      },
    });
    const token = generarToken(user);
    res.status(201).json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "hubo un error en el register", err });
  }
};
export const login = async (req: Request, res: Response) => {};
