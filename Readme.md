# formeritis
TestTeam

Helli hello

## Descriptif
2 composants dans le même repo

- client : angular-cultydata-webapp
- server : cydbridge

Le client est autome et utilise une InMemoryDataBase fourni par les lib core d'angular
Le server est du spring boot (y avait dedans du mqtt/kafka/influxdb mais j'ai désinjecté les services)...du coup il ne reste que le contrôller et un service de catalog (...le swagger est déjà dans le server)

## Build Client :

Le client a été buildé avec :
Angular CLI: 1.7.4
Node: 8.1.2
npm 5.8.0

- Cloner le repo : git clone https://github.com/CULTYDATA/formeritis.git
- Se mettre sur angular-cultydata-webapp et faire un : npm install
- Monter le server de de : ng serve

=> localhost:4200

## Build Server :

Spring boot 2 et java 8

- Se mettre sur cydbridge : mvn clean install
- Deployement dev : mvn spring-boot:run

## Remarques 

-





