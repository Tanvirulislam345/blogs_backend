import mongoose from "mongoose";
import config from "../config";

export const dbConnection = async () => {
  try {
    await mongoose.connect(config.dbUri);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
