  
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- DROP DATABASE IF EXISTS `gmm_debt`;
CREATE DATABASE IF NOT EXISTS `gmm_debt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `gmm_debt`;

CREATE TABLE IF NOT EXISTS `debt` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `username_creditor` varchar(20) COLLATE utf8mb4_unicode_ci,
  `username_debtor` varchar(20) COLLATE utf8mb4_unicode_ci,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci,
  `cost` double,
  `created_datetime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
) DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

COMMIT;

START TRANSACTION;
-- DROP USER IF EXISTS 'gmm_debt'@'%';
CREATE USER 'gmm_debt'@'%' IDENTIFIED BY 'gmm_debt_password';
GRANT ALL PRIVILEGES ON `gmm_debt`.* TO 'gmm_debt'@'%';
FLUSH PRIVILEGES;
COMMIT;
