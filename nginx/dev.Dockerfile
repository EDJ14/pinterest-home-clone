FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
#RUN echo 127.0.0.1 192.168.99.101 > /etc/hosts