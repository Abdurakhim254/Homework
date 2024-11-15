import {registerCon,loginCon,updateCon,deleteuserByemail,getAllusers,getuserbyEmail} from "../controllers/index.js"
import {registermiddleware,loginmiddleware,updateusermiddleware} from "../middlewares/index.js"
import { uservalidator,loginvalidator } from "../validations/index.js"
import express from "express"

export const userrouter=express.Router()

userrouter.post("/register",registermiddleware(uservalidator),registerCon)
userrouter.post("/login",loginmiddleware(loginvalidator),loginCon)
userrouter.put("/:email",updateusermiddleware(uservalidator),updateCon)
userrouter.delete("/:email",deleteuserByemail)
userrouter.get("/",getAllusers)
userrouter.get("/:email",getuserbyEmail)