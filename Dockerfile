FROM node:lts-alpine AS compile

WORKDIR /app

COPY . /app

RUN npm install && npm run build

FROM node:lts-alpine AS deploy

WORKDIR /app

COPY --from=compile /app/dist /app/dist 
COPY --from=compile /app/node_modules /app/node_modules 