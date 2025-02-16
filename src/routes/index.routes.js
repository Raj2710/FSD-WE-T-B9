import express from 'express'
import usersRoute from './users.routes.js'
const router = express.Router()

router.use('/users',usersRoute)

export default router