import { json, urlencoded } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import router from "./router/authRoute.js";
import authRoutes from "./router/authRoute.js";




dotenv.config();

const app = express();
//middleWare from wher all the contentent first parse
app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use("/", router);
app.use('/api/v1/auth', authRoutes);

export default app;
