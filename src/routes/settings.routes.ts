import express from 'express'
import { traineeSetting } from '../controller/settings/traineeSetting';
import { trainerSetting } from '../controller/settings/trainerSettings';
import { adminSetting } from '../controller/settings/adminSetting';

const router = express.Router();

router.route ('/admin/:adminId').post(adminSetting);
router.route ('/trainer/:trainerId').post(trainerSetting);
router.route ('/trainee/:traineeId').post(traineeSetting);

export default router;