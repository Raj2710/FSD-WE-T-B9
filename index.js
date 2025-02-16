import express from 'express'
import config from './src/config/index.config.js'
import cors from 'cors'
import logger from './src/middleware/logger.middleware.js';
import routes from './src/routes/index.routes.js'

const app = express();

app.use(express.json())
app.use(cors())
app.use(logger)
app.use(routes)


app.listen(config.PORT,()=>console.log(`Server Listening ${config.PORT}`))