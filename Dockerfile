FROM node:6.9.1-slim
MAINTAINER I <ibelyalov@yandex.ru>

WORKDIR /code

COPY package.json .

RUN npm install

COPY . .
