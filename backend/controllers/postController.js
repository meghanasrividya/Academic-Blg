const { Post, User, Category } = require('../models');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ['username', 'firstName', 'lastName'] },
        { model: Category, attributes: ['name', 'slug'] },
      ],
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

exports.getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { slug: req.params.slug },
      include: [
        { model: User, attributes: ['username', 'firstName', 'lastName'] },
        { model: Category, attributes: ['name', 'slug'] },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, categoryId } = req.body;
    const slug = title.toLowerCase().replace(/ /g, '-');

    const post = await Post.create({
      title,
      content,
      slug,
      userId: req.user.id,
      categoryId,
    });

    res.status(201).json({ message: 'Post created', post });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to update this post' });
    }

    await post.update(req.body);
    res.json({ message: 'Post updated', post });
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to delete this post' });
    }

    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};