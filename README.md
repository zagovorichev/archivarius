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

## Ansible

### installation
https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-ubuntu

### development
with vagrant:
```shell
sudo apt install virtualbox
curl -O https://releases.hashicorp.com/vagrant/2.2.9/vagrant_2.2.9_x86_64.deb
sudo apt install ./vagrant_2.2.9_x86_64.deb
vagrant --version
```

> On the Windows vagrant should be installed on both: windows and WSL side.

```shell
vagrant init debian/bullseye64
vagrant ssh
sudo vim .ssh/authorized_keys
// and add new ssh publick key there to make possibility to connect with ssh
```

After that we can test that ansible works:
```shell
ansible-playbook ci/ansible/playbook.yml -i ci/ansible/hosts.ini
;or
ansible vb -m ping -i ci/ansible/hosts.ini
```

to change hosts:
1. run cmd as administrator
2. `notepad C:\Windows\System32\drivers\etc\hosts`
3. add new record for vagrant `192.168.33.10 archivarius.vagrant`
4. update dns `ipconfig /flushdns`

### Run Deployment:
```shell
ansible-playbook ci/ansible/playbook.yml -i ci/ansible/hosts.ini
```

Run only jobs by tag
```shell
ansible-playbook ci/ansible/playbook.yml -i ci/ansible/hosts.ini -t php-extensions
```

#### Ansible Vault for secret data
```shell
ansible-vault create ci/ansible/vars/vault.yml
ansible-vault view ci/ansible/vars/vault.yml
ansible-vault edit ci/ansible/vars/vault.yml
```

__variables__
```yaml
---
vauld_symfony_secret: "asdf1234"
vault_ssh_ip: "127.0.0.1"
vault_ssh_username: "www-data"
```

#### How to use secret data:

```shell
ansible-playbook ci/ansible/playbook.yml -i ci/ansible/hosts.ini -t php-extensions --ask-vault-pass
```

## GCP

- Create VM f1-free tier?
- get IP
- and ssh to this env
- adding ssh

### Adding ssh
- Goto[console ssh](https://console.cloud.google.com/compute/metadata/sshKeys?_ga=2.78964887.2026917460.1614793515-199012411.1614594383)
- press Edit
- Add item
- on the local machine: `cat ~/.ssh/id_ed25519.pub`
- copy key and put it to the field, press save
- you can try ssh username@iptogcpvm