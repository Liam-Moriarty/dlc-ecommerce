import express from "express";
import { login, signUp } from "../controllers/authControllers.js";

const router = express();

router.post("/sign-up", signUp);

router.post("/login", login);

export default router;
