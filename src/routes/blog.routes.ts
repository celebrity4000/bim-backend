import express from 'express'
import { createBlog } from '../controller/blog/createBlog.controller';
import { getBlog } from '../controller/blog/getBlog.controllet';
import { upload } from '../middleware/multer.middleware';
import { editBlog } from '../controller/blog/editBlog.controller';
import { deleteBlog } from '../controller/blog/deleteBlog.controller';

const router = express.Router();


// get blogs route
router.route('/get').get(getBlog);

// Create Blog route
router.route('/create').post(upload.single("blogImage"),createBlog);

// Edit Blog route
router.route('/edit/:blogId').post(upload.single('blogImage'),editBlog);

// Delete Blog route
router.route('/delete/:blogId').post(deleteBlog);

export default router;
