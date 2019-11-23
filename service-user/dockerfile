# FROM node:alpine
FROM arm32v7/node

COPY . /app

WORKDIR /app

RUN npm install

VOLUME [ "/app" ]

EXPOSE 7000

CMD ["npm", "start"]