FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN echo "VITE_SERVER_DOMAIN='http://localhost:8080'" > .env.local

RUN npm install

COPY . .

RUN npm run build