import express from 'express'
import { createRoomController } from '../service/agoraService';


const router = express.Router();

router.route ('/whiteboard').get(createRoomController);

export default router;
