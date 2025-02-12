import express from "express";
import {
  addToCart,
  cartItems,
  getProductId,
  removeItems,
} from "../controllers/cartController.js";
import { protectRoutes } from "../controllers/authControllers.js";

const router = express();

router.post("/add-cart", protectRoutes, addToCart);

router.get("/cart-items", protectRoutes, cartItems);

router.delete("/remove-items", protectRoutes, removeItems);

router.get("/cart-items/:id", protectRoutes, getProductId);

export default router;
