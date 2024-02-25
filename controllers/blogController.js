// controllers/blogController.js
const Blog = require('../models/Blog');

// Aggregation pipeline to determine the number of reviews and overall rating
exports.getBlogStats = async (req, res) => {
  try {
    const stats = await Blog.aggregate([
      // aggregation pipeline stages
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};