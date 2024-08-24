import express from 'express'
import { createBlog } from '../controller/blog/createBlog.controller';
import { getBlog } from '../controller/blog/getBlog.controllet';

const router = express.Router();

// Create Blog route
router.route('/createBlog').post(createBlog);

// get blogs route
router.route('/getBlogs').get(getBlog);

export default router;