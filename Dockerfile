FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN npm install # Or yarn install if you prefer yarn

COPY frontend ./
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]