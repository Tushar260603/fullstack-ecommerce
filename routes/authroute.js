import express from "express"
import { forgotpasswordcontroller, getOrdersController, loginController, orderStatusController, registercontroller, testController, updateProfileController } from "../controllers/authcontroller.js";
import {isAdmin, requireSignIn} from "../middlewares/authmiddleware.js"
import { getAllOrdersController } from "../controllers/productController.js";
const router=express.Router()

router.post('/register',registercontroller)
router.post('/login',loginController)
router.get("/test",requireSignIn,isAdmin,testController)

//protected route userr route
router.get("/user-auth",requireSignIn,(req,resp)=>{
    resp.status(200).send({ok:true});
})

//forgot password


router.post('/forgot-password',forgotpasswordcontroller)
export default router;

//admin route
router.get("/admin-auth",requireSignIn,isAdmin,(req,resp)=>{
    resp.status(200).send({ok:true});
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);


//orders
router.get("/orders", requireSignIn, getOrdersController);


//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);


// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );





