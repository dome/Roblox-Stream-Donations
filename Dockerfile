FROM node:20-buster-slim

WORKDIR /usr/src/app
COPY * ./
RUN npm install
COPY . .

CMD ["npm", "start"]
