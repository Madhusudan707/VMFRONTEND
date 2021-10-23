FROM node:12-alpine as build-stage
WORKDIR /vm-app-fe

COPY ./package.json /vm-app-fe
COPY ./yarn.lock /vm-app-fe

RUN yarn install

COPY . /vm-app-fe
RUN yarn build

FROM nginx:alpine
COPY --from=build-stage /vm-app-fe/build /srv/www/app
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /vm-app-fe/nginx/nginx.dev-server.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
