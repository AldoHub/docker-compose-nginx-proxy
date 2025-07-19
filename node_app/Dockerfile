FROM node:latest

WORKDIR /app
COPY server.js ./
COPY package*.json ./

WORKDIR /app/public
COPY public/index.html ./

WORKDIR /app/public/images
COPY public/images ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

#build docker image
#docker build -t nginx-node-docker .

#run docker image
#docker run -p 3000:3000 nginx-node-docker