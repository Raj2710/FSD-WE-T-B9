import Joi from "joi";

const createUserSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required()
})

const updateUserSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required()
})


export  {
    createUserSchema,
    updateUserSchema
}