const { Post, User, Category } = require("../models");

// Create a new post
const createPost = async (req, res) => {
  const { title, content, categoryId } = req.body;
  const userId = req.user.id; // Extracted from JWT

  try {
    const post = await Post.create({ title, content, userId, categoryId });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: "user" },
        { model: Category, as: "category" },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id, {
      include: [
        { model: User, as: "user" },
        { model: Category, as: "category" },
      ],
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;
  const userId = req.user.id; // Extracted from JWT

  try {
    const post = await Post.findOne({ where: { id, userId } });
    if (!post) {
      return res.status(404).json({ error: "Post not found or unauthorized" });
    }

    post.title = title;
    post.content = content;
    post.categoryId = categoryId;
    await post.save();

    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id; // Extracted from JWT

  try {
    const post = await Post.findOne({ where: { id, userId } });
    if (!post) {
      return res.status(404).json({ error: "Post not found or unauthorized" });
    }

    await post.destroy();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };