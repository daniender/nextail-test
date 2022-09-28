FROM node:18.9.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN tsc

COPY dist/ .

EXPOSE 5000

CMD ["node", "dist/"]