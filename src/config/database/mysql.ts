
import { AppConfig } from '../config';

export class MySQLDBConfig {

    static MYSQL_DB = {
        host: AppConfig.DB_HOST,
        port: parseInt(AppConfig.DB_PORT),
        user: AppConfig.DB_USER,
        password: AppConfig.DB_PASSWORD,
        database: AppConfig.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 5, //mysql connection pool length
    };

    static getConnectionDetails(): object {
        return this.MYSQL_DB;
    }
}