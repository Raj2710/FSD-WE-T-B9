import express from 'express'
import cors from 'cors'
import router from './src/routes/index.js'
import logger from './src/middleware/logger.middleware.js'

const app = express()
const PORT = process.env.PORT || 8000


//middleware - its a function that will be used within req,res cycle
app.use(express.json())
app.use(cors())

app.use(logger)

app.use(router)

app.listen(PORT, ()=>console.log(`App listening to ${PORT}`))