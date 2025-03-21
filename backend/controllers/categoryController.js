const { Category } = require('../models');

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Get a single category by slug
exports.getCategoryBySlug = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { slug: req.params.slug } });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error });
  }
};

// Create a new category (admin-only)
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Generate a slug from the category name
    const slug = name.toLowerCase().replace(/ /g, '-');

    // Create the category
    const category = await Category.create({ name, slug });

    res.status(201).json({ message: 'Category created', category });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Update a category (admin-only)
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update the category
    await category.update(req.body);

    res.json({ message: 'Category updated', category });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete a category (admin-only)
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Delete the category
    await category.destroy();

    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
};