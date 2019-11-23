import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const db = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "gmm_user",
  port: process.env.MYSQL_PORT || "3306"
};