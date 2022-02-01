FROM nginx:alpine

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8

COPY ./index.html /usr/share/nginx/html/index.html
