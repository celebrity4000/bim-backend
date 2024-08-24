import express from 'express'
import { createCourse } from '../controller/course/createCourse.controller';
import { editCourse } from '../controller/course/editCourse.controller';
import { deleteCourse } from '../controller/course/deleteCourse.controller';
import { getCourse } from '../controller/course/getCourse.controller';

const router = express.Router();

// Get courses route
router.route('/getCourse').get(getCourse);

// Create course route
router.route('/createCourse').post(createCourse);

// Edit course route
router.route('/editCourse/:adminId/:courseId').post(editCourse);

// Delete course route
router.route('/deleteCourse/:adminId/:courseId').post(deleteCourse);

export default router;
