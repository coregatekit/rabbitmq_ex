# RabbitMQ example for .Net Core and NodeJS
start rabbitmq container with
```
docker-compose up
```
or
```
docker run -d --rm \
 -p 15672:15672 \
 -p 5672:5672 \
 -v rabbit-data:/data \
 --hostname rabbit-service \
 --name awesome-rabbit \
 rabbitmq:3-management
```

### For .Net Core
cd to directory and<br />
```dotnet restore```<br />
to restore dependencies<br />

change directory to .net core project and<br /> 
```dotnet run``` <br />
receiver and sender to start application

### For NodeJS
```npm install```<br />
run ```node receiver.js``` to start app receiver side<br />
run ```node sender.js``` to start app sender side