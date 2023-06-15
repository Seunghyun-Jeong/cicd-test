FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

CMD [ "sleep", "infinity" ]

# RUN chmod +x /entrypoint.sh


# ENTRYPOINT [ "sh", "/app/entrypoint.sh" ]