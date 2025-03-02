import 'dotenv/config'

const config = {
    PORT : process.env.PORT || 4000,
    JWT_EXPIRY : process.env.JWT_EXPIRY,
    JWT_SECRET : process.env.JWT_SECRET,
    MONGODB_URL :process.env.MONGODB_URL 
}

export default config