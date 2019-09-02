FROM node:11.8-alpine

ENV NUXT_PORT=8080
ENV NUXT_HOST=0.0.0.0

WORKDIR /app

ADD ./src ./

CMD ["sh"]

RUN npm install --no-cache && npm run build

CMD npm run start

EXPOSE 8080