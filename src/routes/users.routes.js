import express from 'express'
import usersController from '../controller/users.controller.js'
import payloadValidator from '../middleware/payloadValidator.middleware.js'
import {createUserSchema,updateUserSchema} from '../validator/user.validator.js'
const router = express.Router()

router.get('/',usersController.getAllUsers)
router.get('/:id',usersController.getUserById)
router.post('/',payloadValidator(createUserSchema),usersController.createUser),
router.put('/:id',payloadValidator(updateUserSchema),usersController.editUserById)
router.delete('/:id',usersController.deleteUserById)

export default router