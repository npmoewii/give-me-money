USE `gmm_user`;
START TRANSACTION;
INSERT INTO `user`(`username`, `display_name`, `key`) VALUES ("pawin", "Pawin Piemthai", "pawin"), ("pisit", "Pisit Wajanasar'a", "pisit"), ("punnisa", "Punnisa Jitwirot", "punnisa"), ("natchaporn", "Natchaporn Ponkitsaran", "natchaporn");
COMMIT;

USE `gmm_debt`;
START TRANSACTION;
INSERT INTO `debt`(`username_creditor`, `username_debtor`, `name`, `cost`) VALUES ("pisit", "pawin", "ค่าอาหารกลางวัน", 80);
COMMIT;

USE `gmm_transaction`;
START TRANSACTION;
INSERT INTO `transaction`(`username_from`, `username_to`, `money`) VALUES ("pawin", "pisit", 30);
COMMIT;