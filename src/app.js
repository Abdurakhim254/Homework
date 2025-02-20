import express from "express"
import morgan from "morgan"

import { addressrouter, cart_item_router, cartrouter, categoryroutes, ordersrotuter, reviewRouter, socialrouter, userrouter, whishlistrouter } from "./routes/index.js"
import {createAlltables} from "./schema/index.js"
import { productrouter } from "./routes/product.routes.js"
import {findbyusername,findByid} from './service/index.js' 
import passport from 'passport'
import session from 'express-session'
import LocalStrategy from 'passport-local'
import cookieParser from 'cookie-parser'


const app=express()


app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(
    session({
        secret:'asdvfbfgtre',
        resave:false,
        saveUninitialized:true,
        cookie:{
            secure:true
        }
    })
    )


app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(async function(id,done){
    try {
        const currentUser=await findByid(id)
        done(null,currentUser)
    } catch (error) {
        done(error)
    }
})





passport.use(
    new LocalStrategy(async function(username,passport,done){
        try {
            const currentuser=await findbyusername(username)
            if(!currentuser){
                return done(
                    null,
                    false,
                    {
                        message:'Incorrect username or password'
                    }
                )
            }
            done(null,currentuser[0])
        } catch (error) {
            done(error)
            
        }
    })
)

app.use(
    '/test',
    passport.authenticate('local',{
        session:true,
    }),
    (req,res,next)=>{
        try {
            console.log({user:req.user})
            console.log({session:req.session})
            res.send('ok')
        } catch (error) {
            next(error)
        }
    }
)

app.use("/auth",userrouter)
app.use("/users",userrouter)
app.use("/social",socialrouter)
app.use("/address",addressrouter)
app.use("/category",categoryroutes)
app.use("/product",productrouter)
app.use("/whishlist",whishlistrouter)
app.use("/review",reviewRouter)
app.use("/cart",cartrouter)
app.use("/order",ordersrotuter)
app.use("/cart_item",cart_item_router)

app.get("/",(req,res)=>{
    res.send('ok')
})



app.get("/setup",async(req,res)=>{
    await createAlltables()
    res.send("Table created")
})


export default app