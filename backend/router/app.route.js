import { Router } from "express";
import { greeting } from "../controllers/greeting";
import addUser from "../controllers/addUser";

const router = Router();

router.get("/", greeting);
router.post("/addUser", addUser);

export default router;
