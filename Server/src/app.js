const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser=require('cookie-parser');
const wallpaperRoutes = require("./routes/wallpapers.routes");
const cors=require("cors");

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // or 5173 if Vite
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
// Wallpaper API routes
app.use("/api/wallpapers", wallpaperRoutes);
app.use("/wallpapers", express.static("wallpapers"));
module.exports = app;
