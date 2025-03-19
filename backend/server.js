// backend/server.js
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const authRoutes = require("./routes/auth"); // Authentication routes
const authenticateJWT = require("./middlewares/authMiddleware"); // JWT Middleware

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json()); // Enable JSON parsing

const PORT = process.env.PORT || 5000;

// Use authentication routes
app.use("/api/auth", authRoutes);  // Register and login routes

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Database connection error:", err));
