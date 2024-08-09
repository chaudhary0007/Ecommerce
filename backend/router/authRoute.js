import { Router } from "express";
import { greeting } from "../controllers/greeting";
// import addUser from "../controllers/addUser";
import { registerController, loginController} from "../controllers/authcontroller";

const router = Router();

router.get("/", greeting);
router.post("/register", registerController);
// router.post("/adding",)
router.post("/login",loginController);

export default router;
