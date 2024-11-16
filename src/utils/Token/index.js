import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const createToken=async(email,role)=>{
    const payload={email,role}
    const secretkey=process.env.JWT_ACCESS_SECRET
    const result=jwt.sign(payload,secretkey)
    return result
}
