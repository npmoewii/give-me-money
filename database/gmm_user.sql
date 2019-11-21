  
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- DROP DATABASE IF EXISTS `gmm_user`;
CREATE DATABASE IF NOT EXISTS `gmm_user` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `gmm_user`;

CREATE TABLE `user` (
  `username` varchar(20) COLLATE utf8mb4_unicode_ci PRIMARY KEY,
  `display_name` varchar(50) COLLATE utf8mb4_unicode_ci,
  `key` varchar(10) COLLATE utf8mb4_unicode_ci
) DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

COMMIT;

START TRANSACTION;
DROP USER IF EXISTS 'gmm_user'@'%';
CREATE USER 'gmm_user'@'%' IDENTIFIED WITH mysql_native_password BY 'gmm_user_password';
GRANT ALL PRIVILEGES ON `gmm_user`.* TO 'gmm_user'@'%';
FLUSH PRIVILEGES;