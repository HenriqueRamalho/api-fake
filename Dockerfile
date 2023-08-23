FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm config get strict-ssl

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:prod"]