import express from 'express';
import NotificationController from '../controllers/notification.order';

const router = express.Router();

router.post('/notify-orders', NotificationController.sendNotification);

export default router;