import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import adminRoutes from "./routes/admin.routes.js";

const app = express();

// Trust reverse proxies (important for deployment)
app.set("trust proxy", 1);

// CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(","),
    credentials: true,
  }),
);

// Body parsers
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});
app.use("/api/admin", adminRoutes);

// Global error handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export { app };
