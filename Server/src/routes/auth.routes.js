const express=require("express");
const authController=require("../controllers/auth.controller");
const authMiddleware=require("../middlewares/auth.middleware");

const router=express.Router();



router.post("/user/register",authController.registerUser);
router.post("/user/login",authController.login);
router.get("/user/logout",authController.logout);
router.get("/profile",authMiddleware,(req,res)=>{
  res.json({message:"Profile data",user:req.user})
})


module.exports=router;