import Joi from "joi";
import { BLOG_STATUS } from "../common/constants.js";
const createBlogSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string()
})

const changeStatusSchema = Joi.object({
    status:Joi.string().required().valid(...Object.values(BLOG_STATUS)),
    reason:Joi.string()
})

export {
    createBlogSchema,
    changeStatusSchema
}