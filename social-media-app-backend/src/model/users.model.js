import mongoose from "mongoose";
import { ROLE } from '../common/constants.js'
import { generateUUID } from '../utils/helper.js'
import {validateRole, validateMobile} from '../validator/common.js'

let usersSchema = new mongoose.Schema({
    id:{type:String, default:generateUUID},
    firstName:{type:String,required:[true,"First Name is required"]},
    lastName:{type:String,required:[true,"Last Name is required"]},
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
        default:ROLE.USER,
        validate:{
            validator:validateRole,
            message: props => `${props.value} is not a valid Role`
        }
    }
},{
    collection:'users',
    versionKey:false
})


export default mongoose.model('users',usersSchema)