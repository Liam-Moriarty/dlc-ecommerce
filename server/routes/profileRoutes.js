import express from "express";
import { updateProfile } from "../controllers/profileController.js";
import { getClients, protectRoutes } from "../controllers/authControllers.js";

const router = express();

router.patch("/update-profile", updateProfile);

router.get("/clients", protectRoutes, getClients);

export default router;
