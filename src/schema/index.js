import {logger} from "../utils/logger.js"
import {socialprofiletable} from "./social/social.schema.js"
import {createUsertable} from "./users/user.schema.js"
import { createAddresstable } from "./address/address.schema.js"
import { createProductable } from "./products/products.schema.js"
import { createCategorytable } from "./catgory/category.schema.js"

export const createAlltables=async()=>{
    try {
        await createUsertable()
        await socialprofiletable()
        await createAddresstable()
        await createCategorytable()
        await createProductable()
    } catch (error) {
        logger.error(error)
    }
}