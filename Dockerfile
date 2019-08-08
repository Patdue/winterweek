FROM node as build
WORKDIR /build/
COPY package.json package-lock.json ./
RUN npm install

COPY .stylelintrc.js .eslintrc.js ./
COPY src ./src/
COPY config ./config/
RUN npm run build:dist

FROM nginx as web
COPY --from=build /build/dist /usr/share/nginx/html
