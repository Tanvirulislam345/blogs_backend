import express from "express";
import { errorHandler } from "./middlewares/errorHanler";
import authRouter from "./routes/auth.route";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use(errorHandler);

export default app;
