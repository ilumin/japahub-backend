FROM node:18.12.1

WORKDIR /app
RUN apt-get update && apt-get install -y netcat
ENV path /app/node_modules/.bin:$PATH
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]