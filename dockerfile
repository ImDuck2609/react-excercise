# Use Node base image
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build frontend
RUN npm run build

# Use a smaller image for runtime
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/server.js .
COPY package*.json ./

RUN npm install express pg

ENV PORT=5000
EXPOSE 5000

CMD ["node", "server.js"]
