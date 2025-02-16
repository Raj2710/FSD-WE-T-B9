import 'dotenv/config'

let config = {
    PORT: process.env.PORT || 8000,
    MONGODB_URL: process.env.MONGODB_URL 
}

export default config