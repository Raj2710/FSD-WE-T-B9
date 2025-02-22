import mongoose from './index.model.js'
import { ROLES } from '../constants/common.constants.js'

const validateMobile = (value)=>{
    const mobileRegex = /^\d{10}$/
    return mobileRegex.test(value)
}

const validateRole = (value)=>{
    if(ROLES[value])
        return true
    return false
}

let usersSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is required"]},
    email:{type:String,required:[true,"Email is required"]} ,
    mobile:{
        type:String,
        required:[true,"Mobile is required"],
        validate:{
            validator:validateMobile,
            message: props => `${props.value} is not a valid Mobile Number`
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now},
    role:{
        type:String,
        default:ROLES.USER,
        validate:{
            validator:validateRole,
            message: props => `${props.value} is not a valid Role`
        }
    }
},{
    collection:'users',
    versionKey:false
})

// const usersModel = mongoose.model('user',usersSchema)
// export default usersModel

export default mongoose.model('users',usersSchema)