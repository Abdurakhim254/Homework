import {logger} from "../utils/logger.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const authGuard=(req,res,next)=>{
    try{

        const [type,token]=req.headers.authorization
        if(!type=="Bearer" || !token){
            logger.info("Login qilishingiz kerak")
            res.status("Login qilishingiz kerak")
    }
    const secretkey=process.env.JWT_ACCESS_SECRET
    jwt.verify(token,secretkey,(err,decode)=>{
        if(err){
            logger.error(err)
            res.status(400).send(err)
        }
        req.user=decode
        next()
    })
    }catch(error){
        logger.error(error)
        res.status(400).send(error)
    }
}