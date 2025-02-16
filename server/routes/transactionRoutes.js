import express from "express";
import {
  clientOrders,
  getOrders,
} from "../controllers/transactionControllers.js";
import { protectRoutes } from "../controllers/authControllers.js";

const router = express();

router.post("/create-order", clientOrders);

router.get("/get-orders", protectRoutes, getOrders);

export default router;
