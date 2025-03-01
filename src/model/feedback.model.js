import generateUUID from '../utils/common.js'
import mongoose from './index.model.js'

let feedbacksSchema = new mongoose.Schema({
    id:{type:String, default:generateUUID},
    title:{type:String,required:[true,"Title is required"]},
    comments:{type:String,required:[true,"Comments is required"]},
    rating:{type:Number, required:true},
    userId:{type:String,required:[true,"UserId is required"]},
    createdAt:{type:Date,default:Date.now},
},{
    collection:'feedbacks',
    versionKey:false
})

export default mongoose.model('feedbacks',feedbacksSchema)