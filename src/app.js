import express from "express"
import morgan from "morgan"

import { addressrouter, categoryroutes, socialrouter, userrouter, } from "./routes/index.js"
import {createAlltables} from "./schema/index.js"
import { productrouter } from "./routes/product.routes.js"

const app=express()


app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.use("/auth",userrouter)
app.use("/users",userrouter)
app.use("/social",socialrouter)
app.use("/address",addressrouter)
app.use("/category",categoryroutes)
app.use("/product",productrouter)

app.get("/",(req,res)=>{
    res.send('ok')
})



app.get("/setup",async(req,res)=>{
    await createAlltables()
    res.send("Table created")
})


export default app
