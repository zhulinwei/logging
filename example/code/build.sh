# build
docker build -t zhulinwei/logging:latest . && docker image prune -f .

# push
docker push zhulinwei/logging:latest