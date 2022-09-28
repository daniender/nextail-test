FROM node:18.9.1-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY stock-app/package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.23.1-alpine

COPY --from=build-step /app/dist/report-app /usr/share/nginx/html