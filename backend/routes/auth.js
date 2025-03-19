const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");  // Import the User model
const router = express.Router();

// POST: Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Send a success response
    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Error in user registration:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
