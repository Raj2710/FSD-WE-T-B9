import express from 'express'
import usersController from '../controller/users.controller.js'
const router = express.Router()

router.get('/',usersController.getAllUsers)
router.get('/:id',usersController.getUserById)
router.post('/',usersController.createUser)
router.put('/:id',usersController.editUserById)
router.delete('/:id',usersController.deleteUserById)

export default router