FROM node:latest

# Creating app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY package.json /usr/src/server

RUN npm install

CMD ["npm", "start"]