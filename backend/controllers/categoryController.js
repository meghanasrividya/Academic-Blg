const { Category } = require("../models");

// Create a new category
const createCategory = async (req, res) => {
  const { category_name } = req.body;

  try {
    const category = await Category.create({ category_name });
    res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCategory, getAllCategories };