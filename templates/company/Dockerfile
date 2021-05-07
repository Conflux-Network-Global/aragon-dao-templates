# Stage 1 - build
FROM node:12.22 as build-deps
WORKDIR /usr/src/app
COPY manifest.json artifact.json ./build/

# Stage 2 - the production environment
FROM nginx:1.18-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]