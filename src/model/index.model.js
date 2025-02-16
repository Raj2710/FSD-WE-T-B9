import mongoose from 'mongoose'
import config from '../config/index.config.js'

// mongoose.connect(config.MONGODB_URL)
// .then(()=>console.log("Mongo DB Connected"))
// .catch(err=>console.log("Err"))


main().catch(err => console.log("MongoDB Connection Failed",err));

async function main() {
  await mongoose.connect(config.MONGODB_URL);
    console.log("MongoDB Connected Successfully!")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


export default mongoose