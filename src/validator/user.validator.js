import Joi from "joi";
import { ROLES } from "../constants/common.constants.js";

const createUserSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().required(),
    mobile:Joi.string().required(),
    role:Joi.string().valid(...Object.values(ROLES))
})

const updateUserSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required()
})

const signinSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})

export  {
    createUserSchema,
    updateUserSchema,
    signinSchema
}