import dotenv from 'dotenv';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

export const serverPort = parseInt(process.env.PORT || "5000", 10);

export const dbConfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  username: process.env.MYSQL_USER || 'gmm_user',
  password: process.env.MYSQL_PASSWORD || 'gmm_user_password',
  database: process.env.MYSQL_DATABASE || 'gmm_user',
  port: parseInt(process.env.MYSQL_PORT || '3306', 10),
  synchronize: true,
  entities: [
    join(__dirname + "/models/entities/*.[t|j]s")
  ],

}