FROM node:alpine

WORKDIR /server

COPY package.json /server/

RUN npm install

COPY src /server/src

CMD ["node" , "src/server.js"]