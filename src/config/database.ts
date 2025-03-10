import { MySQLDBConfig } from './database/mysql';
import mysql from 'mysql2/promise';

const sql = mysql.createPool(MySQLDBConfig.getConnectionDetails());

sql.getConnection()
    .then((connection) => {
        console.log('Successfully connected to MySQL');
        connection.release();
    })
    .catch((error) => {
        console.error(`Error connecting to MySQL: ${error.message}`);
    });

export default { sql };