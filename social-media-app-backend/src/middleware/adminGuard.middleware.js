import { decodeToken } from "../utils/auth.js"
import usersModel from "../model/users.model.js"
import { ROLES } from "../constants/common.constants.js"

const adminGuard = async(req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]

    if(token)
    {
        let payload = decodeToken(token)
        let user = await usersModel.findOne({email:payload.email,role:payload.role})
        console.log(user)
        if(user && user.role === ROLES.ADMIN)
            next()
        else
        res.status(401).send({message:"Access Denied"})
    }
    else
        res.status(401).send({message:"Token Not Found"})
}

export default adminGuard