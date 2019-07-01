FROM node:12.5.0-alpine

ENV APP_HOME=/app
WORKDIR $APP_HOME
RUN mkdir -p $APP_HOME
COPY . $APP_HOME/
RUN npm install
ENTRYPOINT npm start
