# -Registration-Form
node.js + react + security token

# Info
> Setup is done using docker setup

//
## Start MYSQL server 
> docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0.19  
  Disable sql_mode by typing:  
  mysql -u root -p  
  set global sql_mode='';  
  set session sql_mode='';

##
> ssh root@104.248.92.191
> password

##
> cd /opt/vacationPROD
> git pull

##
> docker-compose build

##
> docker rm -f client backend

## Start application client
> docker run -d -p 3000:3000 --name client vacation_client:latest  

## Start application backend
> docker run -d -p 5000:5000 --name backend vacation_server:latest

##
> docker ps

## Open in browser <MAXCHINE_IP>:3000
