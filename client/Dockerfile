FROM node:latest

# Creating app directory
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY package.json /usr/src/client

RUN npm install

CMD ["npm", "start"]