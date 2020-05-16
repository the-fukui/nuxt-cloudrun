FROM node:12.16.1-alpine3.11

ENV NUXT_PORT=8080
ENV NUXT_HOST=0.0.0.0

COPY ./src/ ./

CMD ./node_modules/.bin/nuxt start

EXPOSE 8080