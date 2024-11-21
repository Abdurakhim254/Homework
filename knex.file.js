import knex from "knex";
import {logger} from "./src/utils/logger.js"

console.time("A")
const db=knex({
    client:'pg',
    connection:{
    host:'127.0.0.1',
    user:'postgres',
    port:5432,
    password:'root',
    database:'postgres'
    }
})

// const user=await db.select("phone_number").table("users")
var user=await db.select().table("users")

logger.info(user)


// var user=await db.select("*").fromRaw('select * from "users" where "id">?','5')

// logger.info(user)

// try {
//     const result=await db("users").insert({
//         name:"Abduraxim",
//         email:"Abduraxim@gmail.com",
//         password:"545454545454545",
//         role:'manager',
//         avatar:'https://example.com/avatar/jane.jpg',
//         username:"abduraxkhim",
//         birth_of_date:'2005-03-24',
//         phone_number:"+989898989",
//         is_active:true
//     }).returning("*")
    
//     console.log(result)
    
// } catch (error) {
//     console.error(error.message)
// }



console.timeEnd("A")