FROM node:16-alpine3.14

# Create app directory
WORKDIR /user/wwww

# Install app dependencies
COPY package*.json .

# Makes sure npm is up to date otherwise install dependencies attempts will fail
RUN npm install -g npm

# Install dependencies
RUN npm install

EXPOSE 3000

CMD npm run serve
