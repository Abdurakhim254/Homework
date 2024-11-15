import express from "express"
import {getAlladdresscon,getaddressByIdcon,Createaddresscon,Updateaddresscon,Deleteaddresscon} from "../controllers/index.js"
import {checkaddressdatamiddleware,updateaddressdatamiddleware} from "../middlewares/index.js"
import {checkaddressdatavalidate} from "../validations/index.js"

export const addressrouter=express.Router()

addressrouter.get("/",getAlladdresscon)
addressrouter.get("/:id",getaddressByIdcon)
addressrouter.post("/",checkaddressdatamiddleware(checkaddressdatavalidate),Createaddresscon)
addressrouter.put("/:id",updateaddressdatamiddleware(checkaddressdatavalidate),Updateaddresscon)
addressrouter.delete("/:id",Deleteaddresscon)