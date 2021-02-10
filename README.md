# Archivarius

## Installation

## Configuration

### DEBUGGING:
#### Locally
```shell
# it run server which shows us requests in the console
php bin/console server:dump
```
#### In the docker
```shell
docker exec -it archivarius-build composer --dev symfony/phpunit-bridge
docker exec -it archivarius-build bin/phpunit
```

And after the first run there will be a folder __.phpunit__ that we can use to connect PHPStorm


### PHP Unit tests
`php bin/phpunit`

### Translations:
```shell script
./bin/console translation:update en --force
./bin/console translation:update ru --force

php bin/console debug:translation en --only-unused
php bin/console debug:translation en --only-missing
```

## Dockerization

- `cd docker`
- `docker-compose up -d`
- To rebuild this image you must use `docker-compose build` or `docker-compose up --build`
  
- **TODO how to do that not with root? shell on install in commands? or Jenkins deploy?**
- **TODO change permissions to the var? on setup?**
- `docker exec -it archivarius-build composer install`
- `docker exec -it archivarius-build yarn install`
- `docker exec -it archivarius-build yarn build` for prod
- `docker exec -it archivarius-build yarn dev` to build dev fe
- `docker exec -it archivarius-build yarn watch` for fe development