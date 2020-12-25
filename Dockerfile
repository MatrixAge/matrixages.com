FROM node:lts-alpine AS compile

WORKDIR /app

COPY . /app

RUN npm install --registry https://registry.npm.taobao.org && npm run build

FROM node:lts-alpine AS deploy

WORKDIR /app

COPY --from=compile /app/.next /app/.next 
COPY --from=compile /app/node_modules /app/node_modules 
COPY --from=compile /app/package.json /app/package.json 