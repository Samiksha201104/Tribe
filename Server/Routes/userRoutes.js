import express from "express"
import { checkAuth, logIn, signUp, updateProfile } from "../controllers/userController.js";
import { protectRoute } from "../middleware.js";
const userRouter=express.Router();
//four api endpoint for user
userRouter.post("/signup",signUp)
userRouter.post("/login",logIn)
userRouter.put("/update-profile",protectRoute,updateProfile)
userRouter.get("/signup",protectRoute,checkAuth)
export default userRouter;