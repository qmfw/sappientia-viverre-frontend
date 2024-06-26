FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
## NORMAL RELEASE :
## CMD [ "http-server", "dist" ]
## VUE SPA RELEASE :
#CMD [ "node", "run", "dev" ]
CMD [ "node", "./webServer" ]

# docker build -t sappientia-viverre .
# docker run -p 8080:8080 sappientia-viverre