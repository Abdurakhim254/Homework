import pool from "../Database/index.js";

export const getaddresses=async()=>{
    const query="Select * from address"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result
    }else{
        return "Addreslar topilmadi"
    }
}

export const getaddresByid=async(id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result
    }else{
        return "Address topilmadi"
    }
}

export const createaddress=async(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark)=>{
    const query="Insert into address(user_id,title,created_at,address_line_1,address_line2,country,city,postal_code,phone_number,landmark) Values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"
    const arr=[user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark]
    await pool.query(query,arr)
    return "Address yaratildi"
}

export const updateaddressByid=async(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    const updatequery="Update address set user_id=$1,title=$2,created_at=$3,address_line_1=$4,address_line_2=$5,country=$6,city=$7,postal_code=$8,phone_number=$9,landmark=$10 where id=$11"
    if(result.rows.length>=1){
        await pool.query(updatequery,[user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id])
        return "Addres yangilandi"
    }else{
        return "Yangilanadigan Address topilmadi"
    }
}

export const deleteaddressByid=async(id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    const deletequery="Delete from address where id=$1"
    if(result.rows.length>=1){
        await pool.query(deletequery,[id])
        return "Addres o'chirildi"
    }else{
        return "O'chiriladigan Address topilmadi"
    }
}