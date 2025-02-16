import mongoose from './index.model.js'

let usersSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true} ,
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now}
},{
    collection:'users',
    versionKey:false
})

// const usersModel = mongoose.model('user',usersSchema)
// export default usersModel

export default mongoose.model('users',usersSchema)