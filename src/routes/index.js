import express from 'express'
import usersRoutes from './users.routes.js'
import moviesRoutes from './movies.routes.js'
const router = express.Router()

router.use('/users',usersRoutes)
router.use('/movies',moviesRoutes)

export default router