import mongoose from "mongoose";
import { BLOG_STATUS } from "../common/constants.js";
import {generateUUID} from '../utils/helper.js'

let blogSchema = new mongoose.Schema({
    id:{type:String, default:generateUUID},
    title:{type:String,required:[true,"Title is required"]},
    description:{type:String,required:[true,"Description is required"]},
    image:{type:String,default:""},
    userId:{type:String,required:[true,"UserId is required"]},
    status:{type:String,default:BLOG_STATUS.PENDING},
    likedBy:{type:Array,default:[]},
    createdAt:{type:Date,default:Date.now},
},{
    collection:'blogs',
    versionKey:false
})


export default mongoose.model('blogs',blogSchema)