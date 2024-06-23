const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 新規投稿作成
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// すべての投稿を取得
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
