import express from 'express'
import { createBlog } from '../controller/blog/createBlog.controller';
import { getBlog } from '../controller/blog/getBlog.controllet';
import { upload } from '../middleware/multer.middleware';

const router = express.Router();


// get blogs route
router.route('/get').get(getBlog);

// Create Blog route
router.route('/:adminId/create').post(upload.single("blogImage"),createBlog);

export default router;
