import express from "express";
import {
  addToFavorites,
  deleteFavorites,
  getFavorites,
} from "../controllers/favoritesController.js";
import { protectRoutes } from "../controllers/authControllers.js";

const router = express();

router.post("/add-favorites", protectRoutes, addToFavorites);

router.delete("/delete-favorites", protectRoutes, deleteFavorites);

router.get("/get-favorites", protectRoutes, getFavorites);

export default router;
