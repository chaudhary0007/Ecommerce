import { Router } from "express";
import { greeting } from "../controllers/greeting.js";

const router = Router();

router.get("/", greeting);

export default router;