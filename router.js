import { Router } from "express";
import * as controller from "./controller.js"
import Auth from "./Auth.js";
const router=Router();
// import multer from "multer";
// const storage = multer.diskStorage({
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage: storage });
router.route("/addadmin").post(controller.AddAdmin);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:email").get(controller.GetAdmin);
router.route("/adminpassword").patch(controller.forgotAdminpwd)
router.route("/addCategory").post(controller.AddCategory)
router.route("/getcategory").get(controller.getCategory);
router.route("/addProduct").post(controller.AddProducts);
// router.route('/addProduct').post(upload.array( 'images'), controller.AddProducts);
// router.route("/image/:filename").get(controller.SetPath)
router.route("/delcategory/:id").delete(controller.delCategory);
router.route("/editCategory/:id").patch(controller.editCategory);
router.route("/getCatDetails/:id").post(controller.getCatDetails);
router.route("/getCatWiseProducts/:category").get(controller.getCategoryWisedProduct);
router.route("/addCustomer").post(controller.AddCustomer);
router.route("/customerLogin").post(controller.CustomerLogin);
router.route("/CustHome").get(Auth,controller.customerHome);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/editProdect/:id").patch(controller.editProdect);
router.route("/delProduct/:id").delete(controller.delProduct);
router.route("/getAllProducts").get(controller.getAllProducts);
router.route("/addToCart").post(controller.AddToCart);
router.route("/getAllCustomers").get(controller.getAllCustomers);
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/delAlltProduct/:id").delete(controller.deleteAllProducts);


export default router;