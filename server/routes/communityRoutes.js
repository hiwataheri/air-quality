const express = require('express');
const { getPost, createPost, getPostById, updatePost, deletePost } = require('../controllers/communityControllers');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

//getting all routes from background
router.route('/').get(protect, getPost)
//create route
router.route('/').post(protect, createPost)
//updating and deleting routes by _id
router.route('/:id').get(getPostById).put(protect, updatePost).delete(protect, deletePost)


module.exports = router;