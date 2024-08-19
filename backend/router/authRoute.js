import { Router } from "express";
import { greeting } from "../controllers/greeting";
// import addUser from "../controllers/addUser";
import { registerController, loginController,testController} from "../controllers/authcontroller";
import { reqireSignIn } from "../middleware/authMiddleware";

const router = Router();

router.get("/", greeting);
router.post("/register", registerController);
// router.post("/adding",)
router.post("/login",loginController);
//test routes
router.get('/test', reqireSignIn,testController)

export default router;
