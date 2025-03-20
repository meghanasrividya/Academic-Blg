const express = require("express");
const sequelize = require("./config/database"); // Correct import
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Unable to connect to the database:", err));

// Sync database
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.error("Unable to sync database:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));