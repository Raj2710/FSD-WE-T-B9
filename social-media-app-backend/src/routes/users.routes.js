import express from 'express'
import usersController from '../controller/users.controller.js'
import payloadValidator from '../middleware/payload.validator.js'
import authGuard from '../middleware/authGuard.middleware.js'
import adminGuard from '../middleware/adminGuard.middleware.js'
import {signupSchema,signinSchema} from '../validator/users.validator.js'

const router = express.Router()

router.get('/getAllUsers',authGuard,adminGuard,usersController.getAllUsers)
router.get('/getUserById/:id',authGuard,adminGuard,usersController.getUserById)
router.get('/profile',authGuard,usersController.getProfileDetails)
router.post('/signup',payloadValidator(signupSchema),usersController.signup)
router.post('/signin',payloadValidator(signinSchema),usersController.signin)
router.put('/changeStatus/:id',authGuard,adminGuard,usersController.changeStatus)

export default router