const payloadValidator = (schema)=>{
    return (req,res,next)=>{
        try {
            const {error,value} = schema.validate(req.body)
            if(error)
                throw error
            else
                next()
        } catch (error) {
            res.status(400).send({
                message:error.message || "Invalid Payload"
            })
        }
       
       
    }
}

export default payloadValidator