import { Router } from "express";
// import Auth from "./src/Components/MainPage/Auth.js";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.AdminLogin);


export default router;