const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');
const categoryController = require('../controllers/categoryController');
const { authenticate, isAdmin } = require('../middleware/auth');

// Auth routes
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.get('/api/user', authenticate, authController.getCurrentUser);

// Post routes
router.get('/api/posts', postController.getAllPosts);
router.get('/api/posts/:slug', postController.getPostBySlug);
router.post('/api/posts', authenticate, isAdmin, postController.createPost);
router.put('/api/posts/:id', authenticate, isAdmin, postController.updatePost);
router.delete('/api/posts/:id', authenticate, isAdmin, postController.deletePost);

// Category routes
router.get('/api/categories', categoryController.getAllCategories);
router.get('/api/categories/:slug', categoryController.getCategoryBySlug);
router.post('/api/categories', authenticate, isAdmin, categoryController.createCategory);
router.put('/api/categories/:id', authenticate, isAdmin, categoryController.updateCategory);
router.delete('/api/categories/:id', authenticate, isAdmin, categoryController.deleteCategory);

module.exports = router;