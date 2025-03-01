import express from 'express'
import usersRoute from './users.routes.js'
import feedbackRoute from './feedback.routes.js'

const router = express.Router()

router.use('/users',usersRoute)
router.use('/feedback',feedbackRoute)

export default router