import jwt from"jsonwebtoken"
import User from "../models/user.js";
export const protectRoute=async(req,res,next)=>{
    try {
        const token=req.header.token;//After login/signup, frontend saves the token (usually in localStorage or cookie).On each API call, it sends the token inside the request headers:
        const decoded=jwt.verify(token,process.env.JWT_TOKEN)// decoding token
        const user=await User.findbyId(decoded.userId).select("-password")
        if(!user)
        {
           return res.jsnon({success:false,message:"user not found"})
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("error occured in middleware")
        return res.jsnon({success:false,message:error.message})
    }
}
//middlewear to protect routes