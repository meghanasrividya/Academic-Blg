const express = require("express");
const { Comment, User } = require("../models");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = "secret";

// Middleware for authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Create a comment
router.post("/", authenticate, async (req, res) => {
  const { content, postId } = req.body;
  const comment = await Comment.create({ content, userId: req.user.id, postId });
  res.status(201).json(comment);
});

// Get comments for a post
router.get("/:postId", async (req, res) => {
  const comments = await Comment.findAll({ 
    where: { postId: req.params.postId },
    include: { model: User, attributes: ["name"] }
  });
  res.json(comments);
});

// Delete a comment
router.delete("/:id", authenticate, async (req, res) => {
  await Comment.destroy({ where: { id: req.params.id, userId: req.user.id } });
  res.json({ message: "Comment deleted" });
});

module.exports = router;
