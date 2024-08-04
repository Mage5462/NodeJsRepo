From node:latest
WORKDIR /app
COPY ..
RUN npm install
EXPOSE 8283
CMD [ "npm", "start" ]
