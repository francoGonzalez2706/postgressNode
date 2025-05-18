import express from "express";
import { login, register } from "../controllers/authControler";

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
