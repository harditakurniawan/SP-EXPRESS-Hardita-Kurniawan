export const AppConfig = {
    APP_NAME                : process.env.APP_NAME,
    APP_PREFIX              : process.env.APP_PREFIX,
    APP_PORT                : process.env.APP_PORT,
    DB_HOST                 : process.env.DB_HOST,
    DB_PORT                 : process.env.DB_PORT as string,
    DB_USER                 : process.env.DB_USER as string,
    DB_PASSWORD             : process.env.DB_PASSWORD as string,
    DB_DATABASE             : process.env.DB_DATABASE as string,
}

export const ResponseConfig = {
    order: {
        success: {
            status  : 200,
            message : 'order success',
        },
        failed: {
            status  : 500,
            message : 'order error'
        },
    },
    notification: {
        success: {
            status  : 200,
            message : 'notification success',
        },
        failed: {
            status  : 500,
            message : 'notification error'
        },
    },
}