import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Successful!");
  } catch (error) {
    console.error("Connection Failed:", error);
  } finally {
    mongoose.connection.close();
  }
};

testConnection();
