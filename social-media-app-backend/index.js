import express from 'express'
import cors from 'cors'
import config from './src/common/config.js'
import appRoutes from './src/routes/index.js'
import logger from './src/middleware/logger.middleware.js'
import { mongoConnection } from './src/model/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger())

app.use(appRoutes)

mongoConnection().catch(err => console.log("MongoDB Connection Failed",err))

app.listen(config.PORT,()=>console.log(`Server listening to port ${config.PORT}`))