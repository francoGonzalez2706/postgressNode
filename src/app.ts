import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRouter } from "./routes/authRoutes";

const app = express();

app.use(express.json());

//routes
app.use("/auth", authRouter);
// app.use("/user")

export default app;
