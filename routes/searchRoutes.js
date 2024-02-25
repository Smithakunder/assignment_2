// routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/blog-titles', searchController.searchBlogTitles);

module.exports = router;