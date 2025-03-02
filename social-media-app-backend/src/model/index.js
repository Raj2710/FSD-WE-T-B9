import mongoose from "mongoose";
import config from "../common/config.js";

export const mongoConnection = async ()=>{
  await mongoose.connect(config.MONGODB_URL);
    console.log("MongoDB Connected Successfully!")
}