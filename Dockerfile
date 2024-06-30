FROM node:22-alpine3.19 AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM caddy:2.8.4-alpine

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=builder /app/dist/ /usr/share/caddy/

EXPOSE 5173
