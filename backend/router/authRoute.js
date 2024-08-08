import { Router } from "express";
import { greeting } from "../controllers/greeting";
// import addUser from "../controllers/addUser";
import { registerController } from "../controllers/authcontroller";

const router = Router();

router.get("/", greeting);
router.post("/register", registerController);

export default router;
