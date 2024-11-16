import express from 'express'
import { getBatch } from '../controller/courseManagement/batchManagement/getBatch.controller';
import { createBatch } from '../controller/courseManagement/batchManagement/createBatch.controller';
import { editBatch } from '../controller/courseManagement/batchManagement/editBatch.controller';
import { deleteBatch } from '../controller/courseManagement/batchManagement/deleteBatch.controller';

const router = express.Router();

// Get Batch route
router.route('/get').get(getBatch);

// Create Batch route
router.route('/create').post(createBatch);

// Edit Batch route
router.route('/edit/:batchId').post(editBatch);

// Delete Batch route
router.route('/delete/:batchId').post(deleteBatch);

export default router;