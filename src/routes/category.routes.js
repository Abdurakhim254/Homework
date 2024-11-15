import express from "express"
import {getAllcategory,getcategoryByid,Createcategory,Updatecategory,Deletecategory} from "../controllers/index.js"
import {checkcategorydatamiddleware,updatecategorydatamiddleware} from "../middlewares/index.js"
import {categoryvalidator} from "../validations/index.js"
export const categoryroutes=express.Router()

categoryroutes.get("/",getAllcategory)
categoryroutes.get("/:id",getcategoryByid)
categoryroutes.post("/",checkcategorydatamiddleware(categoryvalidator),Createcategory)
categoryroutes.put("/:id",updatecategorydatamiddleware(categoryvalidator),Updatecategory)
categoryroutes.delete("/:id",Deletecategory)