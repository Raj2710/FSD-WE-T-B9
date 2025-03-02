import { decodeToken } from "../utils/auth.js"
const authGuard = (req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]

    if(token)
    {
        let payload = decodeToken(token)
        req.headers.id = payload.id
        req.headers.role = payload.role

        if(Math.floor(+new Date()/1000) <= payload.exp)
            next()
        else
        res.status(401).send({message:"Session Expired!"})
    }
    else
        res.status(401).send({message:"Token Not Found"})
}

export default authGuard