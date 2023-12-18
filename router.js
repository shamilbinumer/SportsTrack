import { Router } from "express";
import * as controller from "./controller.js"
import multer from "multer";
import Auth from "./middleware/Auth.js";
const upload=multer({dest:'./uploads'});
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:email").get(controller.GetAdmin);
router.route("/adminpassword").patch(controller.forgotAdminpwd)
router.route("/addCategory").post(controller.AddCategory)
router.route("/getcategory").get(controller.getCategory);
router.route("/addProduct").post(controller.AddProduct);
router.route('/upload').post(upload.single('avathar'),controller.images);

export default router;