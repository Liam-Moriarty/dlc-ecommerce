import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import favoritesRoutes from "./routes/favoritesRoutes.js";

// CONFIGURATION
dotenv.config();
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/", authRoutes);
app.use("/profile", profileRoutes);
app.use("/", productsRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", transactionRoutes);
app.use("/favorites", favoritesRoutes);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DATABASE CONNECTED!!");
    app.listen(PORT, () => {
      console.log(`Server connected at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("DATABASE ERROR : ", error);
  });
