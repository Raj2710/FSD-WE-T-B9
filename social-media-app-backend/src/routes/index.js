import express from 'express'
import userRoutes from  './users.routes.js'
const router = express.Router()

router.use('/users',userRoutes)

router.get('/health-check',(req,res)=>res.status(200).send("0K"))


export default router