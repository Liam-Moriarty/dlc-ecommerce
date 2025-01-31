import express from "express";
import {
  changePassword,
  updateProfile,
} from "../controllers/profileController.js";
import { getClients, protectRoutes } from "../controllers/authControllers.js";

const router = express();

router.put("/changePassword", protectRoutes, changePassword);

router.put("/update-profile", protectRoutes, updateProfile);

router.get("/clients", protectRoutes, getClients);

export default router;
