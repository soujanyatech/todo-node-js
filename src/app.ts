import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/todos", todoRoutes);

const MONGODB_URI = process.env.MONGODB_URI as string;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => console.error("MongoDB connection error:", error));

export default app; // Default export

