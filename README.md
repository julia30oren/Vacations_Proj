# -Registration-Form
node.js + react + security token

# Info
> Setup is done using docker setup

//
## Start MYSQL server 
> docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0.19

## Start application client
> docker run -d -p 3000:3000 vacation_client:latest  

## Start application backend
> docker run -d -p 5000:5000 vacation_server:latest

## Open in browser <MAXCHINE_IP>:3000
