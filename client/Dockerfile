FROM node:alpine as builder
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./public/index.html /usr/share/nginx/html/index.html
COPY --from=builder /app/dist /usr/share/nginx/html
