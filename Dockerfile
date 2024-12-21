FROM node:22 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS development
ENV NODE_ENV=development
ENV BUILD_STAGE = development
CMD ["npm", "run", "dev"]

FROM base AS production
ENV NODE_ENV=production
ENV BUILD_STAGE = production
CMD ["npm", "run", "preview"]