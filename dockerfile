FROM --platform=amd64 node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

CMD [ "sleep", "infinity" ]
