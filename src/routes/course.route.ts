import express from 'express'
import { createCourse } from '../controller/course/createCourse.controller';
import { editCourse } from '../controller/course/editCourse.controller';
import { deleteCourse } from '../controller/course/deleteCourse.controller';
import { getCourse } from '../controller/course/getCourse.controller';
import { upload } from '../middleware/multer.middleware';

const router = express.Router();

// Get courses route
router.route('/get').get(getCourse);

// Create course route
router.route('/create').post(upload.single('thumbnailImage'),createCourse);

// Edit course route
router.route('/edit/:adminId/:courseId').post(upload.single('thumbnailImage'),editCourse);

// Delete course route
router.route('/delete/:adminId/:courseId').post(deleteCourse);

export default router;
