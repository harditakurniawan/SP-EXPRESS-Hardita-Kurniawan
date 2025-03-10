import { Request, Response } from 'express';
import { response } from '../utils/response-status.util';
import { ResponseConfig } from '../config/config';
import notificationService from '../services/notification.service';

class NotificationController {
    constructor(){}

    async sendNotification(req: Request, res: Response) {
        try {
            // background process
            notificationService.sendNotification(req.body);

            return response.Success(res, ResponseConfig.notification.success.message, null);
        } catch (error: any) {
            return response.Error(res, error.message);
        }
    }
}

export default new NotificationController();