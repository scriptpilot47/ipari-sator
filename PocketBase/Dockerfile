FROM alpine:3.22 AS base

ARG PB_VERSION=0.29.2
ARG PB_ARCH=amd64

EXPOSE 8090
WORKDIR /app

RUN apk add --no-cache curl unzip ca-certificates
RUN curl -L -o /tmp/pb_zip \
    https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${PB_ARCH}.zip \
    && unzip /tmp/pb_zip -d /usr/local/bin \
    && rm /tmp/pb_zip

# Dev ---------------------------
FROM base AS dev
CMD [ "pocketbase", "serve", "--http=0.0.0.0:8090"]

# Prod --------------------------
FROM base AS prod