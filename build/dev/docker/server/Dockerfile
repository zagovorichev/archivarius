# syntax=docker/dockerfile:1
FROM ubuntu:latest

RUN apt update && apt install openssh-server sudo -y

RUN useradd -rm -d /home/ubuntu -s /bin/bash -g root -G sudo -u 1000 docker
RUN echo 'docker:docker' | chpasswd

RUN service ssh start
EXPOSE 22

CMD ["/usr/sbin/sshd","-D"]