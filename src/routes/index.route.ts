import express from 'express';
import OrderRoute from "./order.route";
import NotificationRoute from "./notification.route";

const router = express.Router();

router.use("/v1/orders", OrderRoute);
router.use("/v1/notifications", NotificationRoute);

export default router;