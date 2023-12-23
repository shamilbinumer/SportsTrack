import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
const router=Router();
import multer from "multer";
const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:email").get(controller.GetAdmin);
router.route("/adminpassword").patch(controller.forgotAdminpwd)
router.route("/addCategory").post(controller.AddCategory)
router.route("/getcategory").get(controller.getCategory);
// router.route("/addProduct").post(controller.AddProducts);
router.route('/addProduct').post(upload.array( 'images'), controller.AddProducts);
router.route("/image/:filename").get(controller.SetPath)
router.route("/delcategory/:id").delete(controller.delCategory);
router.route("/editCategory/:id").patch(controller.editCategory);
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/getCatWiseProducts/:category").get(controller.getCategoryWisedProduct);


export default router;