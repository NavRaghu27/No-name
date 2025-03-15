k8s_yaml('k8s.yaml')

docker_build('angular-image', '.', dockerfile='./Dockerfile', live_update=[sync('./src', '/app/src')])
docker_build('node-image', './server', dockerfile='./server/Dockerfile', live_update=[sync('./server', '/app/server')])
