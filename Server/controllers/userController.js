import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../Utils";
import mongoose from "mongoose";
import cloudinary  from "../Cloudinary.js";

//to signup user
export const signUp = async (req, res) => {
    const { fullname, email, password, bio } = req.body;
    try {
        if (!fullname || !email || !password || !bio) {
            return res.json({ success: false, message: 'Missing details' })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.json({ success: false, message: 'account exists' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await User.create({ fullname, email, password: hashedPassword, bio }) //mongoose creates a new document in mongodb automatically
        const token = generateToken(newUser._id) //each document has a ._id field which is auto generated it is the primary key in that user document
        res.json({ success: true, userData: newUser, token, message: "account created successfully" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
//to login
export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email })
        const isPasswordCorrect = await bcrypt.compare(password, userData.password)
        if (isPasswordCorrect) {
            res.json({ success: false, message: "password is wrong" })
        }
        const token = generateToken(newUser._id)
        res.json({ success: true, token, message: "login successful" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })        
    }
}
//controller to check if user is authenticated
export const checkAuth=(res,req)=>{
    res.json({success:true,user:req.user});
}

//controller to update user profile details
export const updateProfile=async (req,res)=>{    
    try {
        const {profilePic,bio,fullname}=req.body;
        const userId=req.user._id;
        let updateUser;
        if(!profilePic)
        {
           updateUser= await User.findByIdAndUpdate(userId,{bio,fullname},{new:true});
        }
        else{
            const upload=await cloudinary.uploader.upload(profilePic);
            updateUser=await User.findByIdAndUpdate(userId,{profilePic:upload.secure_url,bio,fullname},{new:true})
        }
        res.json({success:true,user:updateUser})
        
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}