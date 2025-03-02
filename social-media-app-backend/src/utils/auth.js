import bcrypt from "bcryptjs";
import config from "../common/config.js";
import jwt from 'jsonwebtoken'

export const hashValue = async(value)=>{
    let salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(value,salt)
}


export const hashCompare = async(value, hashValue)=>{
    return await bcrypt.compare(value,hashValue)
}

export const createToken = async(payload)=>{

    let token = jwt.sign(payload,config.JWT_SECRET,{
        expiresIn:config.JWT_EXPIRY
    })

    return token
}

export const decodeToken = (token)=>{
    return jwt.decode(token)
}