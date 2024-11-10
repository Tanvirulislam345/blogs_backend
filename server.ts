import app from "./app";
import envConfig from "./config";
import { dbConnection } from "./db";

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(envConfig.port, () => {
      console.log(`Server is running on port ${envConfig.port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
