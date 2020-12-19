FROM node:12.10.0-alpine

RUN npm i -g nodemon

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["nodemon", "src/index.js"]
