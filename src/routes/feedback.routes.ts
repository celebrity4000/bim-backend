import express from 'express'
import { createFeedback } from '../controller/feedback/createFeedback.controller';
import { getFeedbacks, getStudentsFeedbacks, getTeachersFeedbacks } from '../controller/feedback/getFeedback.controller';


const router = express.Router();

// Get feedbacks route
router.route('/get-all').get(getFeedbacks);

// Get students feedbacks route
router.route('/get-students').get(getStudentsFeedbacks);

// Get teachers feedbacks route
router.route('/get-teachers').get(getTeachersFeedbacks);

// Create feedback route
router.route('/create').post(createFeedback);




export default router;