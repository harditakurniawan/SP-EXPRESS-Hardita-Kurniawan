import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import { AppConfig } from './config/config';
import database from '../src/config/database';
import apiRoutes from '../src/routes/index.route';
import createHttpError from 'http-errors';
import cors from "cors";
import { response } from './utils/response-status.util';

dotenv.config();

const app   = express();
const PORT  = AppConfig.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// Call DB Configuration
database.sql;

// Routes
app.use(`/${AppConfig.APP_PREFIX}`, apiRoutes);

// Middleware for 404 - Not Found
app.use(function (req, res, next) {
    next(createHttpError(404));
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    response.Error(res, err.message || 'Internal Server Error', err.status || 500);
});

app.listen(PORT, () => {
    console.log(`${AppConfig.APP_NAME} is running on port ${PORT}`);
});