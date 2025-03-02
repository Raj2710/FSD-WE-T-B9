import { ROLE } from "../common/constants.js"

export const validateMobile = (value)=>{
    const mobileRegex = /^\d{10}$/
    return mobileRegex.test(value)
}

export const validateRole = (value)=>{
    if(ROLE[value])
        return true
    return false
}


