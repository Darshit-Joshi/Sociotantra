import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/admin.controller.js";
import adminAuth from "../middlewares/auth.middleware.js";

const router = express.Router();

// PUBLIC (login only)
router.post("/login", loginAdmin);

// PROTECTED (only logged-in admins can create new admins)
router.post("/register", adminAuth, registerAdmin);

export default router;
