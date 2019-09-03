FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
#COPY /dist /etc/nginx/html/dist

ENTRYPOINT ["nginx","-g","daemon off;"]
#$ docker run --name tmp-nginx-container -d nginx
#$ docker cp tmp-nginx-container:/etc/nginx/nginx.conf /host/path/nginx.conf
#  docker exec -it contrainername /bin/bash 
#$ docker rm -f tmp-nginx-container
