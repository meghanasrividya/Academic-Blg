const express = require("express");
const { Post, User } = require("../models");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = "secret";

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

router.post("/", authenticate, async (req, res) => {
  const { title, content, category } = req.body;
  const post = await Post.create({ title, content, category, userId: req.user.id });
  res.status(201).json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.findAll({ include: User });
  res.json(posts);
});

router.delete("/:id", authenticate, async (req, res) => {
  await Post.destroy({ where: { id: req.params.id, userId: req.user.id } });
  res.json({ message: "Post deleted" });
});

module.exports = router;
