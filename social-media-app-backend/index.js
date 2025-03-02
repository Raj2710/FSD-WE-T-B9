import express from 'express'
import cors from 'cors'
import config from './src/config.js'
import appRoutes from './src/routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(appRoutes)

app.listen(config.PORT,()=>console.log(`Server listening to port ${config.PORT}`))