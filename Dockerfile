# -------- Etapa de build --------
    FROM node:20-alpine AS build
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build -- --configuration production
    
    # -------- Etapa runtime ---------
    FROM nginx:1.25-alpine
    RUN rm /etc/nginx/conf.d/default.conf
    COPY nginx.conf /etc/nginx/conf.d
    COPY --from=build /app/dist/mousecat-lab/browser/* /usr/share/nginx/html
    EXPOSE 8080
    CMD ["nginx","-g","daemon off;"]
    