import express from 'express'
import usersController from '../controller/users.controller.js'
import payloadValidator from '../middleware/payloadValidator.middleware.js'
import {createUserSchema,updateUserSchema, signinSchema} from '../validator/user.validator.js'
import authGuard from '../middleware/authGuard.middleware.js'
import adminGuard from '../middleware/adminGuard.middleware.js'
const router = express.Router()

router.get('/',authGuard,adminGuard,usersController.getAllUsers)
router.get('/:id',authGuard,usersController.getUserById)
router.post('/signup',payloadValidator(createUserSchema),usersController.createUser),
router.post('/signin',payloadValidator(signinSchema),usersController.signin)
router.put('/:id',authGuard,payloadValidator(updateUserSchema),usersController.editUserById)
router.delete('/:id',authGuard,usersController.deleteUserById)

export default router