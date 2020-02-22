FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ENV PORT=5000
ENV HOST=104.248.92.191
ENV USER=root
ENV PASSWORD=password
ENV DB_PORT=3306

ENV SECRET=ghjd23_jhbbgv54
ENV ADMIN_SECRET=789_Ad_456_Min_123

RUN npm install && npm install nodemon
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
