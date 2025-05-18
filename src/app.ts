import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRouter } from "./routes/authRoutes";
import { userRouter } from "./routes/userRoutes";

const app = express();

app.use(express.json());

//routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
// app.use("/user")

export default app;
