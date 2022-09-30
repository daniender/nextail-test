FROM node:18.9.1-alpine

WORKDIR /usr/share/node

COPY index.ts ./
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm install -g typescript
RUN tsc

EXPOSE 5000

CMD ["node", "dist/"]