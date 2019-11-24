```
docker run -itd --name gmm-service-user \
  -e MYSQL_HOST=192.168.0.136 \
  -e MYSQL_PORT=3306 \
  -e MYSQL_USER=gmm_user \
  -e MYSQL_PASSWORD=gmm_user_password \
  -e MYSQL_DATABASE=gmm_user \
  -p 7000:7000 \
  npmoewii/gmm-service-user
```