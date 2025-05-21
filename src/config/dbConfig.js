import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("connect to MongoDB");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

export default connectDB;
