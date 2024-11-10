import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || "",
  jwtSecret: process.env.JWT_SECRET || "secret",
};

export default envConfig;
