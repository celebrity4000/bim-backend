import express from 'express'
import { upload } from '../middleware/multer.middleware';
import { getCourse } from '../controller/courseManagement/courseCatelog/getCourse.controller';
import { createCourse } from '../controller/courseManagement/courseCatelog/createCourse.controller';
import { editCourse } from '../controller/courseManagement/courseCatelog/editCourse.controller';
import { deleteCourse } from '../controller/courseManagement/courseCatelog/deleteCourse.controller';

const router = express.Router();

// Get courses route
router.route('/:adminId/get').get(getCourse);

// Create course route
router.route('/:adminId/create').post(upload.single('thumbnailImage'),createCourse);

// Edit course route
router.route('/edit/:adminId/:courseId').post(upload.single('thumbnailImage'),editCourse);

// Delete course route
router.route('/delete/:adminId/:courseId').post(deleteCourse);

export default router;