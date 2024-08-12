import express from 'express'
import changePassword from '../controller/admin/changePassword.controller';
import createCourse from '../controller/admin/createCourse.controller';
import createNewAdmin from '../controller/admin/createNewAdmin.controller';
import editCourse from '../controller/admin/editCourse.controller';
import deleteCourse from '../controller/admin/deleteCourse.controller';

const router = express.Router();

// Change password route
router.route ('/changePassword/:id').put(changePassword);

// Create course route
router.route ('/createCourse').post(createCourse);

// Edit course route
router.route ('/editCourse/:id').put(editCourse);

// Delete course route
router.route ('/deleteCourse/:id').put(deleteCourse);

// Create admin route
router.route ('/createNewAdmin').post(createNewAdmin);



export {router};