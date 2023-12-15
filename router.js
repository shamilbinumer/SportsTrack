import { Router } from "express";
// import Auth from "./src/Components/MainPage/Auth.js";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);


export default router;