# Springboot Official: https://spring.io/guides/topicals/spring-boot-docker/
FROM node:20.15
WORKDIR /any-path/flying-monkey
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]

