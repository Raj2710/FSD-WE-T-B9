import bcrypt from "bcryptjs";

export const hashValue = async(value)=>{
    let salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(value,salt)
}


export const hashCompare = async(value, hashValue)=>{
    return await bcrypt.compare(value,hashValue)
}