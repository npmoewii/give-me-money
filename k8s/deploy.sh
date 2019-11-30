#!/bin/sh
kubectl delete deployment gmm-frontend-deployment
kubectl delete deployment gmm-database-deployment
kubectl delete deployment gmm-service-user-deployment
kubectl delete deployment gmm-service-debt-deployment
kubectl delete deployment gmm-service-transaction-deployment

kubectl delete service gmm-frontend-service
kubectl delete service gmm-database-service
kubectl delete service gmm-service-user-service
kubectl delete service gmm-service-debt-service
kubectl delete service gmm-service-transaction-service

kubectl apply -f deployment/gmm-frontend.yaml
kubectl apply -f deployment/gmm-database.yaml
kubectl apply -f deployment/gmm-service-user.yaml
kubectl apply -f deployment/gmm-service-debt.yaml
kubectl apply -f deployment/gmm-service-transaction.yaml

kubectl apply -f service/gmm-frontend.yaml
kubectl apply -f service/gmm-database.yaml
kubectl apply -f service/gmm-service-user.yaml
kubectl apply -f service/gmm-service-debt.yaml
kubectl apply -f service/gmm-service-transaction.yaml