FROM nginx:1.13-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY dist/ $APP_HOME/
