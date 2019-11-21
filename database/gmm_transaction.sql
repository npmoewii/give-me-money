  
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- DROP DATABASE IF EXISTS `gmm_transaction`;
CREATE DATABASE IF NOT EXISTS `gmm_transaction` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `gmm_transaction`;

CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `username_from` varchar(20) COLLATE utf8mb4_unicode_ci,
  `username_to` varchar(20) COLLATE utf8mb4_unicode_ci,
  `money` double,
  `created_datetime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
) DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

COMMIT;

START TRANSACTION;
DROP USER IF EXISTS 'gmm_transaction'@'%';
CREATE USER 'gmm_transaction'@'%' IDENTIFIED BY 'gmm_transaction_password';
GRANT ALL PRIVILEGES ON `gmm_transaction`.* TO 'gmm_transaction'@'%';
FLUSH PRIVILEGES;
COMMIT;