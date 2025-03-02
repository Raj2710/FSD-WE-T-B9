import { decodeToken } from "../utils/auth.js"
import usersModel from "../model/users.model.js"
import { ROLE } from "../common/constants.js"

const adminGuard = async(req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]

    if(token)
    {
        let payload = decodeToken(token)
        let user = await usersModel.findOne({id:payload.id,role:payload.role})
        if(user && ( user.role === ROLE.ADMIN || user.role === ROLE.SUPER_ADMIN))
            next()
        else
        res.status(401).send({message:"Access Denied"})
    }
    else
        res.status(401).send({message:"Token Not Found"})
}

export default adminGuard