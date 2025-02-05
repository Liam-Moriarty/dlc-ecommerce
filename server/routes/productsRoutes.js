import express from "express";
import {
  getPaginatedProducts,
  getProducts,
} from "../controllers/productsControllers.js";

const router = express();

router.get("/paginated-products", getPaginatedProducts);

router.get("/products", getProducts);

export default router;
