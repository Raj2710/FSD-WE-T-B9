import 'dotenv/config'

let config = {
    PORT: process.env.PORT || 8000,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY || '1h'
}

export default config