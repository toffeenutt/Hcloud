FROM node:22-alpine AS frontend_build

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install

COPY ./frontend ./

RUN npm run build

# backend
FROM node:22-alpine

WORKDIR /app

COPY ./backend/package*.json ./

RUN npm install

COPY ./backend ./
COPY --from=frontend_build /app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]