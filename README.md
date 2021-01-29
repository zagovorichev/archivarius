# Archivarius

## Installation

## Configuration

### DEBUGGING:
```shell
# it run server which shows us requests in the console
php bin/console server:dump
```

### PHP Unit tests
`php bin/phpunit`

### Translations:
```shell script
./bin/console translation:update en --force
./bin/console translation:update ru --force

php bin/console debug:translation en --only-unused
php bin/console debug:translation en --only-missing
```