import express from 'express'
import userRoutes from  './users.routes.js'
import blogRoutes from './blog.routes.js'

const router = express.Router()

router.use('/users',userRoutes)
router.use('/blogs',blogRoutes)

router.get('/health-check',(req,res)=>res.status(200).send("0K"))


export default router