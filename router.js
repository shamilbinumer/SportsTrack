import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:email").get(controller.GetAdmin);
router.route("/adminpassword").patch(controller.forgotAdminpwd)
router.route("/addCategory").post(controller.AddCategory)
router.route("/getcategory").get(controller.getCategory);
router.route("/addProduct").post(controller.AddProducts);
router.route("/delcategory/:id").delete(controller.delCategory);
router.route("/editstaff/:id").patch(controller.editStaff);


export default router;