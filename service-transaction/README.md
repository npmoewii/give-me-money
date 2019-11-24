docker run -itd --name gmm-service-transaction \
  -e DB_HOST=192.168.0.136 \
  -e DB_PORT=3306 \
  -e DB_USERNAME=gmm_transaction \
  -e DB_PASSWORD=gmm_transaction_password \
  -e DB_NAME=gmm_transaction \
  -e TRANSACTION_PORT=7002 \
  -e USER_BASE_ADDRESS=http://192.168.0.136:7000 \
  -p 7002:7002 \
  npmoewii/gmm-service-transaction