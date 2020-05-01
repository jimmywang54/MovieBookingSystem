echo "Creating Admin Backend Deployment"
kubectl apply -f admin-backend-service-account.yaml -n api
kubectl apply -f deployment.yaml -n api

echo "Exposing Backend Service with Node Port"
kubectl expose deployment admin-backend -n api  --type=NodePort --port 8080 --target-port 8080

echo "Execute lambda function"
AWS_PROFILE=prod aws lambda invoke --function-name sql-loader /dev/stdout