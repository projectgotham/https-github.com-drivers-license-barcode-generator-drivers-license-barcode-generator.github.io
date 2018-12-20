FROM node:10.14.2

MAINTAINER Kyle Decot <kyle.decot@icloud.com>

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --quiet

COPY . .

EXPOSE 8000

VOLUME /app/src

CMD yarn start
