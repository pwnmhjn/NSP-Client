FROM node:20

WORKDIR /NSP

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm","run","dev" ]

