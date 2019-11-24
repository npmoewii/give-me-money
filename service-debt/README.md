```
docker run -itd --name gmm-service-debt \
  -e DB_HOST=http://192.168.0.136 \
  -e DB_PORT=3306 \
  -e DB_USERNAME=gmm_debt \
  -e DB_PASSWORD=gmm_debt_password \
  -e DB_NAME=gmm_debt \
  -e DEBT_PORT=7001 \
  -e USER_BASE_ADDRESS=http://192.168.0.136:7000 \
  -p 7001:7001 \
  npmoewii/gmm-service-debt
```