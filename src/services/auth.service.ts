import jwt from "jsonwebtoken";
import { User } from "../models/user.interface";

const JWT_SECRET: string = process.env.JWT_SECRET || "default-secret";

export const generarToken = (user: User): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
};
