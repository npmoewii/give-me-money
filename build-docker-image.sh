#! /bin/bash

docker build -t npmoewii/gmm-database ./database/
docker build -t npmoewii/gmm-frontend ./frontend/
docker build -t npmoewii/gmm-service-user ./service-user/

docker login
docker push npmoewii/gmm-database
docker push npmoewii/gmm-frontend
docker push npmoewii/gmm-service-user
docker logout
