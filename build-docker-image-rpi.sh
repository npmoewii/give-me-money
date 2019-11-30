#! /bin/bash

docker build -f ./database/rpi.dockerfile -t npmoewii/gmm-database:rpi ./database/
docker build -f ./frontend/rpi.dockerfile -t npmoewii/gmm-frontend:rpi ./frontend/
docker build -f ./service-user/rpi.dockerfile -t npmoewii/gmm-service-user:rpi ./service-user/
docker build -f ./service-debt/rpi.dockerfile -t npmoewii/gmm-service-debt:rpi ./service-debt/
docker build -f ./service-transaction/rpi.dockerfile -t npmoewii/gmm-service-transaction:rpi ./service-transaction/

docker login
docker push npmoewii/gmm-database:rpi
docker push npmoewii/gmm-frontend:rpi
docker push npmoewii/gmm-service-user:rpi
docker push npmoewii/gmm-service-debt:rpi
docker push npmoewii/gmm-service-transaction:rpi
docker logout
