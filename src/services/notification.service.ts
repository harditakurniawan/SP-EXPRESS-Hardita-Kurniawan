import { appendFile } from 'fs/promises';
import path from 'path';

class NotificationService {
    constructor(){}

    public async sendNotification(body: any): Promise<void> {
        try {
            console.log('Saving notification to log');

            const timestamp = new Date().toISOString().split('T')[0]
            const fileName = `notification_${timestamp}.log`;
            const logFilePath = path.join(__dirname, `../../log/${fileName}`);

            const logEntry = {
                body,
                timestamp: new Date().toISOString(),
            };

            await appendFile(logFilePath, `${JSON.stringify(logEntry)}\n`);

            console.log(`Notification logged successfully: ${fileName}`);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default new NotificationService();