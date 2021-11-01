# Build stage builds source code
FROM node:16.10-alpine3.14 AS Builder

RUN apk add --no-cache python3 py3-pip make g++

WORKDIR /build

COPY package.json package-lock.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
COPY bin ./bin
RUN npm run build

# Installer stage installs production dependencies
FROM node:16.10-alpine3.14 AS Installer

RUN apk add --no-cache python3 py3-pip make g++

WORKDIR /install

COPY package.json package-lock.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npm install --production

# Final stage copies build and dependencies to final image
FROM node:16.10-alpine3.14

WORKDIR /app
COPY --from=Builder /build/dist ./
COPY --from=Installer /install/prisma ./prisma
COPY --from=Installer /install/node_modules ./node_modules
COPY package.json .

CMD [ "node", "./bin/start.js" ]