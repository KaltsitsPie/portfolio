# use node v20
FROM node:20

# create and setup the app work dir in container
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install npm packages
RUN npm install

# copy code to app/
COPY . /app

# Make sure 8080 is what your app listen in app.js
# EXPOSE 8081

# 启动Express服务器
CMD ["npm", "start"]
