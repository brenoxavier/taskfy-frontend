FROM node:16.17

COPY ./dist /var/www/html

EXPOSE 8080

ENTRYPOINT ["npx", "http-server", "--proxy", "http://127.0.0.1:8080?", "/var/www/html"]
