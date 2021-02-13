FROM node:lts-alpine AS compile

WORKDIR /app

COPY . /app

RUN npm install -g cnpm --registry https://registry.npm.taobao.org && cnpm install && cnpm run build

FROM node:lts-alpine AS deploy

WORKDIR /app

COPY --from=compile /app/.next /app/.next 
COPY --from=compile /app/public /app/public 
COPY --from=compile /app/node_modules /app/node_modules 
COPY --from=compile /app/package.json /app/package.json 