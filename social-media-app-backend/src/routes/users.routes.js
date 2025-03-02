import express from 'express'
import usersController from '../controller/users.controller.js'
import payloadValidator from '../middleware/payload.validator.js'
import {signupSchema,signinSchema} from '../validator/users.validator.js'

const router = express.Router()

router.post('/signup',payloadValidator(signupSchema),usersController.signUp)

export default router