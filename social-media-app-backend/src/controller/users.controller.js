import usersModel from "../model/users.model.js"

const signUp = (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}


export default {
    signUp
}