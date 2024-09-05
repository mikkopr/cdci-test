FROM node:20.17-alpine3.20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

USER node

CMD ["node", "./index.js"]
