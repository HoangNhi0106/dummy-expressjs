FROM node:16-alpine

WORKDIR /

ENV PATH node_modules/.bin:$PATH

COPY package.json ./

RUN npm install --save

COPY . .

RUN npm run prisma:migrate

EXPOSE 8080

CMD ["npm", "run", "dev"]