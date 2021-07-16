FROM node:15.7.0-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app
COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]
