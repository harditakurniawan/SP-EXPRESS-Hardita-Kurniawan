import { Response } from "express";

interface IResponse {
    meta: {
        code: number,
        status: string,
        message: Array<object> | string | null,
    },
    data?: object | null | any,
}

const formatResponse = (
    code: number,
    status: string,
    message: string | null = null,
    data: any = null
): IResponse => {
    return {
        meta: {
            code,
            status,
            message,
        },
        data,
    };
};

export const response = {
    Success: (res: Response, message: string, data: any): void => {
        const formattedResponse = formatResponse(200, 'ok', message, data);

        res.status(200).send(formattedResponse);
    },
    Error: (res: Response, message: string | any, statusCode = 500): void => {
        const formattedResponse = formatResponse(statusCode, 'error', message);

        res.status(statusCode).send(formattedResponse);
    },
};